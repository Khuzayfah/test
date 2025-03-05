'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaRobot, FaUser, FaPaperPlane, FaSpinner } from 'react-icons/fa';

// Define service options type
type ServiceOptionsType = {
  [key: string]: string[];
};

// Form data interface
interface FormData {
  name: string;
  email: string;
  website: string;
  serviceCategory: string;
  serviceType: string;
  message: string;
}

// Message interface for chat
interface ChatMessage {
  type: 'bot' | 'user';
  content: string | JSX.Element;
  id: string;
}

export default function ChatbotInterface() {
  // Service categories and their respective options
  const serviceOptions: ServiceOptionsType = {
    "Website Development": [
      "Desktop Website",
      "Mobile Website",
      "Web-based Application"
    ],
    "SEO Services": [
      "SEO for Website",
      "Content SEO (30 Days)"
    ],
    "Social Media": [
      "Content Creation (30 Days)"
    ]
  };

  // Form data and state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    website: '',
    serviceCategory: '',
    serviceType: '',
    message: ''
  });

  // Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<keyof FormData | null>(null);
  const [userInput, setUserInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Focus input when current question changes
  useEffect(() => {
    inputRef.current?.focus();
  }, [currentQuestion]);

  // Initialize chat with welcome message
  useEffect(() => {
    const welcomeMessage: ChatMessage = {
      type: 'bot',
      content: (
        <div>
          <p className="mb-2">👋 Welcome to our chatbot assistant!</p>
          <p>I'll help you get in touch with our team. Let's start with your name.</p>
        </div>
      ),
      id: 'welcome'
    };
    
    setChatMessages([welcomeMessage]);
    setCurrentQuestion('name');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (userInput.trim() === '') return;
    
    // Add user message to chat
    const newUserMessage: ChatMessage = {
      type: 'user',
      content: userInput,
      id: `user-${Date.now()}`
    };
    
    setChatMessages(prev => [...prev, newUserMessage]);
    
    if (currentQuestion) {
      processUserInput(userInput, currentQuestion);
    }
    
    setUserInput('');
  };

  const processUserInput = (input: string, question: keyof FormData) => {
    // Update form data with user input
    setFormData(prev => ({
      ...prev,
      [question]: input
    }));
    
    // Determine next question based on current question
    let nextQuestion: keyof FormData | null = null;
    let botResponse: ChatMessage | null = null;
    
    const validationError = validateField(question, input);
    
    if (validationError) {
      // If validation error, ask the same question again
      botResponse = {
        type: 'bot',
        content: validationError,
        id: `error-${Date.now()}`
      };
      nextQuestion = question;
    } else {
      // Process based on current question
      switch (question) {
        case 'name':
          botResponse = {
            type: 'bot',
            content: `Nice to meet you, ${input}! What's your email address?`,
            id: `bot-${Date.now()}`
          };
          nextQuestion = 'email';
          break;
          
        case 'email':
          botResponse = {
            type: 'bot',
            content: "Great! What's your website URL? (Type \"none\" if you don't have one)",
            id: `bot-${Date.now()}`
          };
          nextQuestion = 'website';
          break;
          
        case 'website':
          botResponse = {
            type: 'bot',
            content: (
              <div>
                <p className="mb-2">Which service category are you interested in?</p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  {Object.keys(serviceOptions).map(category => (
                    <button
                      key={category}
                      onClick={() => {
                        const newUserMessage: ChatMessage = {
                          type: 'user',
                          content: category,
                          id: `user-${Date.now()}`
                        };
                        setChatMessages(prev => [...prev, newUserMessage]);
                        processUserInput(category, 'serviceCategory');
                      }}
                      className="text-left px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            ),
            id: `bot-${Date.now()}`
          };
          nextQuestion = 'serviceCategory';
          break;
          
        case 'serviceCategory':
          const options = serviceOptions[input] || [];
          botResponse = {
            type: 'bot',
            content: (
              <div>
                <p className="mb-2">Please select a specific service:</p>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  {options.map(option => (
                    <button
                      key={option}
                      onClick={() => {
                        const newUserMessage: ChatMessage = {
                          type: 'user',
                          content: option,
                          id: `user-${Date.now()}`
                        };
                        setChatMessages(prev => [...prev, newUserMessage]);
                        processUserInput(option, 'serviceType');
                      }}
                      className="text-left px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ),
            id: `bot-${Date.now()}`
          };
          nextQuestion = 'serviceType';
          break;
          
        case 'serviceType':
          botResponse = {
            type: 'bot',
            content: 'Please provide any additional details or questions you have:',
            id: `bot-${Date.now()}`
          };
          nextQuestion = 'message';
          break;
          
        case 'message':
          botResponse = {
            type: 'bot',
            content: (
              <div>
                <p className="mb-2">Thank you for providing all the information! Here's a summary:</p>
                <ul className="list-disc pl-5 mb-3 space-y-1 text-sm">
                  <li><span className="font-semibold">Name:</span> {formData.name}</li>
                  <li><span className="font-semibold">Email:</span> {formData.email}</li>
                  <li><span className="font-semibold">Website:</span> {formData.website}</li>
                  <li><span className="font-semibold">Service:</span> {formData.serviceCategory} - {formData.serviceType}</li>
                  <li><span className="font-semibold">Message:</span> {input}</li>
                </ul>
                <p>Would you like to send this message to our team via WhatsApp?</p>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={handleFormSubmit}
                    className="px-4 py-2 bg-luxury-red-600 text-white rounded-md hover:bg-luxury-red-700 transition-colors flex items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaWhatsapp className="mr-2" />
                        Send via WhatsApp
                      </>
                    )}
                  </button>
                  <button
                    onClick={resetForm}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                    disabled={isSubmitting}
                  >
                    Start Over
                  </button>
                </div>
              </div>
            ),
            id: `bot-${Date.now()}`
          };
          nextQuestion = null;
          break;
          
        default:
          nextQuestion = null;
      }
    }
    
    if (botResponse) {
      setChatMessages(prev => [...prev, botResponse!]);
    }
    
    setCurrentQuestion(nextQuestion);
  };

  const validateField = (field: keyof FormData, value: string): string | null => {
    switch (field) {
      case 'name':
        if (value.trim().length < 2) {
          return "Please enter a valid name (at least 2 characters). What's your name?";
        }
        break;
        
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Please enter a valid email address. What's your email?";
        }
        break;
        
      case 'website':
        if (value.toLowerCase() !== 'none' && value.trim() !== '') {
          const urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
          if (!urlRegex.test(value)) {
            return "Please enter a valid website URL or \"none\". What's your website?";
          }
        }
        break;
        
      default:
        break;
    }
    
    return null;
  };

  const handleFormSubmit = async () => {
    try {
      setIsSubmitting(true);
      setError(null);
      
      // Format the WhatsApp message
      const message = `
*New Contact Request*
Name: ${formData.name}
Email: ${formData.email}
Website: ${formData.website}
Service: ${formData.serviceCategory} - ${formData.serviceType}
Message: ${formData.message}
      `.trim();
      
      // Encode the message for WhatsApp
      const encodedMessage = encodeURIComponent(message);
      
      // WhatsApp phone number (replace with your business number)
      const phoneNumber = '6281234567890'; // Replace with your WhatsApp business number
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      const successMessage: ChatMessage = {
        type: 'bot',
        content: (
          <div>
            <p className="mb-2">✅ Thank you! Your message has been sent to our team.</p>
            <p>We'll get back to you as soon as possible.</p>
            <button
              onClick={resetForm}
              className="mt-4 px-4 py-2 bg-luxury-red-600 text-white rounded-md hover:bg-luxury-red-700 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ),
        id: `success-${Date.now()}`
      };
      
      setChatMessages(prev => [...prev, successMessage]);
      setIsSuccess(true);
      setCurrentQuestion(null);
      
    } catch (err) {
      console.error('Error sending message:', err);
      setError('There was an error sending your message. Please try again.');
      
      const errorMessage: ChatMessage = {
        type: 'bot',
        content: 'There was an error sending your message. Please try again.',
        id: `error-${Date.now()}`
      };
      
      setChatMessages(prev => [...prev, errorMessage]);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    // Reset form data
    setFormData({
      name: '',
      email: '',
      website: '',
      serviceCategory: '',
      serviceType: '',
      message: ''
    });
    
    // Reset chat
    const welcomeMessage: ChatMessage = {
      type: 'bot',
      content: (
        <div>
          <p className="mb-2">👋 Welcome back! Let's start a new conversation.</p>
          <p>What's your name?</p>
        </div>
      ),
      id: `welcome-${Date.now()}`
    };
    
    setChatMessages([welcomeMessage]);
    setCurrentQuestion('name');
    setIsSuccess(false);
    setError(null);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-luxury-red-700 to-luxury-red-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg md:text-xl opacity-90">
              Have questions or ready to start your project? Chat with our team below.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Chatbot Interface */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                {/* Terminal Header */}
                <div className="bg-luxury-red-600 text-white px-4 py-3 flex items-center">
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-white opacity-75"></div>
                    <div className="w-3 h-3 rounded-full bg-white opacity-75"></div>
                    <div className="w-3 h-3 rounded-full bg-white opacity-75"></div>
                  </div>
                  <div className="text-sm font-medium">Chat with our assistant</div>
                </div>
                
                {/* Chat Messages */}
                <div className="bg-gray-50 p-4 h-[500px] overflow-y-auto">
                  <div className="space-y-4">
                    {chatMessages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`
                          max-w-[80%] rounded-lg px-4 py-3 
                          ${msg.type === 'user' 
                            ? 'bg-luxury-red-600 text-white' 
                            : 'bg-white border border-gray-200 text-gray-700'}
                        `}>
                          {msg.type === 'bot' && (
                            <div className="flex items-center mb-1">
                              <FaRobot className="text-luxury-red-600 mr-2" />
                              <span className="text-xs font-semibold text-luxury-red-600">Assistant</span>
                            </div>
                          )}
                          
                          {msg.type === 'user' && (
                            <div className="flex items-center justify-end mb-1">
                              <span className="text-xs font-semibold text-white">You</span>
                              <FaUser className="text-white ml-2" />
                            </div>
                          )}
                          
                          <div>{msg.content}</div>
                        </div>
                      </motion.div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>
                </div>
                
                {/* Input Area */}
                {currentQuestion && !isSuccess && (
                  <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
                    <div className="flex">
                      <input
                        type="text"
                        ref={inputRef}
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type your response here..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-luxury-red-500 focus:border-transparent text-black"
                        disabled={isSubmitting}
                      />
                      <button
                        type="submit"
                        className="bg-luxury-red-600 text-white px-4 py-2 rounded-r-md hover:bg-luxury-red-700 transition-colors flex items-center"
                        disabled={isSubmitting || userInput.trim() === ''}
                      >
                        <FaPaperPlane className="mr-2" />
                        Send
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 