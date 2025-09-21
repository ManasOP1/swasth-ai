import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles, Globe } from 'lucide-react';

const Header = ({ onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home', action: () => onNavigate('home') },
        { name: 'Plants', href: '#plants', action: () => onNavigate('plants') },
        { name: 'About Us', href: '#about', action: () => onNavigate('about') },
        { name: 'Contact Us', href: '#contact', action: () => onNavigate('contact') }
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-black/20 backdrop-blur-lg border-b border-white/10'
                : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                            <Globe className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            SwasthAI
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.name}
                                onClick={item.action}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="text-white/90 hover:text-white font-medium transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                            >
                                {item.name}
                            </motion.button>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(6, 182, 212, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Get Started</span>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMobileMenuOpen ? 'auto' : 0,
                        opacity: isMobileMenuOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="py-6 space-y-4 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/10 mt-4">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => {
                                    item.action();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block text-white/90 hover:text-white font-medium transition-all duration-300 px-6 py-3 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                            >
                                {item.name}
                            </button>
                        ))}
                        <div className="px-6 pt-4">
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 w-full flex items-center justify-center space-x-2">
                                <Sparkles className="w-4 h-4" />
                                <span>Get Started</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </nav>
        </motion.header>
    );
};

export default Header;
