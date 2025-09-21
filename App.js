import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ChatInterface from './components/ChatInterface';
import PlantCards from './components/PlantCards';
import ShopCards from './components/ShopCards';
import PlantsPage from './components/PlantsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatResults, setChatResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

    // Mock data for demonstration
    const mockPlantData = [
        {
            id: 1,
            name: "Tulsi (Holy Basil)",
            scientificName: "Ocimum tenuiflorum",
            benefits: ["Immune support", "Stress relief", "Respiratory health"],
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            description: "Sacred herb known for its adaptogenic properties and immune-boosting benefits."
        },
        {
            id: 2,
            name: "Ashwagandha",
            scientificName: "Withania somnifera",
            benefits: ["Stress reduction", "Energy boost", "Sleep improvement"],
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            description: "Powerful adaptogen that helps the body manage stress and promotes vitality."
        },
        {
            id: 3,
            name: "Turmeric",
            scientificName: "Curcuma longa",
            benefits: ["Anti-inflammatory", "Digestive health", "Joint support"],
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            description: "Golden spice with powerful anti-inflammatory and antioxidant properties."
        }
    ];

    const mockShopData = [
        {
            id: 1,
            name: "Ayurvedic Wellness Center",
            distance: "0.5 km",
            rating: 4.8,
            address: "123 Wellness Street, City",
            phone: "+1 (555) 123-4567",
            specialties: ["Herbal remedies", "Consultation", "Organic products"]
        },
        {
            id: 2,
            name: "Nature's Pharmacy",
            distance: "1.2 km",
            rating: 4.6,
            address: "456 Green Avenue, City",
            phone: "+1 (555) 987-6543",
            specialties: ["Traditional herbs", "Supplements", "Tea blends"]
        }
    ];

    const handleChatSubmit = async (message, imageFile) => {
        setIsLoading(true);

        // Simulate AI processing
        setTimeout(() => {
            setChatResults({
                message: "Based on your symptoms, I recommend these Ayurvedic remedies:",
                plants: mockPlantData,
                shops: mockShopData,
                videoId: "dQw4w9WgXcQ" // Example YouTube video ID
            });
            setIsLoading(false);
        }, 2000);
    };

    // Handle navigation
    const handleNavigation = (page) => {
        setCurrentPage(page);
    };

    const handleBackToHome = () => {
        setCurrentPage('home');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-ayurvedic-50 to-green-100">
            {currentPage === 'home' && (
                <>
                    <Header onNavigate={handleNavigation} />

                    <main>
                        <Hero onGetStarted={() => setIsChatOpen(true)} />

                        <AnimatePresence>
                            {isChatOpen && (
                                <ChatInterface
                                    onSubmit={handleChatSubmit}
                                    onClose={() => setIsChatOpen(false)}
                                    isLoading={isLoading}
                                    results={chatResults}
                                />
                            )}
                        </AnimatePresence>

                        {chatResults && (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="container mx-auto px-4 py-16"
                            >
                                <PlantCards plants={chatResults.plants} />
                                <ShopCards shops={chatResults.shops} />
                            </motion.div>
                        )}
                    </main>

                    <Footer />
                </>
            )}

            {currentPage === 'plants' && (
                <PlantsPage onBack={handleBackToHome} />
            )}

            {currentPage === 'about' && (
                <AboutPage onBack={handleBackToHome} />
            )}

            {currentPage === 'contact' && (
                <ContactPage onBack={handleBackToHome} />
            )}
        </div>
    );
}

export default App;
