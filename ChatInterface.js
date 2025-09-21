import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Upload, Bot, User, Loader2, MapPin, ExternalLink, Play, Sparkles } from 'lucide-react';
import GeminiService from '../services/GeminiService';
import MCPService from '../services/MCPService';

const ChatInterface = ({ onSubmit, onClose, isLoading, results }) => {
    const [message, setMessage] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [chatHistory, setChatHistory] = useState([
        {
            id: 1,
            type: 'ai',
            content: "Namaste! I'm your Ayurvedic AI assistant powered by Gemini AI. I can help you with:\n\n• Symptom analysis and remedies\n• Plant identification from photos\n• Finding nearby Ayurvedic stores\n• Educational videos about treatments\n• Database queries using MCP protocol\n\nWhat symptoms are you experiencing, or would you like to upload a plant image?",
            timestamp: new Date()
        }
    ]);
    const [geminiService, setGeminiService] = useState(null);
    const [mcpService, setMcpService] = useState(null);
    const [sessionId, setSessionId] = useState(null);
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    // Initialize services
    useEffect(() => {
        const initializeServices = async () => {
            try {
                console.log('Initializing services...');

                // Initialize Gemini Service
                const gemini = new GeminiService();
                setGeminiService(gemini);
                console.log('Gemini service initialized');

                // Initialize MCP Service
                const mcp = new MCPService();
                await mcp.initialize();
                setMcpService(mcp);
                console.log('MCP service initialized');

                // Create session
                const session = await mcp.createSession();
                setSessionId(session);
                console.log('Session created:', session);

                console.log('All services initialized successfully');
            } catch (error) {
                console.error('Error initializing services:', error);
            }
        };

        initializeServices();

        // Cleanup on unmount
        return () => {
            if (mcpService) {
                mcpService.close();
            }
        };
    }, [mcpService]);

    // AI Response Generator based on symptoms
    const generateAIResponse = (userMessage, imageFile) => {
        const message = userMessage.toLowerCase();

        // Fever-related responses
        if (message.includes('fever') || message.includes('temperature') || message.includes('hot')) {
            return {
                remedies: [
                    {
                        name: "Tulsi (Holy Basil) Tea",
                        description: "Boil 10-15 fresh tulsi leaves in water for 5 minutes. Drink 2-3 times daily.",
                        benefits: "Reduces fever, boosts immunity, natural antibiotic"
                    },
                    {
                        name: "Ginger and Honey",
                        description: "Mix 1 tsp ginger juice with 1 tsp honey. Take twice daily.",
                        benefits: "Reduces inflammation, soothes throat, natural fever reducer"
                    },
                    {
                        name: "Coriander Seeds Water",
                        description: "Soak 1 tbsp coriander seeds in water overnight. Drink the water in the morning.",
                        benefits: "Cooling effect, reduces body temperature"
                    }
                ],
                youtubeVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                mapLocations: [
                    {
                        name: "Ayurvedic Wellness Center",
                        address: "123 Wellness Street, City",
                        distance: "0.5 km",
                        phone: "+1 (555) 123-4567",
                        coordinates: "37.7749,-122.4194"
                    },
                    {
                        name: "Nature's Pharmacy",
                        address: "456 Green Avenue, City",
                        distance: "1.2 km",
                        phone: "+1 (555) 987-6543",
                        coordinates: "37.7849,-122.4094"
                    }
                ]
            };
        }

        // Headache responses
        if (message.includes('headache') || message.includes('head pain') || message.includes('migraine')) {
            return {
                remedies: [
                    {
                        name: "Peppermint Oil Massage",
                        description: "Apply diluted peppermint oil on temples and forehead. Massage gently for 5 minutes.",
                        benefits: "Cooling effect, reduces tension, natural pain relief"
                    },
                    {
                        name: "Ashwagandha Tea",
                        description: "Boil 1 tsp ashwagandha powder in water. Drink before bedtime.",
                        benefits: "Reduces stress, calms nervous system, prevents headaches"
                    }
                ],
                youtubeVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                mapLocations: [
                    {
                        name: "Holistic Health Store",
                        address: "789 Healing Lane, City",
                        distance: "2.1 km",
                        phone: "+1 (555) 456-7890",
                        coordinates: "37.7649,-122.4294"
                    }
                ]
            };
        }

        // Cold and cough responses
        if (message.includes('cold') || message.includes('cough') || message.includes('sore throat') || message.includes('congestion')) {
            return {
                remedies: [
                    {
                        name: "Turmeric Milk (Golden Milk)",
                        description: "Mix 1 tsp turmeric powder with warm milk and honey. Drink before bedtime.",
                        benefits: "Anti-inflammatory, boosts immunity, soothes throat"
                    },
                    {
                        name: "Ginger and Tulsi Tea",
                        description: "Boil fresh ginger and tulsi leaves in water. Add honey and drink 2-3 times daily.",
                        benefits: "Relieves congestion, reduces cough, natural decongestant"
                    },
                    {
                        name: "Steam Inhalation",
                        description: "Inhale steam with a few drops of eucalyptus oil for 10-15 minutes.",
                        benefits: "Clears nasal passages, reduces congestion, soothes respiratory tract"
                    }
                ],
                youtubeVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                mapLocations: [
                    {
                        name: "Ayurvedic Wellness Center",
                        address: "123 Wellness Street, City",
                        distance: "0.5 km",
                        phone: "+1 (555) 123-4567",
                        coordinates: "37.7749,-122.4194"
                    },
                    {
                        name: "Nature's Pharmacy",
                        address: "456 Green Avenue, City",
                        distance: "1.2 km",
                        phone: "+1 (555) 987-6543",
                        coordinates: "37.7849,-122.4094"
                    }
                ]
            };
        }

        // Digestive issues responses
        if (message.includes('stomach') || message.includes('digestion') || message.includes('bloating') || message.includes('indigestion') || message.includes('nausea')) {
            return {
                remedies: [
                    {
                        name: "Ginger and Lemon Tea",
                        description: "Boil fresh ginger in water, add lemon juice and honey. Drink after meals.",
                        benefits: "Improves digestion, reduces bloating, natural antacid"
                    },
                    {
                        name: "Triphala Powder",
                        description: "Mix 1 tsp triphala powder with warm water. Take before bedtime.",
                        benefits: "Detoxifies digestive system, improves gut health, natural laxative"
                    },
                    {
                        name: "Fennel Seeds",
                        description: "Chew 1 tsp fennel seeds after meals or make fennel tea.",
                        benefits: "Reduces gas, improves digestion, freshens breath"
                    }
                ],
                youtubeVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                mapLocations: [
                    {
                        name: "Ayurvedic Wellness Center",
                        address: "123 Wellness Street, City",
                        distance: "0.5 km",
                        phone: "+1 (555) 123-4567",
                        coordinates: "37.7749,-122.4194"
                    }
                ]
            };
        }

        // Default response for other symptoms
        return {
            remedies: [
                {
                    name: "General Wellness Consultation",
                    description: "Visit an Ayurvedic practitioner for personalized treatment based on your specific symptoms.",
                    benefits: "Personalized care, comprehensive diagnosis, holistic approach"
                }
            ],
            youtubeVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            mapLocations: [
                {
                    name: "Ayurvedic Wellness Center",
                    address: "123 Wellness Street, City",
                    distance: "0.5 km",
                    phone: "+1 (555) 123-4567",
                    coordinates: "37.7749,-122.4194"
                }
            ]
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim() && !imageFile) return;

        console.log('Handling submit with message:', message);
        console.log('Gemini service available:', !!geminiService);
        console.log('MCP service available:', !!mcpService);

        const newMessage = {
            id: Date.now(),
            type: 'user',
            content: message,
            image: imageFile,
            timestamp: new Date()
        };

        setChatHistory(prev => [...prev, newMessage]);

        try {
            let aiResponse;

            if (imageFile && geminiService) {
                console.log('Processing image with Gemini...');
                try {
                    // Handle image analysis with Gemini
                    const imageData = await convertImageToBase64(imageFile);
                    console.log('Image converted to base64, length:', imageData.length);

                    const plantAnalysis = await geminiService.analyzePlantImage(imageData);
                    console.log('Plant analysis result:', plantAnalysis);

                    aiResponse = {
                        type: 'ai',
                        content: `I've analyzed your plant image. Here's what I found:`,
                        plantAnalysis: plantAnalysis,
                        remedies: [],
                        youtubeVideo: null,
                        mapLocations: [],
                        timestamp: new Date()
                    };
                } catch (imageError) {
                    console.error('Error analyzing plant image:', imageError);
                    aiResponse = {
                        type: 'ai',
                        content: `I encountered an error analyzing your plant image: ${imageError.message}. Please try again or describe the plant in text.`,
                        plantAnalysis: null,
                        remedies: [],
                        youtubeVideo: null,
                        mapLocations: [],
                        timestamp: new Date()
                    };
                }
            } else if (geminiService) {
                console.log('Processing text with Gemini...');
                try {
                    // Handle text query with Gemini
                    aiResponse = await geminiService.generateAyurvedicResponse(message);
                    console.log('Gemini response received:', aiResponse);
                } catch (textError) {
                    console.error('Error with Gemini text response:', textError);
                    aiResponse = {
                        type: 'ai',
                        content: `I encountered an error processing your request: ${textError.message}. Using fallback response.`,
                        remedies: [],
                        youtubeVideo: null,
                        mapLocations: [],
                        timestamp: new Date()
                    };
                }
            } else {
                console.log('Using fallback response...');
                // Fallback to mock response
                aiResponse = generateAIResponse(message, imageFile);
            }

            // Save to database if MCP service is available
            if (mcpService && sessionId) {
                try {
                    await mcpService.saveChatMessage(message, JSON.stringify(aiResponse), sessionId);
                    await mcpService.updateSessionActivity(sessionId);
                    console.log('Message saved to database');
                } catch (dbError) {
                    console.error('Error saving to database:', dbError);
                }
            }

            // Add AI response to chat history
            setTimeout(() => {
                console.log('Adding AI response to chat history:', aiResponse);
                setChatHistory(prev => [...prev, aiResponse]);
            }, 1500);

        } catch (error) {
            console.error('Error processing request:', error);

            // Fallback response
            const fallbackResponse = {
                id: Date.now() + 1,
                type: 'ai',
                content: 'I apologize, but I\'m having trouble processing your request right now. Please try again.',
                remedies: [],
                youtubeVideo: null,
                mapLocations: [],
                timestamp: new Date()
            };

            setTimeout(() => {
                setChatHistory(prev => [...prev, fallbackResponse]);
            }, 1500);
        }

        onSubmit(message, imageFile);
        setMessage('');
        setImageFile(null);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    const removeImage = () => {
        setImageFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // Helper function to convert image to base64
    const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result.split(',')[1]; // Remove data:image/jpeg;base64, prefix
                resolve(base64);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                            <Bot className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
                                <span>SwasthAI Assistant</span>
                                <Sparkles className="w-4 h-4 text-cyan-400" />
                            </h2>
                            <p className="text-sm text-gray-300">Describe your symptoms or upload a plant image</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <AnimatePresence>
                        {chatHistory.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`flex items-start space-x-3 max-w-xs lg:max-w-2xl ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                                    }`}>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${msg.type === 'user'
                                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600'
                                        : 'bg-gradient-to-br from-purple-500 to-pink-600'
                                        }`}>
                                        {msg.type === 'user' ? (
                                            <User className="w-5 h-5 text-white" />
                                        ) : (
                                            <Bot className="w-5 h-5 text-white" />
                                        )}
                                    </div>
                                    <div className={`${msg.type === 'user'
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl rounded-br-md px-4 py-3 shadow-lg shadow-cyan-500/25'
                                        : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl rounded-bl-md px-4 py-3'
                                        }`}>
                                        {msg.image && (
                                            <div className="mb-2">
                                                <img
                                                    src={URL.createObjectURL(msg.image)}
                                                    alt="Uploaded"
                                                    className="w-full h-32 object-cover rounded-lg"
                                                />
                                            </div>
                                        )}
                                        <p className="mb-3">{msg.content}</p>

                                        {/* AI Response with Remedies */}
                                        {msg.type === 'ai' && msg.remedies && (
                                            <div className="space-y-4">
                                                {/* Remedies Section */}
                                                <div>
                                                    <h4 className="font-semibold text-white mb-3 flex items-center">
                                                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                                                        Recommended Remedies:
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {msg.remedies.map((remedy, index) => (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: index * 0.1 }}
                                                                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
                                                            >
                                                                <h5 className="font-medium text-white mb-2">
                                                                    {remedy.name}
                                                                </h5>
                                                                <p className="text-sm text-gray-300 mb-2">
                                                                    {remedy.description}
                                                                </p>
                                                                <p className="text-xs text-cyan-300">
                                                                    <strong>Benefits:</strong> {remedy.benefits}
                                                                </p>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* YouTube Video Section */}
                                                {msg.youtubeVideo && (
                                                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-xl p-4">
                                                        <h4 className="font-semibold text-white mb-2 flex items-center">
                                                            <Play className="w-4 h-4 text-yellow-400 mr-2" />
                                                            Educational Video:
                                                        </h4>
                                                        <a
                                                            href={msg.youtubeVideo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center text-yellow-300 hover:text-yellow-200 text-sm font-medium transition-colors"
                                                        >
                                                            Watch Ayurvedic Remedies Video
                                                            <ExternalLink className="w-3 h-3 ml-1" />
                                                        </a>
                                                    </div>
                                                )}

                                                {/* Map Locations Section */}
                                                {msg.mapLocations && (
                                                    <div>
                                                        <h4 className="font-semibold text-white mb-3 flex items-center">
                                                            <MapPin className="w-4 h-4 text-cyan-400 mr-2" />
                                                            Nearby Ayurvedic Stores:
                                                        </h4>
                                                        <div className="space-y-2">
                                                            {msg.mapLocations.map((location, index) => (
                                                                <motion.div
                                                                    key={index}
                                                                    initial={{ opacity: 0, x: -20 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: index * 0.1 }}
                                                                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 hover:bg-white/15 transition-all duration-300"
                                                                >
                                                                    <div className="flex justify-between items-start">
                                                                        <div className="flex-1">
                                                                            <h5 className="font-medium text-white">
                                                                                {location.name}
                                                                            </h5>
                                                                            <p className="text-sm text-gray-300 mb-1">
                                                                                {location.address}
                                                                            </p>
                                                                            <div className="flex items-center space-x-4 text-xs text-cyan-300">
                                                                                <span>{location.distance}</span>
                                                                                <span>{location.phone}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex space-x-2 ml-3">
                                                                            <a
                                                                                href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates}`}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                                                                                title="View on Google Maps"
                                                                            >
                                                                                <MapPin className="w-3 h-3" />
                                                                            </a>
                                                                            <a
                                                                                href={`tel:${location.phone}`}
                                                                                className="p-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-pink-500/25"
                                                                                title="Call"
                                                                            >
                                                                                <ExternalLink className="w-3 h-3" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Loading State */}
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-start"
                        >
                            <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl rounded-bl-md px-4 py-3">
                                    <div className="flex items-center space-x-2">
                                        <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                                        <span>Analyzing your symptoms...</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input Form */}
                <form onSubmit={handleSubmit} className="p-6 border-t border-white/10">
                    <div className="space-y-4">
                        {/* Image Upload Section */}
                        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-4 border border-cyan-400/30">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-semibold text-white mb-1 flex items-center">
                                        <Upload className="w-4 h-4 text-cyan-400 mr-2" />
                                        Upload Plant Image
                                    </h4>
                                    <p className="text-sm text-gray-300">Take a photo of a plant for AI identification</p>
                                </div>
                                <div className="flex space-x-2">
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                        id="image-upload"
                                    />
                                    <label
                                        htmlFor="image-upload"
                                        className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg cursor-pointer transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
                                    >
                                        <Upload className="w-5 h-5" />
                                        <span className="text-sm font-medium">Choose Image</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Input and Send */}
                        <div className="flex items-end space-x-3">

                            {/* Message Input */}
                            <div className="flex-1">
                                {imageFile && (
                                    <div className="mb-3 flex items-center justify-between bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3">
                                        <div className="flex items-center space-x-3">
                                            <img
                                                src={URL.createObjectURL(imageFile)}
                                                alt="Preview"
                                                className="w-12 h-12 object-cover rounded-lg"
                                            />
                                            <div>
                                                <p className="text-white font-medium">{imageFile.name}</p>
                                                <p className="text-gray-300 text-sm">{(imageFile.size / 1024).toFixed(1)} KB</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={removeImage}
                                            className="text-red-400 hover:text-red-300 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                )}
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Describe your symptoms or ask about Ayurvedic remedies..."
                                    className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 resize-none"
                                    rows="2"
                                />
                            </div>

                            {/* Send Button */}
                            <motion.button
                                type="submit"
                                disabled={!message.trim() && !imageFile}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
                            >
                                <Send className="w-5 h-5" />
                                <span>Send</span>
                            </motion.button>

                            {/* Test button for debugging */}
                            <motion.button
                                type="button"
                                onClick={async () => {
                                    console.log('Test button clicked');
                                    console.log('Gemini service:', geminiService);
                                    console.log('MCP service:', mcpService);
                                    console.log('Session ID:', sessionId);

                                    // Test Gemini API with a simple message
                                    if (geminiService) {
                                        try {
                                            console.log('Testing Gemini API...');
                                            const testResponse = await geminiService.generateAyurvedicResponse('I have a fever');
                                            console.log('Gemini test response:', testResponse);
                                            setMessage('I have a fever - Gemini API is working!');
                                        } catch (error) {
                                            console.error('Gemini API test failed:', error);
                                            setMessage('Gemini API test failed: ' + error.message);
                                        }
                                    } else {
                                        setMessage('Gemini service not available');
                                    }
                                }}
                                className="p-2 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-lg transition-all duration-300 text-sm"
                            >
                                Test Gemini
                            </motion.button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default ChatInterface;
