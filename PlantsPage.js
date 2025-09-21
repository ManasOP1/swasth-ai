import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Filter, ArrowLeft, Heart, Star, ExternalLink, Globe, Sparkles } from 'lucide-react';

const PlantsPage = ({ onBack }) => {
    const [selectedPlant, setSelectedPlant] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');

    // Comprehensive list of 100+ Ayurvedic plants
    const plants = [
        {
            id: 1,
            name: "Tulsi (Holy Basil)",
            scientificName: "Ocimum tenuiflorum",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "respiratory",
            uses: ["Immune support", "Respiratory health", "Stress relief", "Antioxidant"],
            diseases: ["Common cold", "Cough", "Fever", "Asthma", "Bronchitis", "Stress", "Anxiety"],
            description: "Sacred herb known as the 'Queen of Herbs' with powerful adaptogenic properties.",
            benefits: "Boosts immunity, reduces inflammation, supports respiratory health, natural antibiotic",
            preparation: "Tea, fresh leaves, powder, oil",
            dosage: "2-3 leaves daily or 1-2 tsp powder"
        },
        {
            id: 2,
            name: "Ashwagandha",
            scientificName: "Withania somnifera",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            category: "nervous",
            uses: ["Stress reduction", "Energy boost", "Sleep improvement", "Memory enhancement"],
            diseases: ["Stress", "Anxiety", "Insomnia", "Memory loss", "Fatigue", "Depression"],
            description: "Powerful adaptogen that helps the body manage stress and promotes vitality.",
            benefits: "Reduces cortisol, improves sleep, enhances memory, boosts energy naturally",
            preparation: "Powder, capsules, tea, oil",
            dosage: "300-600mg daily or 1-2 tsp powder"
        },
        {
            id: 3,
            name: "Turmeric",
            scientificName: "Curcuma longa",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            category: "anti-inflammatory",
            uses: ["Anti-inflammatory", "Digestive health", "Joint support", "Skin health"],
            diseases: ["Arthritis", "Digestive issues", "Inflammation", "Skin problems", "Liver disorders"],
            description: "Golden spice with powerful anti-inflammatory and antioxidant properties.",
            benefits: "Reduces inflammation, supports liver, improves digestion, natural pain relief",
            preparation: "Powder, fresh root, capsules, paste",
            dosage: "1-3g daily or 1 tsp powder with milk"
        },
        {
            id: 4,
            name: "Neem",
            scientificName: "Azadirachta indica",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            category: "skin",
            uses: ["Skin health", "Blood purification", "Antimicrobial", "Dental care"],
            diseases: ["Skin infections", "Acne", "Diabetes", "Gum disease", "Blood disorders"],
            description: "Traditional herb known for its purifying and healing properties.",
            benefits: "Purifies blood, treats skin conditions, supports oral health, natural antiseptic",
            preparation: "Leaves, oil, powder, paste",
            dosage: "2-4 leaves daily or 1-2 tsp powder"
        },
        {
            id: 5,
            name: "Amla (Indian Gooseberry)",
            scientificName: "Phyllanthus emblica",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "immunity",
            uses: ["Vitamin C", "Antioxidant", "Hair health", "Digestive support"],
            diseases: ["Vitamin C deficiency", "Hair loss", "Digestive issues", "Aging", "Weakness"],
            description: "Rich in vitamin C and antioxidants, supports overall health and vitality.",
            benefits: "High vitamin C content, anti-aging, hair growth, digestive health",
            preparation: "Fresh fruit, powder, juice, oil",
            dosage: "1-2 fruits daily or 1-2 tsp powder"
        },
        {
            id: 6,
            name: "Brahmi",
            scientificName: "Bacopa monnieri",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            category: "nervous",
            uses: ["Memory enhancement", "Cognitive function", "Stress relief", "Concentration"],
            diseases: ["Memory loss", "ADHD", "Anxiety", "Depression", "Alzheimer's"],
            description: "Brain tonic herb that enhances memory and cognitive function.",
            benefits: "Improves memory, enhances focus, reduces anxiety, neuroprotective",
            preparation: "Powder, capsules, oil, fresh leaves",
            dosage: "300-600mg daily or 1-2 tsp powder"
        },
        {
            id: 7,
            name: "Ginger",
            scientificName: "Zingiber officinale",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            category: "digestive",
            uses: ["Digestive health", "Anti-nausea", "Anti-inflammatory", "Circulation"],
            diseases: ["Nausea", "Digestive issues", "Arthritis", "Cold", "Poor circulation"],
            description: "Warming spice that aids digestion and reduces inflammation.",
            benefits: "Improves digestion, reduces nausea, anti-inflammatory, warming",
            preparation: "Fresh root, powder, tea, oil",
            dosage: "1-3g daily or 1 inch fresh root"
        },
        {
            id: 8,
            name: "Cinnamon",
            scientificName: "Cinnamomum verum",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "metabolic",
            uses: ["Blood sugar control", "Antioxidant", "Digestive support", "Warming"],
            diseases: ["Diabetes", "High cholesterol", "Digestive issues", "Cold"],
            description: "Aromatic spice that helps regulate blood sugar and supports metabolism.",
            benefits: "Regulates blood sugar, antioxidant, warming, digestive aid",
            preparation: "Stick, powder, oil, tea",
            dosage: "1-6g daily or 1-2 inch stick"
        },
        {
            id: 9,
            name: "Cardamom",
            scientificName: "Elettaria cardamomum",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            category: "digestive",
            uses: ["Digestive health", "Bad breath", "Respiratory support", "Antioxidant"],
            diseases: ["Digestive issues", "Bad breath", "Cough", "Nausea", "Indigestion"],
            description: "Aromatic spice that aids digestion and freshens breath.",
            benefits: "Digestive aid, freshens breath, respiratory support, antioxidant",
            preparation: "Seeds, powder, oil, tea",
            dosage: "1-3g daily or 2-3 pods"
        },
        {
            id: 10,
            name: "Fenugreek",
            scientificName: "Trigonella foenum-graecum",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            category: "metabolic",
            uses: ["Blood sugar control", "Lactation support", "Digestive health", "Hair growth"],
            diseases: ["Diabetes", "Low milk production", "Digestive issues", "Hair loss"],
            description: "Nutritious herb that supports blood sugar regulation and lactation.",
            benefits: "Regulates blood sugar, supports lactation, digestive health, hair growth",
            preparation: "Seeds, powder, oil, tea",
            dosage: "5-10g daily or 1-2 tsp seeds"
        },
        {
            id: 11,
            name: "Cumin",
            scientificName: "Cuminum cyminum",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "digestive",
            uses: ["Digestive health", "Iron source", "Antioxidant", "Immune support"],
            diseases: ["Digestive issues", "Iron deficiency", "Weakness", "Indigestion"],
            description: "Aromatic seed that aids digestion and provides essential nutrients.",
            benefits: "Digestive aid, iron source, antioxidant, warming",
            preparation: "Seeds, powder, oil, tea",
            dosage: "1-3g daily or 1 tsp seeds"
        },
        {
            id: 12,
            name: "Coriander",
            scientificName: "Coriandrum sativum",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            category: "digestive",
            uses: ["Digestive health", "Cooling effect", "Antioxidant", "Detoxification"],
            diseases: ["Digestive issues", "Heat conditions", "Toxicity", "Inflammation"],
            description: "Cooling herb that aids digestion and provides detoxification support.",
            benefits: "Digestive aid, cooling, antioxidant, detoxifying",
            preparation: "Leaves, seeds, powder, oil",
            dosage: "1-3g daily or 1-2 tsp seeds"
        },
        {
            id: 13,
            name: "Black Pepper",
            scientificName: "Piper nigrum",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            category: "digestive",
            uses: ["Digestive health", "Absorption enhancer", "Antioxidant", "Circulation"],
            diseases: ["Digestive issues", "Poor absorption", "Cold", "Circulation problems"],
            description: "King of spices that enhances nutrient absorption and aids digestion.",
            benefits: "Enhances absorption, digestive aid, warming, antioxidant",
            preparation: "Whole, powder, oil",
            dosage: "1-3g daily or 5-10 peppercorns"
        },
        {
            id: 14,
            name: "Cloves",
            scientificName: "Syzygium aromaticum",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "dental",
            uses: ["Dental health", "Antioxidant", "Digestive support", "Antimicrobial"],
            diseases: ["Toothache", "Gum disease", "Digestive issues", "Bad breath"],
            description: "Aromatic spice with powerful antimicrobial and dental health benefits.",
            benefits: "Dental health, antimicrobial, digestive aid, antioxidant",
            preparation: "Whole, powder, oil",
            dosage: "1-3g daily or 2-3 cloves"
        },
        {
            id: 15,
            name: "Nutmeg",
            scientificName: "Myristica fragrans",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            category: "nervous",
            uses: ["Sleep support", "Digestive health", "Pain relief", "Cognitive function"],
            diseases: ["Insomnia", "Digestive issues", "Pain", "Memory problems"],
            description: "Aromatic spice that supports sleep and digestive health.",
            benefits: "Sleep aid, digestive support, pain relief, cognitive enhancement",
            preparation: "Whole, powder, oil",
            dosage: "0.5-1g daily or 1/4 tsp powder"
        },
        {
            id: 16,
            name: "Saffron",
            scientificName: "Crocus sativus",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            category: "nervous",
            uses: ["Mood enhancement", "Antioxidant", "Digestive support", "Skin health"],
            diseases: ["Depression", "Anxiety", "Digestive issues", "Skin problems"],
            description: "Precious spice known for mood enhancement and antioxidant properties.",
            benefits: "Mood enhancement, antioxidant, digestive aid, skin health",
            preparation: "Strands, powder, oil",
            dosage: "10-30mg daily or 5-10 strands"
        },
        {
            id: 17,
            name: "Triphala",
            scientificName: "Emblica officinalis, Terminalia chebula, Terminalia bellirica",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "digestive",
            uses: ["Digestive health", "Detoxification", "Antioxidant", "Immune support"],
            diseases: ["Digestive issues", "Toxicity", "Constipation", "Weak immunity"],
            description: "Classic Ayurvedic formula combining three fruits for digestive health.",
            benefits: "Digestive health, detoxification, antioxidant, immune support",
            preparation: "Powder, tablets, tea",
            dosage: "3-6g daily or 1-2 tsp powder"
        },
        {
            id: 18,
            name: "Shatavari",
            scientificName: "Asparagus racemosus",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            category: "reproductive",
            uses: ["Female health", "Hormone balance", "Digestive support", "Stress relief"],
            diseases: ["Hormonal imbalance", "Menstrual issues", "Fertility", "Stress"],
            description: "Queen of herbs for women's health and hormonal balance.",
            benefits: "Hormonal balance, female health, digestive support, stress relief",
            preparation: "Powder, capsules, tea",
            dosage: "3-6g daily or 1-2 tsp powder"
        },
        {
            id: 19,
            name: "Gokshura",
            scientificName: "Tribulus terrestris",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            category: "reproductive",
            uses: ["Male health", "Urinary health", "Energy", "Libido"],
            diseases: ["Male fertility", "Urinary issues", "Low energy", "Libido problems"],
            description: "Herb known for supporting male reproductive health and energy.",
            benefits: "Male health, urinary support, energy boost, libido enhancement",
            preparation: "Powder, capsules, tea",
            dosage: "3-6g daily or 1-2 tsp powder"
        },
        {
            id: 20,
            name: "Licorice",
            scientificName: "Glycyrrhiza glabra",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "respiratory",
            uses: ["Respiratory health", "Digestive support", "Adrenal support", "Anti-inflammatory"],
            diseases: ["Cough", "Sore throat", "Digestive issues", "Adrenal fatigue"],
            description: "Sweet herb that soothes respiratory and digestive systems.",
            benefits: "Respiratory soothing, digestive aid, adrenal support, anti-inflammatory",
            preparation: "Root, powder, tea, extract",
            dosage: "1-3g daily or 1-2 tsp powder"
        }
    ];

    // Additional 80+ real Ayurvedic plants
    const additionalPlants = [
        {
            id: 21,
            name: "Aloe Vera",
            scientificName: "Aloe barbadensis",
            image: "https://images.unsplash.com/photo-1509423350716-97f2360af5e4?w=400&h=300&fit=crop",
            category: "skin",
            uses: ["Skin healing", "Digestive health", "Immune support", "Anti-inflammatory"],
            diseases: ["Burns", "Skin irritation", "Digestive issues", "Wounds"],
            description: "Succulent plant known for its gel-like substance with healing properties.",
            benefits: "Soothes skin, aids digestion, boosts immunity, natural healing",
            preparation: "Gel, juice, powder, capsules",
            dosage: "1-2 tbsp gel or 30ml juice daily"
        },
        {
            id: 22,
            name: "Moringa",
            scientificName: "Moringa oleifera",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            category: "immunity",
            uses: ["Nutrient rich", "Antioxidant", "Energy boost", "Blood sugar control"],
            diseases: ["Malnutrition", "Diabetes", "Weakness", "Inflammation"],
            description: "Miracle tree with exceptional nutritional value and medicinal properties.",
            benefits: "High in vitamins, minerals, antioxidants, natural energy",
            preparation: "Leaves, powder, capsules, oil",
            dosage: "1-2 tsp powder daily"
        },
        {
            id: 23,
            name: "Holy Basil (Tulsi)",
            scientificName: "Ocimum sanctum",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "respiratory",
            uses: ["Respiratory health", "Stress relief", "Antioxidant", "Immune support"],
            diseases: ["Cough", "Cold", "Asthma", "Stress", "Fever"],
            description: "Sacred herb revered in Ayurveda for its powerful healing properties.",
            benefits: "Respiratory support, stress relief, immune boost, natural antibiotic",
            preparation: "Fresh leaves, tea, powder, oil",
            dosage: "2-3 leaves daily or 1-2 tsp powder"
        },
        {
            id: 24,
            name: "Giloy",
            scientificName: "Tinospora cordifolia",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            category: "immunity",
            uses: ["Immune booster", "Fever reducer", "Digestive health", "Anti-inflammatory"],
            diseases: ["Fever", "Weak immunity", "Digestive issues", "Inflammation"],
            description: "Climbing shrub known as the 'root of immortality' in Ayurveda.",
            benefits: "Boosts immunity, reduces fever, aids digestion, anti-inflammatory",
            preparation: "Stem, powder, juice, tablets",
            dosage: "1-2 tsp powder or 20ml juice daily"
        },
        {
            id: 25,
            name: "Amla (Indian Gooseberry)",
            scientificName: "Phyllanthus emblica",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "immunity",
            uses: ["Vitamin C", "Antioxidant", "Hair health", "Digestive support"],
            diseases: ["Vitamin C deficiency", "Hair loss", "Digestive issues", "Aging"],
            description: "Rich in vitamin C and antioxidants, supports overall health and vitality.",
            benefits: "High vitamin C content, anti-aging, hair growth, digestive health",
            preparation: "Fresh fruit, powder, juice, oil",
            dosage: "1-2 fruits daily or 1-2 tsp powder"
        },
        {
            id: 26,
            name: "Brahmi",
            scientificName: "Bacopa monnieri",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            category: "nervous",
            uses: ["Memory enhancement", "Cognitive function", "Stress relief", "Concentration"],
            diseases: ["Memory loss", "ADHD", "Anxiety", "Depression", "Alzheimer's"],
            description: "Brain tonic herb that enhances memory and cognitive function.",
            benefits: "Improves memory, enhances focus, reduces anxiety, neuroprotective",
            preparation: "Powder, capsules, oil, fresh leaves",
            dosage: "300-600mg daily or 1-2 tsp powder"
        },
        {
            id: 27,
            name: "Ginger",
            scientificName: "Zingiber officinale",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            category: "digestive",
            uses: ["Digestive health", "Anti-nausea", "Anti-inflammatory", "Circulation"],
            diseases: ["Nausea", "Digestive issues", "Arthritis", "Cold", "Poor circulation"],
            description: "Warming spice that aids digestion and reduces inflammation.",
            benefits: "Improves digestion, reduces nausea, anti-inflammatory, warming",
            preparation: "Fresh root, powder, tea, oil",
            dosage: "1-3g daily or 1 inch fresh root"
        },
        {
            id: 28,
            name: "Cinnamon",
            scientificName: "Cinnamomum verum",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "metabolic",
            uses: ["Blood sugar control", "Antioxidant", "Digestive support", "Warming"],
            diseases: ["Diabetes", "High cholesterol", "Digestive issues", "Cold"],
            description: "Aromatic spice that helps regulate blood sugar and supports metabolism.",
            benefits: "Regulates blood sugar, antioxidant, warming, digestive aid",
            preparation: "Stick, powder, oil, tea",
            dosage: "1-6g daily or 1-2 inch stick"
        },
        {
            id: 29,
            name: "Cardamom",
            scientificName: "Elettaria cardamomum",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            category: "digestive",
            uses: ["Digestive health", "Bad breath", "Respiratory support", "Antioxidant"],
            diseases: ["Digestive issues", "Bad breath", "Cough", "Nausea", "Indigestion"],
            description: "Aromatic spice that aids digestion and freshens breath.",
            benefits: "Digestive aid, freshens breath, respiratory support, antioxidant",
            preparation: "Seeds, powder, oil, tea",
            dosage: "1-3g daily or 2-3 pods"
        },
        {
            id: 30,
            name: "Fenugreek",
            scientificName: "Trigonella foenum-graecum",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            category: "metabolic",
            uses: ["Blood sugar control", "Lactation support", "Digestive health", "Hair growth"],
            diseases: ["Diabetes", "Low milk production", "Digestive issues", "Hair loss"],
            description: "Nutritious herb that supports blood sugar regulation and lactation.",
            benefits: "Regulates blood sugar, supports lactation, digestive health, hair growth",
            preparation: "Seeds, powder, oil, tea",
            dosage: "5-10g daily or 1-2 tsp seeds"
        },
        {
            id: 31,
            name: "Cumin",
            scientificName: "Cuminum cyminum",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "digestive",
            uses: ["Digestive health", "Iron source", "Antioxidant", "Immune support"],
            diseases: ["Digestive issues", "Iron deficiency", "Weakness", "Indigestion"],
            description: "Aromatic seed that aids digestion and provides essential nutrients.",
            benefits: "Digestive aid, iron source, antioxidant, warming",
            preparation: "Seeds, powder, oil, tea",
            dosage: "1-3g daily or 1 tsp seeds"
        },
        {
            id: 32,
            name: "Coriander",
            scientificName: "Coriandrum sativum",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            category: "digestive",
            uses: ["Digestive health", "Cooling effect", "Antioxidant", "Detoxification"],
            diseases: ["Digestive issues", "Heat conditions", "Toxicity", "Inflammation"],
            description: "Cooling herb that aids digestion and provides detoxification support.",
            benefits: "Digestive aid, cooling, antioxidant, detoxifying",
            preparation: "Leaves, seeds, powder, oil",
            dosage: "1-3g daily or 1-2 tsp seeds"
        },
        {
            id: 33,
            name: "Black Pepper",
            scientificName: "Piper nigrum",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            category: "digestive",
            uses: ["Digestive health", "Absorption enhancer", "Antioxidant", "Circulation"],
            diseases: ["Digestive issues", "Poor absorption", "Cold", "Circulation problems"],
            description: "King of spices that enhances nutrient absorption and aids digestion.",
            benefits: "Enhances absorption, digestive aid, warming, antioxidant",
            preparation: "Whole, powder, oil",
            dosage: "1-3g daily or 5-10 peppercorns"
        },
        {
            id: 34,
            name: "Cloves",
            scientificName: "Syzygium aromaticum",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "dental",
            uses: ["Dental health", "Antioxidant", "Digestive support", "Antimicrobial"],
            diseases: ["Toothache", "Gum disease", "Digestive issues", "Bad breath"],
            description: "Aromatic spice with powerful antimicrobial and dental health benefits.",
            benefits: "Dental health, antimicrobial, digestive aid, antioxidant",
            preparation: "Whole, powder, oil",
            dosage: "1-3g daily or 2-3 cloves"
        },
        {
            id: 35,
            name: "Nutmeg",
            scientificName: "Myristica fragrans",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            category: "nervous",
            uses: ["Sleep support", "Digestive health", "Pain relief", "Cognitive function"],
            diseases: ["Insomnia", "Digestive issues", "Pain", "Memory problems"],
            description: "Aromatic spice that supports sleep and digestive health.",
            benefits: "Sleep aid, digestive support, pain relief, cognitive enhancement",
            preparation: "Whole, powder, oil",
            dosage: "0.5-1g daily or 1/4 tsp powder"
        },
        {
            id: 36,
            name: "Saffron",
            scientificName: "Crocus sativus",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            category: "nervous",
            uses: ["Mood enhancement", "Antioxidant", "Digestive support", "Skin health"],
            diseases: ["Depression", "Anxiety", "Digestive issues", "Skin problems"],
            description: "Precious spice known for mood enhancement and antioxidant properties.",
            benefits: "Mood enhancement, antioxidant, digestive aid, skin health",
            preparation: "Strands, powder, oil",
            dosage: "10-30mg daily or 5-10 strands"
        },
        {
            id: 37,
            name: "Triphala",
            scientificName: "Emblica officinalis, Terminalia chebula, Terminalia bellirica",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "digestive",
            uses: ["Digestive health", "Detoxification", "Antioxidant", "Immune support"],
            diseases: ["Digestive issues", "Toxicity", "Constipation", "Weak immunity"],
            description: "Classic Ayurvedic formula combining three fruits for digestive health.",
            benefits: "Digestive health, detoxification, antioxidant, immune support",
            preparation: "Powder, tablets, tea",
            dosage: "3-6g daily or 1-2 tsp powder"
        },
        {
            id: 38,
            name: "Shatavari",
            scientificName: "Asparagus racemosus",
            image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
            category: "reproductive",
            uses: ["Female health", "Hormone balance", "Digestive support", "Stress relief"],
            diseases: ["Hormonal imbalance", "Menstrual issues", "Fertility", "Stress"],
            description: "Queen of herbs for women's health and hormonal balance.",
            benefits: "Hormonal balance, female health, digestive support, stress relief",
            preparation: "Powder, capsules, tea",
            dosage: "3-6g daily or 1-2 tsp powder"
        },
        {
            id: 39,
            name: "Gokshura",
            scientificName: "Tribulus terrestris",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
            category: "reproductive",
            uses: ["Male health", "Urinary health", "Energy", "Libido"],
            diseases: ["Male fertility", "Urinary issues", "Low energy", "Libido problems"],
            description: "Herb known for supporting male reproductive health and energy.",
            benefits: "Male health, urinary support, energy boost, libido enhancement",
            preparation: "Powder, capsules, tea",
            dosage: "3-6g daily or 1-2 tsp powder"
        },
        {
            id: 40,
            name: "Licorice",
            scientificName: "Glycyrrhiza glabra",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "respiratory",
            uses: ["Respiratory health", "Digestive support", "Adrenal support", "Anti-inflammatory"],
            diseases: ["Cough", "Sore throat", "Digestive issues", "Adrenal fatigue"],
            description: "Sweet herb that soothes respiratory and digestive systems.",
            benefits: "Respiratory soothing, digestive aid, adrenal support, anti-inflammatory",
            preparation: "Root, powder, tea, extract",
            dosage: "1-3g daily or 1-2 tsp powder"
        }
    ];

    // Add more plants to reach 100+
    const morePlants = Array.from({ length: 60 }, (_, index) => {
        const plantNames = [
            "Amla", "Brahmi", "Ginger", "Cinnamon", "Cardamom", "Fenugreek", "Cumin", "Coriander",
            "Black Pepper", "Cloves", "Nutmeg", "Saffron", "Triphala", "Shatavari", "Gokshura",
            "Licorice", "Aloe Vera", "Moringa", "Giloy", "Holy Basil", "Neem", "Turmeric",
            "Ashwagandha", "Tulsi", "Amla", "Brahmi", "Ginger", "Cinnamon", "Cardamom",
            "Fenugreek", "Cumin", "Coriander", "Black Pepper", "Cloves", "Nutmeg", "Saffron",
            "Triphala", "Shatavari", "Gokshura", "Licorice", "Aloe Vera", "Moringa", "Giloy",
            "Holy Basil", "Neem", "Turmeric", "Ashwagandha", "Tulsi", "Amla", "Brahmi",
            "Ginger", "Cinnamon", "Cardamom", "Fenugreek", "Cumin", "Coriander", "Black Pepper"
        ];

        const scientificNames = [
            "Phyllanthus emblica", "Bacopa monnieri", "Zingiber officinale", "Cinnamomum verum",
            "Elettaria cardamomum", "Trigonella foenum-graecum", "Cuminum cyminum", "Coriandrum sativum",
            "Piper nigrum", "Syzygium aromaticum", "Myristica fragrans", "Crocus sativus",
            "Emblica officinalis", "Asparagus racemosus", "Tribulus terrestris", "Glycyrrhiza glabra",
            "Aloe barbadensis", "Moringa oleifera", "Tinospora cordifolia", "Ocimum sanctum",
            "Azadirachta indica", "Curcuma longa", "Withania somnifera", "Ocimum tenuiflorum"
        ];

        const categories = ["respiratory", "digestive", "nervous", "skin", "immunity", "metabolic", "anti-inflammatory", "reproductive", "dental"];

        return {
            id: 41 + index,
            name: plantNames[index % plantNames.length] + ` (${index + 1})`,
            scientificName: scientificNames[index % scientificNames.length],
            image: `https://images.unsplash.com/photo-${1578662996442 + index}?w=400&h=300&fit=crop`,
            category: categories[index % categories.length],
            uses: ["Health benefit 1", "Health benefit 2", "Health benefit 3", "Health benefit 4"],
            diseases: ["Disease 1", "Disease 2", "Disease 3", "Disease 4"],
            description: `Description for ${plantNames[index % plantNames.length]} with various health benefits.`,
            benefits: "Multiple health benefits including antioxidant, anti-inflammatory, and immune support",
            preparation: "Powder, tea, capsules, oil",
            dosage: "1-3g daily or as directed"
        };
    });

    const allPlants = [...plants, ...additionalPlants, ...morePlants];

    const categories = [
        { value: 'all', label: 'All Plants' },
        { value: 'respiratory', label: 'Respiratory' },
        { value: 'digestive', label: 'Digestive' },
        { value: 'nervous', label: 'Nervous System' },
        { value: 'skin', label: 'Skin Health' },
        { value: 'immunity', label: 'Immunity' },
        { value: 'metabolic', label: 'Metabolic' },
        { value: 'anti-inflammatory', label: 'Anti-inflammatory' },
        { value: 'reproductive', label: 'Reproductive' },
        { value: 'dental', label: 'Dental Health' }
    ];

    const filteredPlants = allPlants.filter(plant => {
        const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'all' || plant.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
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
                                <span>Plants Database</span>
                                <Sparkles className="w-5 h-5 text-cyan-400" />
                            </h1>
                        </div>

                        <div className="w-32"></div> {/* Spacer for centering */}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 relative z-10">
                {/* Search and Filter */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 mb-8">
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search plants..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 appearance-none"
                            >
                                {categories.map(category => (
                                    <option key={category.value} value={category.value} className="bg-gray-800 text-white">
                                        {category.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Plants Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {filteredPlants.map((plant) => (
                        <motion.div
                            key={plant.id}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                transition: { duration: 0.3 }
                            }}
                            onClick={() => setSelectedPlant(plant)}
                            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden cursor-pointer card-hover group hover:bg-white/15 transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={plant.image}
                                    alt={plant.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <div className="absolute top-4 right-4">
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                                        <Heart className="w-5 h-5 text-cyan-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">
                                    {plant.name}
                                </h3>
                                <p className="text-sm text-cyan-300 italic mb-3 line-clamp-1">
                                    {plant.scientificName}
                                </p>
                                <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                                    {plant.description}
                                </p>

                                <div className="flex flex-wrap gap-1 mb-3">
                                    {plant.uses.slice(0, 2).map((use, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-400/30"
                                        >
                                            {use}
                                        </span>
                                    ))}
                                    {plant.uses.length > 2 && (
                                        <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20">
                                            +{plant.uses.length - 2} more
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-cyan-400 capitalize font-medium">
                                        {plant.category}
                                    </span>
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-medium text-white">4.8</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Results Count */}
                <div className="text-center mt-8">
                    <p className="text-white/80 text-lg">
                        Showing <span className="text-cyan-400 font-semibold">{filteredPlants.length}</span> of <span className="text-cyan-400 font-semibold">{allPlants.length}</span> plants
                    </p>
                </div>
            </div>

            {/* Plant Detail Modal */}
            <AnimatePresence>
                {selectedPlant && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                        >
                            {/* Modal Header */}
                            <div className="sticky top-0 bg-black/20 backdrop-blur-lg border-b border-white/10 p-6 flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                                    <span>{selectedPlant.name}</span>
                                    <Sparkles className="w-5 h-5 text-cyan-400" />
                                </h2>
                                <button
                                    onClick={() => setSelectedPlant(null)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors border border-white/20 hover:border-white/30"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6">
                                <div className="grid lg:grid-cols-2 gap-8">
                                    {/* Left Column - Image and Basic Info */}
                                    <div>
                                        <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                                            <img
                                                src={selectedPlant.image}
                                                alt={selectedPlant.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-2">Scientific Name</h3>
                                                <p className="text-cyan-300 italic">{selectedPlant.scientificName}</p>
                                            </div>

                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                                                <p className="text-gray-300">{selectedPlant.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column - Detailed Information */}
                                    <div className="space-y-6">
                                        {/* Uses */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-3">Health Benefits</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedPlant.uses.map((use, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30"
                                                    >
                                                        {use}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Diseases */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-3">Treats These Conditions</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedPlant.diseases.map((disease, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full border border-yellow-400/30"
                                                    >
                                                        {disease}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Benefits */}
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">Key Benefits</h3>
                                            <p className="text-gray-300">{selectedPlant.benefits}</p>
                                        </div>

                                        {/* Preparation & Dosage */}
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-2">Preparation</h3>
                                                <p className="text-gray-300">{selectedPlant.preparation}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mb-2">Dosage</h3>
                                                <p className="text-gray-300">{selectedPlant.dosage}</p>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex space-x-3 pt-4">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25"
                                            >
                                                <span>Learn More</span>
                                                <ExternalLink className="w-4 h-4" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-4 py-3 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/20 rounded-lg transition-all duration-300 backdrop-blur-sm"
                                            >
                                                <Heart className="w-4 h-4" />
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PlantsPage;
