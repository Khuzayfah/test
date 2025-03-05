/**
 * Professional Contact Page with WhatsApp Integration
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
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

// Komponen fallback untuk error
const ErrorFallback = () => (
  <div className="min-h-screen bg-white flex items-center justify-center p-4">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
      <div className="text-red-500 text-5xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h2>
      <p className="text-gray-600 mb-4">
        We're sorry, but there was an error loading the chat interface.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-luxury-red-500 text-white rounded-lg hover:bg-luxury-red-600 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

// Komponen loading
const LoadingComponent = () => (
  <div className="min-h-[500px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-luxury-red-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Show loading state until client-side code is ready
  if (!isMounted) {
    return <LoadingComponent />;
  }
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ChatbotInterface />
    </ErrorBoundary>
  );
}

function ChatbotInterface() {
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
  const [currentInput, setCurrentInput] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState<keyof FormData | null>(null);
  const [formComplete, setFormComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat with welcome message
  useEffect(() => {
    // Initial welcome message
    const initialMessages: ChatMessage[] = [
      {
        type: 'bot',
        content: (
          <div>
            <p className="font-bold text-luxury-red-600 mb-2">Welcome to our chat assistant!</p>
            <p>I'll help you get in touch with our team. Could you please tell me your name?</p>
          </div>
        ),
        id: 'welcome'
      }
    ];
    
    setChatMessages(initialMessages);
    setCurrentQuestion('name');
  }, []);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  // Handle user input submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentInput.trim() || !currentQuestion) return;
    
    // Add user message to chat
    const newUserMessage: ChatMessage = {
      type: 'user',
      content: currentInput,
      id: `user-${Date.now()}`
    };
    
    setChatMessages(prev => [...prev, newUserMessage]);
    
    // Process user input
    processUserInput(currentInput, currentQuestion);
    
    // Clear input field
    setCurrentInput('');
  };
  
  // Process user input based on current question
  const processUserInput = (input: string, question: keyof FormData) => {
    // Update form data
    const updatedFormData = { ...formData, [question]: input };
    setFormData(updatedFormData);
    
    // Determine next question based on current question
    let nextQuestion: keyof FormData | null = null;
    let botResponse: string | JSX.Element = '';
    
    // Validate current input
    const validationError = validateField(question, input);
    if (validationError) {
      botResponse = (
        <div>
          <p className="text-red-500">{validationError}</p>
          <p>Please try again with a valid {question}.</p>
        </div>
      );
      setCurrentQuestion(question); // Stay on same question
      
      const errorMessage: ChatMessage = {
        type: 'bot',
        content: botResponse,
        id: `bot-error-${Date.now()}`
      };
      
      setChatMessages(prev => [...prev, errorMessage]);
      return;
    }
    
    // Determine next question and bot response
    switch (question) {
      case 'name':
        nextQuestion = 'email';
        botResponse = `Nice to meet you, ${input}! What's your email address?`;
        break;
        
      case 'email':
        nextQuestion = 'website';
        botResponse = 'Great! Now, could you please share your website URL?';
        break;
        
      case 'website':
        nextQuestion = 'serviceCategory';
        botResponse = (
          <div>
            <p>Thanks! Which service category are you interested in?</p>
            <div className="mt-2 space-y-1">
              {Object.keys(serviceOptions).map((category, index) => (
                <div key={index} 
                  className="cursor-pointer px-3 py-2 rounded bg-gray-800 hover:bg-luxury-red-800 transition-colors"
                  onClick={() => {
                    const userSelection: ChatMessage = {
                      type: 'user',
                      content: category,
                      id: `user-category-${Date.now()}`
                    };
                    setChatMessages(prev => [...prev, userSelection]);
                    processUserInput(category, 'serviceCategory');
                  }}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        );
        break;
        
      case 'serviceCategory':
        nextQuestion = 'serviceType';
        botResponse = (
          <div>
            <p>Great choice! Which specific service type are you looking for?</p>
            <div className="mt-2 space-y-1">
              {serviceOptions[input]?.map((type, index) => (
                <div key={index} 
                  className="cursor-pointer px-3 py-2 rounded bg-gray-800 hover:bg-luxury-red-800 transition-colors"
                  onClick={() => {
                    const userSelection: ChatMessage = {
                      type: 'user',
                      content: type,
                      id: `user-type-${Date.now()}`
                    };
                    setChatMessages(prev => [...prev, userSelection]);
                    processUserInput(type, 'serviceType');
                  }}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        );
        break;
        
      case 'serviceType':
        nextQuestion = 'message';
        botResponse = 'Perfect! Finally, please tell me a bit more about your project or how we can help you.';
        break;
        
      case 'message':
        nextQuestion = null;
        
        // All questions have been answered, show summary
        botResponse = (
          <div>
            <p className="font-bold text-luxury-red-600 mb-2">Great! Here's a summary of your information:</p>
            <div className="bg-gray-800 p-3 rounded-lg mb-3">
              <p><span className="text-luxury-red-400">Name:</span> {updatedFormData.name}</p>
              <p><span className="text-luxury-red-400">Email:</span> {updatedFormData.email}</p>
              <p><span className="text-luxury-red-400">Website:</span> {updatedFormData.website}</p>
              <p><span className="text-luxury-red-400">Service Category:</span> {updatedFormData.serviceCategory}</p>
              <p><span className="text-luxury-red-400">Service Type:</span> {updatedFormData.serviceType}</p>
              <p><span className="text-luxury-red-400">Message:</span> {updatedFormData.message}</p>
            </div>
            <p>Would you like to submit this information?</p>
            <div className="mt-2 flex space-x-2">
              <button
                onClick={handleFormSubmit}
                className="px-4 py-2 bg-luxury-red-600 hover:bg-luxury-red-700 text-white rounded transition-colors"
              >
                Yes, Submit
              </button>
              <button
                onClick={resetForm}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        );
        setFormComplete(true);
        break;
    }
    
    // Add bot response to chat
    const botMessage: ChatMessage = {
      type: 'bot',
      content: botResponse,
      id: `bot-${Date.now()}`
    };
    
    setChatMessages(prev => [...prev, botMessage]);
    setCurrentQuestion(nextQuestion);
  };
  
  // Validate field input
  const validateField = (field: keyof FormData, value: string): string | null => {
    switch (field) {
      case 'name':
        return value.trim() ? null : 'Name is required.';
        
      case 'email':
        return value.trim() && /^\S+@\S+\.\S+$/.test(value) 
          ? null 
          : 'Please enter a valid email address.';
        
      case 'website':
        return value.trim() ? null : 'Website is required.';
        
      case 'serviceCategory':
        return Object.keys(serviceOptions).includes(value) 
          ? null 
          : 'Please select a valid service category.';
        
      case 'serviceType':
        // Check if service type exists in the selected category
        return formData.serviceCategory && 
          serviceOptions[formData.serviceCategory]?.includes(value) 
          ? null 
          : 'Please select a valid service type.';
        
      case 'message':
        return value.trim().length >= 10 
          ? null 
          : 'Please enter a message with at least 10 characters.';
        
      default:
        return null;
    }
  };
  
  // Submit the form data
  const handleFormSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Format the WhatsApp message
      const message = `*New Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Website:* ${formData.website}\n*Service Category:* ${formData.serviceCategory}\n*Service Type:* ${formData.serviceType}\n\n*Message:*\n${formData.message}`;
      
      // Encode the message for WhatsApp
      const encodedMessage = encodeURIComponent(message);
      
      // Your WhatsApp number
      const whatsappNumber = '6512345678'; // Replace with your actual WhatsApp number
      
      const successMessage: ChatMessage = {
        type: 'bot',
        content: (
          <div>
            <p className="font-bold text-green-500 mb-2">Thank you for your inquiry!</p>
            <p>I'm opening WhatsApp for you to continue the conversation with our team.</p>
            <p className="mt-2">If you'd like to start a new conversation, just click the "Start New Chat" button below.</p>
            <button
              onClick={resetForm}
              className="mt-3 px-4 py-2 bg-luxury-red-600 hover:bg-luxury-red-700 text-white rounded transition-colors"
            >
              Start New Chat
            </button>
          </div>
        ),
        id: `bot-success-${Date.now()}`
      };
      
      setChatMessages(prev => [...prev, successMessage]);
      
      // Open WhatsApp with the pre-filled message
      setTimeout(() => {
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
      
      const errorMessage: ChatMessage = {
        type: 'bot',
        content: (
          <div>
            <p className="text-red-500 font-bold">There was an error submitting your inquiry.</p>
            <p>Please try again or contact us directly.</p>
            <button
              onClick={handleFormSubmit}
              className="mt-3 px-4 py-2 bg-luxury-red-600 hover:bg-luxury-red-700 text-white rounded transition-colors"
            >
              Try Again
            </button>
          </div>
        ),
        id: `bot-error-${Date.now()}`
      };
      
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Reset form and start over
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      website: '',
      serviceCategory: '',
      serviceType: '',
      message: ''
    });
    
    setCurrentQuestion('name');
    setFormComplete(false);
    
    const resetMessage: ChatMessage = {
      type: 'bot',
      content: (
        <div>
          <p className="font-bold text-luxury-red-600 mb-2">Let's start a new conversation!</p>
          <p>Could you please tell me your name?</p>
        </div>
      ),
      id: `bot-reset-${Date.now()}`
    };
    
    setChatMessages([resetMessage]);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-luxury-red-600 mb-2">Chat with Our Assistant</h1>
              <p className="text-gray-600">I'll help you connect with our team through WhatsApp</p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
            {/* Terminal header */}
            <div className="bg-luxury-red-600 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-white opacity-70"></div>
                <div className="h-3 w-3 rounded-full bg-white opacity-80"></div>
                <div className="h-3 w-3 rounded-full bg-white opacity-90"></div>
              </div>
              <div className="flex-1 text-center text-white text-sm font-medium">
                Terminal — Contact Assistant
              </div>
            </div>
            
            {/* Chat container */}
            <div className="p-4 h-[500px] overflow-y-auto bg-gray-50">
              {chatMessages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.type === 'user' ? 'bg-luxury-red-600 ml-2' : 'bg-gray-200 mr-2'
                    }`}>
                      {msg.type === 'user' ? <FaUser size={14} className="text-white" /> : <FaRobot size={14} className="text-gray-600" />}
                    </div>
                    <div className={`py-2 px-4 rounded-lg ${
                      msg.type === 'user' ? 'bg-luxury-red-600 text-white' : 'bg-white border border-gray-200 text-gray-700'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={chatEndRef} />
              
              {/* Typing indicator */}
              {isSubmitting && (
                <div className="flex items-center text-gray-600 ml-10">
                  <FaSpinner className="animate-spin mr-2" />
                  <span>Processing your request...</span>
                </div>
              )}
            </div>
            
            {/* Input area */}
            {!isSubmitting && currentQuestion && !formComplete && (
              <form onSubmit={handleSubmit} className="border-t border-gray-200">
                <div className="flex items-center px-3 py-3 bg-white">
                  <span className="text-luxury-red-600 mr-2">$</span>
                  <input
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    placeholder={`Enter your ${currentQuestion}...`}
                    className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                    autoFocus
                  />
                  <button 
                    type="submit" 
                    className="ml-2 text-luxury-red-600 hover:text-luxury-red-700 transition-colors"
                    disabled={!currentInput.trim()}
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 