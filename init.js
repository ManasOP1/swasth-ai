const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Database file path
const dbPath = path.join(__dirname, 'ayurvedic.db');

// Create database connection
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});

// Create tables
const createTables = () => {
    // Plants table
    db.run(`
        CREATE TABLE IF NOT EXISTS plants (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            scientific_name TEXT,
            description TEXT,
            uses TEXT,
            diseases_treated TEXT,
            image_url TEXT,
            properties TEXT,
            dosage TEXT,
            contraindications TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Remedies table
    db.run(`
        CREATE TABLE IF NOT EXISTS remedies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            ingredients TEXT,
            preparation TEXT,
            dosage TEXT,
            benefits TEXT,
            contraindications TEXT,
            category TEXT,
            plant_ids TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Symptoms table
    db.run(`
        CREATE TABLE IF NOT EXISTS symptoms (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            category TEXT,
            severity_levels TEXT,
            related_diseases TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Chat history table
    db.run(`
        CREATE TABLE IF NOT EXISTS chat_history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_message TEXT NOT NULL,
            ai_response TEXT,
            user_id TEXT,
            session_id TEXT,
            message_type TEXT DEFAULT 'text',
            image_url TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // User sessions table
    db.run(`
        CREATE TABLE IF NOT EXISTS user_sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT UNIQUE NOT NULL,
            user_id TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            last_activity DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Ayurvedic stores table
    db.run(`
        CREATE TABLE IF NOT EXISTS ayurvedic_stores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            address TEXT,
            phone TEXT,
            email TEXT,
            latitude REAL,
            longitude REAL,
            rating REAL,
            specialties TEXT,
            hours TEXT,
            website TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    console.log('Database tables created successfully');
};

// Insert sample data
const insertSampleData = () => {
    // Sample plants
    const plants = [
        {
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

    plants.forEach(plant => {
        db.run(`
            INSERT OR IGNORE INTO plants (name, scientific_name, description, uses, diseases_treated, properties, dosage, contraindications)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `, [plant.name, plant.scientific_name, plant.description, plant.uses, plant.diseases_treated, plant.properties, plant.dosage, plant.contraindications]);
    });

    // Sample remedies
    const remedies = [
        {
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

    remedies.forEach(remedy => {
        db.run(`
            INSERT OR IGNORE INTO remedies (name, description, ingredients, preparation, dosage, benefits, category, plant_ids)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `, [remedy.name, remedy.description, remedy.ingredients, remedy.preparation, remedy.dosage, remedy.benefits, remedy.category, remedy.plant_ids]);
    });

    // Sample symptoms
    const symptoms = [
        {
            name: 'Fever',
            description: 'Elevated body temperature above normal range',
            category: 'General',
            severity_levels: 'Mild (37.5-38°C), Moderate (38-39°C), High (39-40°C), Severe (>40°C)',
            related_diseases: 'Common Cold, Flu, Infections, Inflammatory Conditions'
        },
        {
            name: 'Headache',
            description: 'Pain or discomfort in the head or neck area',
            category: 'Neurological',
            severity_levels: 'Mild, Moderate, Severe, Migraine',
            related_diseases: 'Tension Headache, Migraine, Sinusitis, Hypertension'
        },
        {
            name: 'Cough',
            description: 'Reflex action to clear airways of mucus or irritants',
            category: 'Respiratory',
            severity_levels: 'Dry, Productive, Chronic, Acute',
            related_diseases: 'Common Cold, Bronchitis, Asthma, Allergies'
        }
    ];

    symptoms.forEach(symptom => {
        db.run(`
            INSERT OR IGNORE INTO symptoms (name, description, category, severity_levels, related_diseases)
            VALUES (?, ?, ?, ?, ?)
        `, [symptom.name, symptom.description, symptom.category, symptom.severity_levels, symptom.related_diseases]);
    });

    console.log('Sample data inserted successfully');
};

// Initialize database
const initializeDatabase = () => {
    createTables();
    setTimeout(() => {
        insertSampleData();
    }, 1000);
};

// Close database connection
const closeDatabase = () => {
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err.message);
        } else {
            console.log('Database connection closed');
        }
    });
};

module.exports = {
    db,
    initializeDatabase,
    closeDatabase
};

// Run initialization if this file is executed directly
if (require.main === module) {
    initializeDatabase();
}
