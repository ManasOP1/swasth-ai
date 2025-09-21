import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Sparkles } from 'lucide-react';

const Footer = () => {
    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Youtube, href: "#", label: "YouTube" }
    ];

    const quickLinks = [
        { name: "About Us", href: "#about" },
        { name: "Our Services", href: "#services" },
        { name: "Plant Database", href: "#plants" },
        { name: "Consultation", href: "#consultation" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" }
    ];

    const resources = [
        { name: "Ayurvedic Guide", href: "#guide" },
        { name: "Plant Identification", href: "#identification" },
        { name: "Remedy Recipes", href: "#recipes" },
        { name: "Wellness Tips", href: "#tips" },
        { name: "Research Papers", href: "#research" },
        { name: "Community Forum", href: "#forum" }
    ];

    return (
        <motion.footer
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-3 mb-6"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                                <Globe className="w-7 h-7 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SwasthAI</span>
                        </motion.div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Your intelligent Ayurvedic companion, combining ancient wisdom with modern AI technology
                            for personalized wellness solutions.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-cyan-500/20 hover:border-cyan-400/30 rounded-xl flex items-center justify-center transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
                        <ul className="space-y-3">
                            {resources.map((resource, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <a
                                        href={resource.href}
                                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                                    >
                                        {resource.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300">support@swasthai.com</p>
                                    <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300">+1 (555) 123-4567</p>
                                    <p className="text-sm text-gray-400">Mon-Fri, 9 AM - 6 PM</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300">Wellness District</p>
                                    <p className="text-sm text-gray-400">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="border-t border-white/10 mt-12 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm flex items-center space-x-2">
                            <span>© 2024 SwasthAI. All rights reserved.</span>
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                            <span>Made with ❤️ for wellness.</span>
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                Terms of Service
                            </a>
                            <a href="#cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
