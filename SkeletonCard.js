import React from 'react';
import { motion } from 'framer-motion';

const SkeletonCard = ({ type = 'plant' }) => {
    const skeletonVariants = {
        animate: {
            opacity: [0.5, 1, 0.5],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    if (type === 'plant') {
        return (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Image Skeleton */}
                <motion.div
                    variants={skeletonVariants}
                    animate="animate"
                    className="h-48 bg-gray-200"
                />

                {/* Content Skeleton */}
                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <motion.div
                            variants={skeletonVariants}
                            animate="animate"
                            className="h-6 bg-gray-200 rounded w-3/4"
                        />
                        <motion.div
                            variants={skeletonVariants}
                            animate="animate"
                            className="h-4 bg-gray-200 rounded w-1/2"
                        />
                    </div>

                    <motion.div
                        variants={skeletonVariants}
                        animate="animate"
                        className="h-4 bg-gray-200 rounded w-full"
                    />
                    <motion.div
                        variants={skeletonVariants}
                        animate="animate"
                        className="h-4 bg-gray-200 rounded w-2/3"
                    />

                    <div className="flex space-x-2">
                        <motion.div
                            variants={skeletonVariants}
                            animate="animate"
                            className="h-6 bg-gray-200 rounded-full w-16"
                        />
                        <motion.div
                            variants={skeletonVariants}
                            animate="animate"
                            className="h-6 bg-gray-200 rounded-full w-20"
                        />
                        <motion.div
                            variants={skeletonVariants}
                            animate="animate"
                            className="h-6 bg-gray-200 rounded-full w-14"
                        />
                    </div>

                    <motion.div
                        variants={skeletonVariants}
                        animate="animate"
                        className="h-10 bg-gray-200 rounded-lg w-full"
                    />
                </div>
            </div>
        );
    }

    if (type === 'shop') {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 space-y-2">
                        <motion.div
                            variants={skeletonVariants}
                            animate="animate"
                            className="h-6 bg-gray-200 rounded w-3/4"
                        />
                        <motion.div
                            variants={skeletonVariants}
                            animate="animate"
                            className="h-4 bg-gray-200 rounded w-1/2"
                        />
                    </div>
                    <motion.div
                        variants={skeletonVariants}
                        animate="animate"
                        className="w-12 h-12 bg-gray-200 rounded-full"
                    />
                </div>

                <div className="space-y-3 mb-6">
                    <motion.div
                        variants={skeletonVariants}
                        animate="animate"
                        className="h-4 bg-gray-200 rounded w-full"
                    />
                    <motion.div
                        variants={skeletonVariants}
                        animate="animate"
                        className="h-4 bg-gray-200 rounded w-2/3"
                    />
                    <motion.div
                        variants={skeletonVariants}
                        animate="animate"
                        className="h-4 bg-gray-200 rounded w-1/2"
                    />
                </div>

                <div className="flex space-x-2 mb-6">
                    <motion.div
                        variants={skeletonVariants}
                        animate="animate"
                        className="h-6 bg-gray-200 rounded-full w-20"
                    />
                    <motion.div
                        variants={skeletonVariants}
                        animate="animate"
                        className="h-6 bg-gray-200 rounded-full w-16"
                    />
                    <motion.div
                        variants={skeletonVariants}
                        animate="animate"
                        className="h-6 bg-gray-200 rounded-full w-24"
                    />
                </div>

                <motion.div
                    variants={skeletonVariants}
                    animate="animate"
                    className="h-12 bg-gray-200 rounded-lg w-full"
                />
            </div>
        );
    }

    return null;
};

export default SkeletonCard;
