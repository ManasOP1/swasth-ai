// Browser-compatible MCP Service (simplified for React)
export default class MCPService {
    constructor() {
        this.isConnected = false;
        this.sessionId = null;
    }

    async initialize() {
        try {
            // Create a session ID
            this.sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            this.isConnected = true;
            console.log('MCP Service initialized successfully (browser mode)');
        } catch (error) {
            console.error('Error initializing MCP Service:', error);
            throw error;
        }
    }

    // Save chat message to localStorage (browser-compatible)
    async saveChatMessage(userMessage, aiResponse, sessionId = null) {
        try {
            const chatData = {
                id: Date.now(),
                userMessage: userMessage,
                aiResponse: aiResponse,
                sessionId: sessionId || this.sessionId,
                timestamp: new Date().toISOString()
            };

            // Get existing chat history
            const existingHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
            existingHistory.push(chatData);

            // Save to localStorage
            localStorage.setItem('chatHistory', JSON.stringify(existingHistory));

            console.log('Chat message saved to localStorage');
        } catch (error) {
            console.error('Error saving chat message:', error);
        }
    }

    // Get chat history from localStorage
    async getChatHistory(sessionId, limit = 50) {
        try {
            const chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');
            const filteredHistory = chatHistory
                .filter(chat => chat.sessionId === sessionId)
                .slice(-limit)
                .reverse();

            return filteredHistory;
        } catch (error) {
            console.error('Error getting chat history:', error);
            return [];
        }
    }

    // Search plants (mock data for browser)
    async searchPlants(query) {
        const mockPlants = [
            {
                id: 1,
                name: 'Tulsi (Holy Basil)',
                scientific_name: 'Ocimum sanctum',
                description: 'Sacred basil with powerful medicinal properties',
                uses: 'Fever, cough, cold, respiratory issues, stress relief',
                diseases_treated: 'Fever, Common Cold, Asthma, Diabetes, Stress',
                properties: 'Antibacterial, Antiviral, Anti-inflammatory, Adaptogenic',
                dosage: '5-10 leaves daily or 1-2 tsp of juice',
                contraindications: 'Pregnancy, bleeding disorders'
            },
            {
                id: 2,
                name: 'Ashwagandha',
                scientific_name: 'Withania somnifera',
                description: 'Powerful adaptogenic herb for stress and vitality',
                uses: 'Stress relief, energy boost, immune support, sleep improvement',
                diseases_treated: 'Anxiety, Insomnia, Fatigue, Low Immunity, Arthritis',
                properties: 'Adaptogenic, Anti-inflammatory, Immunomodulatory',
                dosage: '300-600mg daily',
                contraindications: 'Pregnancy, hyperthyroidism, autoimmune diseases'
            },
            {
                id: 3,
                name: 'Turmeric',
                scientific_name: 'Curcuma longa',
                description: 'Golden spice with powerful anti-inflammatory properties',
                uses: 'Inflammation, pain relief, skin health, digestive support',
                diseases_treated: 'Arthritis, Digestive Issues, Skin Problems, Diabetes',
                properties: 'Anti-inflammatory, Antioxidant, Antimicrobial',
                dosage: '1-3g daily',
                contraindications: 'Gallstones, bleeding disorders'
            }
        ];

        return mockPlants.filter(plant =>
            plant.name.toLowerCase().includes(query.toLowerCase()) ||
            plant.scientific_name.toLowerCase().includes(query.toLowerCase()) ||
            plant.uses.toLowerCase().includes(query.toLowerCase()) ||
            plant.diseases_treated.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Search remedies (mock data for browser)
    async searchRemedies(query) {
        const mockRemedies = [
            {
                id: 1,
                name: 'Tulsi Tea for Fever',
                description: 'Traditional remedy for reducing fever naturally',
                ingredients: 'Fresh Tulsi leaves, water, honey',
                preparation: 'Boil 10-15 tulsi leaves in water for 5 minutes, strain and add honey',
                dosage: '2-3 cups daily',
                benefits: 'Reduces fever, boosts immunity, relieves congestion',
                category: 'Fever Relief',
                plant_ids: '1'
            },
            {
                id: 2,
                name: 'Ashwagandha Milk',
                description: 'Traditional preparation for stress relief and energy',
                ingredients: 'Ashwagandha powder, milk, honey',
                preparation: 'Mix 1 tsp ashwagandha powder in warm milk, add honey',
                dosage: '1 cup before bedtime',
                benefits: 'Reduces stress, improves sleep, boosts energy',
                category: 'Stress Relief',
                plant_ids: '2'
            }
        ];

        return mockRemedies.filter(remedy =>
            remedy.name.toLowerCase().includes(query.toLowerCase()) ||
            remedy.description.toLowerCase().includes(query.toLowerCase()) ||
            remedy.benefits.toLowerCase().includes(query.toLowerCase()) ||
            remedy.category.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Search symptoms (mock data for browser)
    async searchSymptoms(query) {
        const mockSymptoms = [
            {
                id: 1,
                name: 'Fever',
                description: 'Elevated body temperature above normal range',
                category: 'General',
                severity_levels: 'Mild (37.5-38°C), Moderate (38-39°C), High (39-40°C), Severe (>40°C)',
                related_diseases: 'Common Cold, Flu, Infections, Inflammatory Conditions'
            },
            {
                id: 2,
                name: 'Headache',
                description: 'Pain or discomfort in the head or neck area',
                category: 'Neurological',
                severity_levels: 'Mild, Moderate, Severe, Migraine',
                related_diseases: 'Tension Headache, Migraine, Sinusitis, Hypertension'
            },
            {
                id: 3,
                name: 'Cough',
                description: 'Reflex action to clear airways of mucus or irritants',
                category: 'Respiratory',
                severity_levels: 'Dry, Productive, Chronic, Acute',
                related_diseases: 'Common Cold, Bronchitis, Asthma, Allergies'
            }
        ];

        return mockSymptoms.filter(symptom =>
            symptom.name.toLowerCase().includes(query.toLowerCase()) ||
            symptom.description.toLowerCase().includes(query.toLowerCase()) ||
            symptom.category.toLowerCase().includes(query.toLowerCase()) ||
            symptom.related_diseases.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Get nearby Ayurvedic stores (mock data for browser)
    async getAyurvedicStores(latitude, longitude, radius = 10) {
        const mockStores = [
            {
                id: 1,
                name: 'Ayurvedic Wellness Center',
                address: '123 Wellness Street, Health City, HC 12345',
                phone: '+1-555-0123',
                latitude: 37.7749,
                longitude: -122.4194,
                rating: 4.5,
                specialties: 'Herbal Medicine, Panchakarma, Yoga',
                hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
                website: 'https://ayurvedicwellness.com'
            },
            {
                id: 2,
                name: 'Nature\'s Pharmacy',
                address: '456 Green Avenue, Natural City, NC 67890',
                phone: '+1-555-0456',
                latitude: 37.7849,
                longitude: -122.4094,
                rating: 4.2,
                specialties: 'Organic Herbs, Supplements, Consultation',
                hours: 'Mon-Sat: 8AM-8PM, Sun: 10AM-6PM',
                website: 'https://naturespharmacy.com'
            }
        ];

        // Calculate distances (simplified)
        return mockStores.map(store => ({
            ...store,
            distance: `${Math.floor(Math.random() * 10) + 1} km`
        }));
    }

    // Create session
    async createSession(userId = null) {
        this.sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        return this.sessionId;
    }

    // Update session activity
    async updateSessionActivity(sessionId) {
        // In browser mode, we don't need to do anything special
        console.log('Session activity updated');
    }

    // Close service
    async close() {
        this.isConnected = false;
        console.log('MCP Service closed');
    }
}
