import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare } from 'lucide-react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Simulate automated responses
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === 'user') {
      setIsTyping(true);
      
      const timer = setTimeout(() => {
        setIsTyping(false);
        
        // Generate automated response based on user's message
        const userMessage = messages[messages.length - 1].text.toLowerCase();
        let response = '';
        
        if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
          response = "Hello! How can I help you with your assignments today?";
        } else if (userMessage.includes('price') || userMessage.includes('cost') || userMessage.includes('fee')) {
          response = "Our pricing depends on the assignment type, complexity, and deadline. Would you like to get a personalized quote?";
        } else if (userMessage.includes('deadline') || userMessage.includes('urgent')) {
          response = "We handle urgent assignments too! When is your deadline? We'll try our best to accommodate your timeline.";
        } else if (userMessage.includes('subject') || userMessage.includes('topic')) {
          response = "We cover a wide range of subjects including Computer Science, Business, Engineering, Medicine, Law, and many more. What subject is your assignment about?";
        } else if (userMessage.includes('thank')) {
          response = "You're welcome! Feel free to reach out if you need any further assistance.";
        } else {
          response = "Thanks for your message. One of our academic experts will get back to you shortly. If you need immediate assistance, please call or WhatsApp us at 03229549909.";
        }
        
        setMessages([...messages, { text: response, sender: 'bot', time: new Date() }]);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    setMessages([...messages, { text: newMessage, sender: 'user', time: new Date() }]);
    setNewMessage('');
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-24 right-6 z-50 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary-dark transition-colors"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare size={24} />
      </motion.button>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat Header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <MessageSquare size={20} className="mr-2" />
                <h3 className="font-semibold">Live Chat Support</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                  <MessageSquare size={40} className="mb-2 opacity-50" />
                  <p className="mb-1">Welcome to our live chat support!</p>
                  <p className="text-sm">How can we help you today?</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === 'user' 
                            ? 'bg-primary text-white rounded-br-none' 
                            : 'bg-white border border-gray-200 rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-primary-light' : 'text-gray-500'}`}>
                          {formatTime(message.time)}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-gray-200 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-primary text-white p-2 rounded-r-md hover:bg-primary-dark transition-colors"
                  disabled={newMessage.trim() === ''}
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;
