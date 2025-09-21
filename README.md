# SwasthAI - Intelligent Ayurvedic Assistant

A modern React application powered by Gemini AI and MCP protocol for Ayurvedic medicine consultation and plant identification.

## Features

- 🤖 **Gemini AI Integration**: Advanced AI-powered responses for Ayurvedic consultations
- 🌿 **Plant Identification**: Upload images to identify medicinal plants
- 💾 **MCP Protocol**: Model Context Protocol for database operations
- 🗄️ **SQLite Database**: Local database for storing Ayurvedic knowledge
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- ⚡ **Real-time Chat**: Interactive chat interface with AI responses

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Gemini API key

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd swasthai-project
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
DATABASE_URL=./database/ayurvedic.db
MCP_SERVER_URL=http://localhost:3001
MCP_SERVER_TOKEN=your_mcp_token_here
NODE_ENV=development
PORT=3000
```

4. Initialize the database:

```bash
npm run init-db
```

## Usage

### Development Mode

Start the React application:

```bash
npm start
```

Start the MCP server (in a separate terminal):

```bash
npm run mcp-server
```

### Production Build

```bash
npm run build
```

## API Integration

### Gemini AI

- **Service**: `src/services/GeminiService.js`
- **Features**: Text analysis, plant identification, Ayurvedic recommendations
- **Model**: Gemini 1.5 Flash

### MCP Protocol

- **Service**: `src/services/MCPService.js`
- **Server**: `mcp-server/index.js`
- **Features**: Database operations, resource management, tool calls

### Database Schema

The SQLite database includes the following tables:

- `plants`: Ayurvedic plants and their properties
- `remedies`: Traditional remedies and preparations
- `symptoms`: Symptoms and their treatments
- `chat_history`: User conversations
- `user_sessions`: User session management
- `ayurvedic_stores`: Nearby Ayurvedic stores

## Project Structure

```
src/
├── components/          # React components
│   ├── ChatInterface.js
│   ├── Header.js
│   ├── Hero.js
│   ├── Footer.js
│   └── ...
├── services/           # API services
│   ├── GeminiService.js
│   └── MCPService.js
└── ...

database/
├── init.js            # Database initialization
└── ayurvedic.db       # SQLite database file

mcp-server/
└── index.js           # MCP protocol server
```

## Features Overview

### Chat Interface

- Real-time AI responses using Gemini
- Image upload for plant identification
- Structured responses with remedies, videos, and store locations
- Chat history persistence

### Plant Database

- 100+ Ayurvedic plants with detailed information
- Search and filter functionality
- Plant identification from images
- Medicinal uses and properties

### Modern UI

- Dark theme with glassmorphism effects
- Responsive design for all devices
- Smooth animations with Framer Motion
- Modern color scheme with cyan, blue, purple accents

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.

---

**Note**: Make sure to keep your Gemini API key secure and never commit it to version control.
