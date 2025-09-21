# SwasthAI Troubleshooting Guide

## Chat Interface Not Responding - Debug Steps

### 1. Check Browser Console

Open your browser's Developer Tools (F12) and check the Console tab for any error messages.

### 2. Test the Services

I've added a "Test" button in the chat interface. Click it to see if the services are initialized properly.

### 3. Common Issues and Solutions

#### Issue: Services Not Initializing

**Symptoms**: No response when typing messages
**Solution**: Check browser console for initialization errors

#### Issue: Gemini API Not Working

**Symptoms**: Fallback responses instead of AI responses
**Solution**:

1. Verify API key is correct in `src/config.js`
2. Check if you have internet connection
3. Verify Gemini API quota

#### Issue: CORS Errors

**Symptoms**: Network errors in console
**Solution**: The Gemini API should work directly from browser

### 4. Debug Information

The application now logs detailed information to the console:

- Service initialization status
- Message processing steps
- API response details

### 5. Manual Testing Steps

1. **Open the application**: <http://localhost:3000>
2. **Click "Start Your Journey"** to open chat interface
3. **Click the "Test" button** to see service status
4. **Type a message** like "I have a fever" and press Send
5. **Check browser console** for detailed logs

### 6. Expected Behavior

When working correctly, you should see:

- Console logs showing service initialization
- AI responses with structured data (remedies, plants, etc.)
- Chat history persistence
- Modern UI with animations

### 7. Fallback Mode

If Gemini API fails, the app will use fallback responses with basic Ayurvedic information.

### 8. Quick Fixes

If the chat still doesn't work:

1. Refresh the page
2. Clear browser cache
3. Check if all services are initialized in console
4. Try the test button first

## Contact Support

If issues persist, check the browser console for specific error messages and share them for further assistance.
