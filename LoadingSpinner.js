import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ size = 'default', text = 'Loading...' }) => {
    const sizeClasses = {
        small: 'w-4 h-4',
        default: 'w-6 h-6',
        large: 'w-8 h-8',
        xl: 'w-12 h-12'
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center space-y-3"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className={`${sizeClasses[size]} text-ayurvedic-500`}
            >
                <Loader2 className="w-full h-full" />
            </motion.div>
            {text && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm text-gray-600"
                >
                    {text}
                </motion.p>
            )}
        </motion.div>
    );
};

export default LoadingSpinner;
