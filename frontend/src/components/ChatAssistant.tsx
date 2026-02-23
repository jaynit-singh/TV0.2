import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Basic response patterns
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return 'Hello! How can I assist you with our website today?';
    }
    if (lowerMessage.includes('help')) {
      return 'I can help you with:\n• Navigation questions\n• Account issues\n• Service information\n• Technical support\nWhat do you need help with?';
    }
    if (lowerMessage.includes('login') || lowerMessage.includes('sign in')) {
      return 'For login issues:\n1. Check your credentials\n2. Use the "Forgot Password" link\n3. Contact admin if needed\nWould you like me to guide you to the login page?';
    }
    if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
      return 'We offer various services including web development, mobile apps, and digital solutions. Check our Services page for detailed information!';
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
      return 'You can reach us through:\n• Contact form on the website\n• Email: support@thevittavardhan.com\n• Phone: +91-XXXXXXXXXX\nHow would you prefer to contact us?';
    }
    if (lowerMessage.includes('thank')) {
      return 'You\'re welcome! Is there anything else I can help you with?';
    }
    
    // Default response
    return 'I understand your question. Let me help you with that. Could you provide more details so I can assist you better?';
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-royal-blue text-tech-white p-4 rounded-full shadow-2xl border border-tech-white/30 hover:bg-accent-red transition-all duration-300 transform hover:scale-110 group hover:shadow-3xl"
        aria-label="Chat Assistant"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-white/20 shadow-lg">
          Need Help? Chat with us!
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-tech-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-tech-white/20 flex flex-col transition-all duration-300 hover:shadow-3xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-royal-blue to-accent-red text-tech-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Bot className="w-5 h-5" />
          <div>
            <h3 className="font-semibold">AI Assistant</h3>
            <p className="text-xs opacity-90">Always here to help</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            aria-label={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-tech-white/5 backdrop-blur-md">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl backdrop-blur-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-royal-blue/90 to-accent-red/90 text-tech-white rounded-br-sm shadow-lg border border-tech-white/10'
                      : 'bg-tech-white/20 text-gray-800 rounded-bl-sm shadow-lg border border-tech-white/30'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && <Bot className="w-4 h-4 mt-0.5 text-blue-600" />}
                    <div className="flex-1">
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                    {message.sender === 'user' && <User className="w-4 h-4 mt-0.5 text-blue-100" />}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-tech-white/20 backdrop-blur-sm text-gray-800 p-3 rounded-2xl rounded-bl-sm shadow-lg border border-tech-white/30">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4 text-blue-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-tech-white/10 backdrop-blur-lg border-t border-tech-white/20 rounded-b-3xl">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-tech-white/20 backdrop-blur-sm border border-tech-white/30 rounded-full focus:outline-none focus:ring-2 focus:ring-royal-blue/50 focus:border-tech-white/50 text-tech-white placeholder-tech-white/70 transition-all duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputText.trim() === ''}
                className="bg-gradient-to-r from-royal-blue/90 to-accent-red/90 backdrop-blur-sm text-tech-white p-2 rounded-full hover:from-accent-red/90 hover:to-royal-blue/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-tech-white/20 shadow-lg"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatAssistant;
