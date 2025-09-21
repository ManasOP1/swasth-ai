import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Shield, Zap, Star, Globe, Users, TrendingUp } from 'lucide-react';

const Hero = ({ onGetStarted }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const features = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Personalized Care",
            description: "AI-powered recommendations tailored to your unique constitution"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Trusted Remedies",
            description: "Ancient Ayurvedic wisdom validated by modern science"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Modern Technology",
            description: "Combining ancient wisdom with AI intelligence"
        }
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Modern Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-pink-500/20" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
            </div>

            {/* Modern Floating Elements */}
            <motion.div
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-20 left-10 w-20 h-20 text-cyan-400 opacity-60"
            >
                <Globe className="w-full h-full" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute top-40 right-20 w-16 h-16 text-pink-400 opacity-70"
            >
                <Star className="w-full h-full" />
            </motion.div>

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-20 left-1/4 w-12 h-12 text-green-400 opacity-60"
            >
                <TrendingUp className="w-full h-full" />
            </motion.div>

            <motion.div
                animate={{
                    rotate: [0, -180, -360],
                    y: [0, -15, 0]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
                className="absolute top-60 left-1/3 w-14 h-14 text-purple-400 opacity-50"
            >
                <Users className="w-full h-full" />
            </motion.div>

            <motion.div
                animate={{
                    rotate: [0, 90, 180, 270, 360],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 3
                }}
                className="absolute bottom-40 right-1/3 w-10 h-10 text-yellow-400 opacity-60"
            >
                <Sparkles className="w-full h-full" />
            </motion.div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-4 py-2 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                            <span className="text-cyan-300 text-sm font-medium">AI-Powered Wellness</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
                        >
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                SwasthAI
                            </span>
                            <br />
                            <span className="text-white">Your Digital</span>
                            <br />
                            <span className="text-white">Wellness</span>
                            <br />
                            <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                                Companion
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                        >
                            Experience the future of healthcare with AI-powered Ayurvedic insights.
                            Get personalized remedies, plant identification, and wellness guidance.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onGetStarted}
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 transition-all duration-300"
                            >
                                <span>Start Your Journey</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg shadow-pink-500/25 transition-all duration-300"
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Modern Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {/* Main Image */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 1, -1, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="col-span-2 relative overflow-hidden rounded-2xl shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                                    alt="Modern Wellness"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-xl font-bold">AI Wellness</h3>
                                    <p className="text-sm opacity-90">Powered by Technology</p>
                                </div>
                            </motion.div>

                            {/* Secondary Images */}
                            <motion.div
                                animate={{
                                    y: [0, -5, 0],
                                    rotate: [0, -1, 1, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="relative overflow-hidden rounded-xl shadow-lg"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
                                    alt="Plant Medicine"
                                    className="w-full h-32 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
                                <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                                    Plant ID
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [0, 5, 0],
                                    rotate: [0, 1, -1, 0]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2
                                }}
                                className="relative overflow-hidden rounded-xl shadow-lg"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop"
                                    alt="Health Analytics"
                                    className="w-full h-32 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                                <div className="absolute bottom-2 left-2 text-white text-xs font-medium">
                                    Analytics
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full flex items-center justify-center"
                        >
                            <Globe className="w-8 h-8 text-cyan-400" />
                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, -10, 10, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-400/30 rounded-full flex items-center justify-center"
                        >
                            <Heart className="w-6 h-6 text-pink-400" />
                        </motion.div>

                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                            className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm border border-green-400/30 rounded-full flex items-center justify-center"
                        >
                            <TrendingUp className="w-5 h-5 text-green-400" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center card-hover group"
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modern Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center backdrop-blur-sm bg-white/10"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;