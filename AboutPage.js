import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Users, Award, Target, Leaf, Shield, Sparkles, Globe } from 'lucide-react';

const AboutPage = ({ onBack }) => {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const teamMembers = [
        {
            name: "Dr. Priya Sharma",
            role: "Chief Ayurvedic Consultant",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
            experience: "15+ years",
            specialization: "Traditional Ayurveda, Panchakarma"
        },
        {
            name: "Dr. Rajesh Kumar",
            role: "AI Technology Director",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            experience: "12+ years",
            specialization: "Machine Learning, Healthcare AI"
        },
        {
            name: "Dr. Anjali Patel",
            role: "Plant Medicine Specialist",
            image: "https://images.unsplash.com/photo-1594824388852-9a5a3b0b8b8b?w=300&h=300&fit=crop&crop=face",
            experience: "10+ years",
            specialization: "Herbal Medicine, Plant Identification"
        },
        {
            name: "Dr. Vikram Singh",
            role: "Research & Development",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            experience: "8+ years",
            specialization: "Clinical Research, Data Analysis"
        }
    ];

    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Holistic Wellness",
            description: "We believe in treating the whole person, not just symptoms, combining ancient wisdom with modern technology."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Trusted Knowledge",
            description: "Our recommendations are based on centuries of Ayurvedic wisdom, validated by modern research and clinical studies."
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Innovation",
            description: "We continuously innovate to make Ayurvedic knowledge accessible through cutting-edge AI technology."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Community Focus",
            description: "Building a community of wellness seekers who support each other in their journey towards better health."
        }
    ];

    const stats = [
        { number: "50,000+", label: "Happy Users" },
        { number: "100+", label: "Plant Database" },
        { number: "15+", label: "Years Experience" },
        { number: "99%", label: "User Satisfaction" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/5 to-emerald-500/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <div className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-40">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onBack}
                            className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to Home</span>
                        </motion.button>

                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                                <Globe className="w-7 h-7 text-white" />
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center space-x-2">
                                <span>About SwasthAI</span>
                                <Sparkles className="w-5 h-5 text-cyan-400" />
                            </h1>
                        </div>

                        <div className="w-32"></div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Bridging Ancient Wisdom with
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"> Modern AI</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        SwasthAI is revolutionizing healthcare by combining 5,000 years of Ayurvedic knowledge
                        with cutting-edge artificial intelligence to provide personalized wellness solutions.
                    </p>
                </motion.div>

                {/* Mission & Vision */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 gap-12 mb-20"
                >
                    <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 hover:bg-white/15 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/25">
                            <Target className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To make authentic Ayurvedic knowledge accessible to everyone through intelligent technology,
                            empowering individuals to take control of their health and wellness journey with personalized,
                            evidence-based recommendations.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 hover:bg-white/15 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25">
                            <Award className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To become the world's most trusted AI-powered wellness platform, transforming how people
                            approach healthcare by making preventive medicine and holistic wellness accessible,
                            affordable, and personalized for everyone.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-12 mb-20 shadow-2xl"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-white mb-4">Our Impact</h3>
                        <p className="text-cyan-300 text-lg">Numbers that speak for our success</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-cyan-300 text-lg">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Values Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-20"
                >
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">Our Core Values</h3>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            The principles that guide everything we do at SwasthAI
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 text-center card-hover hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-cyan-500/25">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3">
                                    {value.title}
                                </h4>
                                <p className="text-gray-300">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Team Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-20"
                >
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">Meet Our Expert Team</h3>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Combining traditional Ayurvedic wisdom with modern technology expertise
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden card-hover hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>

                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-white mb-1">
                                        {member.name}
                                    </h4>
                                    <p className="text-cyan-400 font-medium mb-2">
                                        {member.role}
                                    </p>
                                    <p className="text-sm text-cyan-300 mb-3">
                                        {member.experience} experience
                                    </p>
                                    <p className="text-sm text-gray-300">
                                        {member.specialization}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Story Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-12 hover:bg-white/15 transition-all duration-300"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    SwasthAI was born from a simple yet powerful vision: to make the ancient wisdom
                                    of Ayurveda accessible to everyone in the modern world. Our founders, a team of
                                    Ayurvedic practitioners and AI researchers, recognized the gap between traditional
                                    knowledge and contemporary healthcare needs.
                                </p>
                                <p>
                                    Starting as a small research project in 2018, we've grown into a comprehensive
                                    platform that serves thousands of users worldwide. Our journey has been marked by
                                    continuous learning, innovation, and an unwavering commitment to authenticity.
                                </p>
                                <p>
                                    Today, we're proud to be at the forefront of digital Ayurveda, combining the
                                    best of both worlds to create a truly transformative wellness experience.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative h-96 rounded-2xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=400&fit=crop"
                                    alt="Our Journey"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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
                                className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full flex items-center justify-center"
                            >
                                <Leaf className="w-8 h-8 text-cyan-400" />
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
                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-500/20 backdrop-blur-sm border border-pink-400/30 rounded-full flex items-center justify-center"
                            >
                                <Heart className="w-6 h-6 text-pink-400" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;
