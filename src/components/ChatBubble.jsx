// ChatBubble.jsx
import React, { useState, useRef, useEffect } from 'react';
const API_BASE = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:8000';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "👋 Hi there! I am Gowtham's AI assistant. Ask about his experience, projects, or skills. He's open to interview opportunities."
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // ---------- Normalization helpers ----------
  function isRagAnswer(x) {
    return (
      x &&
      typeof x === 'object' &&
      typeof x.answer === 'string' &&
      Array.isArray(x.sources)
    );
  }

  function formatSources(sources) {
    if (!sources || !sources.length) return '';
    const top = sources.slice(0, 3);
    const lines = top
      .map(
        (s, i) =>
          `${i + 1}. **${s.title}** — \`${s.location}\`\n   > ${s.snippet}`
      )
      .join('\n');
    return `\n\n**Sources**\n${lines}`;
  }

  function toAssistantContent(data) {
    // Case 1: server returns { response: string }
    if (data && typeof data.response === 'string') {
      return data.response;
    }

    // Case 2: server returns RAG JSON { answer, sources }
    if (isRagAnswer(data)) {
      
      return data.answer;
    }

    // Case 3: server returns plain string
    if (typeof data === 'string') {
      try {
        // Sometimes servers send JSON as a string—attempt parse
        const parsed = JSON.parse(data);
        if (typeof parsed?.response === 'string') return parsed.response;
        if (isRagAnswer(parsed)) return parsed.answer + formatSources(parsed.sources);
      } catch {
        // Not JSON, just display it
        return data;
      }
    }

    throw new Error('Unexpected response format (no response/answer).');
  }
  // -------------------------------------------

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      role: 'user',
      content: inputMessage.trim()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          // NOTE: Do not send Access-Control-Allow-Origin from client; server must set CORS.
        },
        mode: 'cors',
        credentials: 'omit',
        body: JSON.stringify({
          messages: [{ role: 'user', content: userMessage.content }]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server response:', response.status, errorText);
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }

      // Accept JSON or text (for flexibility with different backends)
      const contentType = response.headers.get('content-type') || '';
      const raw = contentType.includes('application/json')
        ? await response.json()
        : await response.text();

      const assistantText = toAssistantContent(raw);

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: assistantText
        }
      ]);
    } catch (error) {
      console.error('Chat Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            `Error: ${error.message || 'Something went wrong. Please try again later.'}`
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-white"
        aria-label="Open chat"
      >
        {/* Icon changes based on chat state */}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Dialog */}
      <div
        className={`absolute bottom-20 right-0 w-80 md:w-96 bg-blue-50 rounded-lg shadow-xl border border-blue-200 transform transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Chat Header */}
        <div className="p-4 border-b border-blue-900 bg-gradient-to-r from-blue-800 to-blue-900 rounded-t-lg">
          <h3 className="text-lg font-semibold text-white">Gowtham&apos;s Chat Assistant</h3>
          <p className="text-sm text-white opacity-90">Ask about my skills, projects, and experience</p>
        </div>

        {/* Chat Content */}
        <div className="p-4 h-80 overflow-y-auto bg-blue-50">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start ${message.role === 'user' ? 'justify-end' : ''}`}>
                <div
                  className={`${
                    message.role === 'user' ? 'bg-blue-600 text-white ml-auto' : 'bg-white text-gray-800 mr-auto'
                  } p-3 rounded-lg shadow-sm max-w-xs border ${
                    message.role === 'user' ? 'border-blue-500' : 'border-blue-100'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-lg shadow-sm max-w-xs border border-gray-200">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-blue-200 bg-white">
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
