import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, User, CheckCircle, Globe, Sparkles } from 'lucide-react';

const ContactPage = ({ onBack }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            details: ["support@swasthai.com", "info@swasthai.com"],
            description: "We'll respond within 24 hours"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
            description: "Mon-Fri, 9 AM - 6 PM"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Us",
            details: ["123 Wellness Street", "San Francisco, CA 94102"],
            description: "By appointment only"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Business Hours",
            details: ["Monday - Friday: 9 AM - 6 PM", "Saturday: 10 AM - 4 PM"],
            description: "Sunday: Closed"
        }
    ];

    const services = [
        {
            title: "General Inquiries",
            description: "Questions about our services, pricing, or general information",
            contact: "info@swasthai.com"
        },
        {
            title: "Technical Support",
            description: "Help with app features, account issues, or technical problems",
            contact: "support@swasthai.com"
        },
        {
            title: "Partnership Opportunities",
            description: "Collaboration, partnerships, or business development inquiries",
            contact: "partnerships@swasthai.com"
        },
        {
            title: "Media & Press",
            description: "Press inquiries, media requests, or interview opportunities",
            contact: "media@swasthai.com"
        }
    ];

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
                                <span>Contact Us</span>
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
                        Get in <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We're here to help you on your wellness journey. Reach out to us for any questions,
                        support, or to learn more about how SwasthAI can transform your health.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 hover:bg-white/15 transition-all duration-300"
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
                            <p className="text-gray-300">We'll get back to you as soon as possible</p>
                        </div>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                                <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Message *
                                    </label>
                                    <div className="relative">
                                        <MessageCircle className="absolute left-3 top-3 text-cyan-400 w-5 h-5" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows="6"
                                            className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 resize-none"
                                            placeholder="Tell us how we can help you..."
                                        />
                                    </div>
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </motion.button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="space-y-6"
                        >
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.02,
                                        y: -2,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 card-hover hover:bg-white/15 transition-all duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-cyan-500/25">
                                            {info.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-white mb-2">
                                                {info.title}
                                            </h4>
                                            <div className="space-y-1">
                                                {info.details.map((detail, detailIndex) => (
                                                    <p key={detailIndex} className="text-gray-300">
                                                        {detail}
                                                    </p>
                                                ))}
                                            </div>
                                            <p className="text-sm text-cyan-300 mt-2">
                                                {info.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden hover:bg-white/15 transition-all duration-300"
                        >
                            <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                                    <p className="text-white">Interactive Map Coming Soon</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Services Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-20"
                >
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">How Can We Help?</h3>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Choose the right contact method based on your needs
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
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
                                    <Calendar className="w-8 h-8" />
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-3">
                                    {service.title}
                                </h4>
                                <p className="text-gray-300 text-sm mb-4">
                                    {service.description}
                                </p>
                                <a
                                    href={`mailto:${service.contact}`}
                                    className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                                >
                                    {service.contact}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-12 hover:bg-white/15 transition-all duration-300"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h3>
                        <p className="text-gray-300 text-lg">Quick answers to common questions</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    How quickly do you respond?
                                </h4>
                                <p className="text-gray-300">
                                    We typically respond to all inquiries within 24 hours during business days.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    Do you offer phone consultations?
                                </h4>
                                <p className="text-gray-300">
                                    Yes, we offer phone consultations by appointment. Please contact us to schedule.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    Is SwasthAI free to use?
                                </h4>
                                <p className="text-gray-300">
                                    We offer both free and premium features. Contact us to learn about our plans.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    Can I schedule a demo?
                                </h4>
                                <p className="text-gray-300">
                                    Absolutely! We'd love to show you how SwasthAI can help your organization.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    Do you have a mobile app?
                                </h4>
                                <p className="text-gray-300">
                                    Yes, SwasthAI is available as a web app and mobile app for iOS and Android.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    How secure is my data?
                                </h4>
                                <p className="text-gray-300">
                                    We use enterprise-grade security to protect your personal health information.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
