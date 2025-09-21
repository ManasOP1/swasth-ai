import { config } from '../config';

// Browser-compatible Gemini Service
class GeminiService {
    constructor() {
        this.apiKey = config.GEMINI_API_KEY;
        this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
    }

    async generateAyurvedicResponse(userMessage, imageData = null) {
        try {
            const prompt = this.buildAyurvedicPrompt(userMessage);

            const requestBody = {
                contents: [{
                    parts: [
                        { text: prompt }
                    ]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1000,
                },
                safetySettings: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                ],
            };

            if (imageData) {
                requestBody.contents[0].parts.push({
                    inlineData: {
                        mimeType: "image/jpeg",
                        data: imageData
                    }
                });
            }

            const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const text = data.candidates[0].content.parts[0].text;

            return this.parseAyurvedicResponse(text, userMessage);
        } catch (error) {
            console.error('Error generating Gemini response:', error);
            return this.getFallbackResponse(userMessage);
        }
    }

    buildAyurvedicPrompt(userMessage) {
        return `
You are SwasthAI, an expert Ayurvedic AI assistant. Provide comprehensive, accurate, and helpful responses about Ayurvedic medicine, plant identification, and wellness.

User Query: "${userMessage}"

Please provide a structured response in the following JSON format:
{
    "response": "Main response text",
    "remedies": [
        {
            "name": "Remedy Name",
            "description": "How to prepare/use",
            "benefits": "Health benefits",
            "ingredients": "Required ingredients",
            "dosage": "Recommended dosage",
            "precautions": "Safety precautions"
        }
    ],
    "plants": [
        {
            "name": "Plant Name",
            "scientific_name": "Scientific name",
            "uses": "Medicinal uses",
            "properties": "Active properties"
        }
    ],
    "youtube_video": {
        "title": "Video title",
        "url": "YouTube URL",
        "description": "Video description"
    },
    "map_locations": [
        {
            "name": "Store Name",
            "address": "Full address",
            "phone": "Phone number",
            "distance": "Distance from user",
            "rating": "Store rating",
            "coordinates": "lat,lng"
        }
    ],
    "additional_info": "Any additional helpful information"
}

Guidelines:
1. Focus on traditional Ayurvedic knowledge
2. Always mention safety precautions
3. Suggest consulting healthcare professionals for serious conditions
4. Provide practical, actionable advice
5. Include both traditional and modern perspectives
6. Be culturally sensitive and respectful
7. If identifying plants from images, provide detailed botanical information
8. For symptoms, suggest multiple treatment options
9. Include lifestyle and dietary recommendations
10. Always emphasize the importance of professional medical advice for serious conditions

Respond only with valid JSON format.
        `;
    }

    parseAyurvedicResponse(text, userMessage) {
        try {
            // Extract JSON from the response
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const parsedResponse = JSON.parse(jsonMatch[0]);
                return {
                    type: 'ai',
                    content: parsedResponse.response || text,
                    remedies: parsedResponse.remedies || [],
                    plants: parsedResponse.plants || [],
                    youtubeVideo: parsedResponse.youtube_video,
                    mapLocations: parsedResponse.map_locations || [],
                    additionalInfo: parsedResponse.additional_info,
                    timestamp: new Date()
                };
            }
        } catch (error) {
            console.error('Error parsing Gemini response:', error);
        }

        // Fallback to simple text response
        return {
            type: 'ai',
            content: text,
            remedies: [],
            plants: [],
            youtubeVideo: null,
            mapLocations: [],
            additionalInfo: null,
            timestamp: new Date()
        };
    }

    getFallbackResponse(userMessage) {
        const message = userMessage.toLowerCase();

        if (message.includes('fever')) {
            return {
                type: 'ai',
                content: 'For fever relief, try these Ayurvedic remedies:',
                remedies: [
                    {
                        name: 'Tulsi Tea',
                        description: 'Boil 10-15 fresh tulsi leaves in water for 5 minutes',
                        benefits: 'Reduces fever, boosts immunity',
                        ingredients: 'Fresh tulsi leaves, water, honey',
                        dosage: '2-3 cups daily',
                        precautions: 'Avoid during pregnancy'
                    }
                ],
                plants: [],
                youtubeVideo: null,
                mapLocations: [],
                additionalInfo: 'Consult a healthcare professional if fever persists for more than 3 days.',
                timestamp: new Date()
            };
        }

        return {
            type: 'ai',
            content: 'I apologize, but I\'m having trouble processing your request right now. Please try again or consult with a qualified Ayurvedic practitioner for personalized advice.',
            remedies: [],
            plants: [],
            youtubeVideo: null,
            mapLocations: [],
            additionalInfo: null,
            timestamp: new Date()
        };
    }

    async analyzePlantImage(imageData) {
        try {
            const prompt = `
Analyze this plant image and provide detailed Ayurvedic information in JSON format:
{
    "plant_name": "Common name",
    "scientific_name": "Scientific name",
    "identification_confidence": "High/Medium/Low",
    "ayurvedic_properties": ["Property1", "Property2"],
    "medicinal_uses": ["Use1", "Use2"],
    "active_compounds": ["Compound1", "Compound2"],
    "preparation_methods": ["Method1", "Method2"],
    "dosage": "Recommended dosage",
    "contraindications": ["Contraindication1", "Contraindication2"],
    "safety_notes": "Important safety information"
}

Focus on traditional Ayurvedic knowledge and provide accurate botanical identification.
            `;

            const requestBody = {
                contents: [{
                    parts: [
                        { text: prompt },
                        {
                            inlineData: {
                                mimeType: "image/jpeg",
                                data: imageData
                            }
                        }
                    ]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1000,
                },
                safetySettings: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
                ],
            };

            const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Gemini API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
            }

            const data = await response.json();
            const text = data.candidates[0].content.parts[0].text;

            // Parse JSON response
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                return JSON.parse(jsonMatch[0]);
            }

            return {
                plant_name: "Unknown Plant",
                scientific_name: "Unknown",
                identification_confidence: "Low",
                ayurvedic_properties: [],
                medicinal_uses: [],
                active_compounds: [],
                preparation_methods: [],
                dosage: "Consult Ayurvedic practitioner",
                contraindications: [],
                safety_notes: "Please consult a qualified practitioner before use"
            };
        } catch (error) {
            console.error('Error analyzing plant image:', error);
            return {
                plant_name: "Analysis Failed",
                scientific_name: "Unknown",
                identification_confidence: "Low",
                ayurvedic_properties: [],
                medicinal_uses: [],
                active_compounds: [],
                preparation_methods: [],
                dosage: "Consult Ayurvedic practitioner",
                contraindications: [],
                safety_notes: "Unable to analyze image. Please consult a qualified practitioner."
            };
        }
    }
}

export default GeminiService;