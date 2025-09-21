// Application constants and configuration

export const APP_CONFIG = {
    name: 'SwasthAI',
    tagline: 'Your Ayurvedic Intelligence',
    description: 'Discover the power of ancient Ayurvedic wisdom enhanced by modern AI',
    version: '1.0.0'
};

export const COLORS = {
    primary: {
        50: '#f0f9f0',
        100: '#dcf2dc',
        200: '#bce5bc',
        300: '#8dd18d',
        400: '#56b856',
        500: '#2d9d2d',
        600: '#1f7e1f',
        700: '#1a651a',
        800: '#175017',
        900: '#144214',
    },
    secondary: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
    }
};

export const BREAKPOINTS = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
};

export const ANIMATION_DURATIONS = {
    fast: 0.2,
    normal: 0.3,
    slow: 0.6,
    slower: 1.0
};

export const MOCK_DATA = {
    plants: [
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
        },
        {
            id: 4,
            name: "Neem",
            scientificName: "Azadirachta indica",
            benefits: ["Skin health", "Blood purification", "Antimicrobial"],
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            description: "Traditional herb known for its purifying and healing properties."
        },
        {
            id: 5,
            name: "Amla (Indian Gooseberry)",
            scientificName: "Phyllanthus emblica",
            benefits: ["Vitamin C", "Antioxidant", "Hair health"],
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            description: "Rich in vitamin C and antioxidants, supports overall health and vitality."
        },
        {
            id: 6,
            name: "Brahmi",
            scientificName: "Bacopa monnieri",
            benefits: ["Memory enhancement", "Cognitive function", "Stress relief"],
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            description: "Brain tonic herb that enhances memory and cognitive function."
        }
    ],
    shops: [
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
        },
        {
            id: 3,
            name: "Holistic Health Store",
            distance: "2.1 km",
            rating: 4.7,
            address: "789 Healing Lane, City",
            phone: "+1 (555) 456-7890",
            specialties: ["Organic products", "Wellness consultation", "Herbal teas"]
        }
    ]
};

export const FEATURES = [
    {
        icon: "Heart",
        title: "Personalized Remedies",
        description: "AI-powered recommendations based on your symptoms"
    },
    {
        icon: "Shield",
        title: "Trusted Ayurvedic Knowledge",
        description: "Based on centuries of traditional wisdom"
    },
    {
        icon: "Sparkles",
        title: "Modern Technology",
        description: "Combining ancient wisdom with AI intelligence"
    }
];

export const NAVIGATION_ITEMS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Plants', href: '#plants' },
    { name: 'Contact', href: '#contact' }
];

export const SOCIAL_LINKS = [
    { icon: "Facebook", href: "#", label: "Facebook" },
    { icon: "Twitter", href: "#", label: "Twitter" },
    { icon: "Instagram", href: "#", label: "Instagram" },
    { icon: "Youtube", href: "#", label: "YouTube" }
];

export const QUICK_LINKS = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Plant Database", href: "#plants" },
    { name: "Consultation", href: "#consultation" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
];

export const RESOURCES = [
    { name: "Ayurvedic Guide", href: "#guide" },
    { name: "Plant Identification", href: "#identification" },
    { name: "Remedy Recipes", href: "#recipes" },
    { name: "Wellness Tips", href: "#tips" },
    { name: "Research Papers", href: "#research" },
    { name: "Community Forum", href: "#forum" }
];
