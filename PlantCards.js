import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Star, ExternalLink } from 'lucide-react';

const PlantCards = ({ plants }) => {
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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
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
                    Recommended <span className="gradient-text">Ayurvedic Plants</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover the healing properties of these carefully selected plants for your wellness journey.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {plants.map((plant, index) => (
                    <motion.div
                        key={plant.id}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.05,
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
                    >
                        {/* Plant Image */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={plant.image}
                                alt={plant.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            <div className="absolute top-4 right-4">
                                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <Leaf className="w-5 h-5 text-ayurvedic-600" />
                                </div>
                            </div>
                        </div>

                        {/* Plant Info */}
                        <div className="p-6">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {plant.name}
                                </h3>
                                <p className="text-sm text-gray-500 italic">
                                    {plant.scientificName}
                                </p>
                            </div>

                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {plant.description}
                            </p>

                            {/* Benefits */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {plant.benefits.map((benefit, benefitIndex) => (
                                        <span
                                            key={benefitIndex}
                                            className="px-3 py-1 bg-ayurvedic-100 text-ayurvedic-700 text-xs rounded-full"
                                        >
                                            {benefit}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-3">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 bg-ayurvedic-500 hover:bg-ayurvedic-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                                >
                                    <span>Learn More</span>
                                    <ExternalLink className="w-4 h-4" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 border border-ayurvedic-500 text-ayurvedic-500 hover:bg-ayurvedic-50 rounded-lg transition-colors duration-300"
                                >
                                    <Star className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* YouTube Video Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-16"
            >
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Learn More About Ayurvedic Plants
                    </h3>
                    <p className="text-gray-600">
                        Watch this informative video about traditional Ayurvedic remedies
                    </p>
                </div>

                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <iframe
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Ayurvedic Plants Video"
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default PlantCards;
