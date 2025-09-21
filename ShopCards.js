import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star, Navigation, Clock } from 'lucide-react';

const ShopCards = ({ shops }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="mb-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Nearby <span className="gradient-text">Ayurvedic Shops</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Find trusted Ayurvedic stores and wellness centers near you for authentic products and expert consultation.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-8"
            >
                {shops.map((shop, index) => (
                    <motion.div
                        key={shop.id}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.02,
                            y: -5,
                            transition: { duration: 0.3 }
                        }}
                        className="bg-white rounded-2xl shadow-lg p-6 card-hover group"
                    >
                        {/* Shop Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">
                                    {shop.name}
                                </h3>
                                <div className="flex items-center space-x-2 mb-2">
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 text-gold-500 fill-current" />
                                        <span className="text-sm font-medium text-gray-700">
                                            {shop.rating}
                                        </span>
                                    </div>
                                    <span className="text-sm text-gray-500">•</span>
                                    <span className="text-sm text-gray-500">
                                        {shop.distance} away
                                    </span>
                                </div>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-br from-ayurvedic-500 to-gold-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">
                                    {shop.name.charAt(0)}
                                </span>
                            </div>
                        </div>

                        {/* Shop Details */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-gray-600">{shop.address}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-gray-400" />
                                <a
                                    href={`tel:${shop.phone}`}
                                    className="text-sm text-ayurvedic-600 hover:text-ayurvedic-700 transition-colors"
                                >
                                    {shop.phone}
                                </a>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Clock className="w-5 h-5 text-gray-400" />
                                <span className="text-sm text-gray-600">Open 9 AM - 7 PM</span>
                            </div>
                        </div>

                        {/* Specialties */}
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
                            <div className="flex flex-wrap gap-2">
                                {shop.specialties.map((specialty, specialtyIndex) => (
                                    <span
                                        key={specialtyIndex}
                                        className="px-3 py-1 bg-gold-100 text-gold-700 text-xs rounded-full"
                                    >
                                        {specialty}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 bg-ayurvedic-500 hover:bg-ayurvedic-600 text-white py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                            >
                                <Navigation className="w-4 h-4" />
                                <span>Get Directions</span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-3 border border-ayurvedic-500 text-ayurvedic-500 hover:bg-ayurvedic-50 rounded-lg transition-colors duration-300"
                            >
                                <Phone className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 text-center"
            >
                <div className="bg-gradient-to-r from-ayurvedic-50 to-gold-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Can't Find What You're Looking For?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Our AI assistant can help you find more specific Ayurvedic products and remedies.
                        Just ask about your specific needs and we'll provide personalized recommendations.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                    >
                        Ask SwasthAI
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default ShopCards;
