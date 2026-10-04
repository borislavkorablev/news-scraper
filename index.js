require('dotenv').config();


console.log('News scraper starting...');
console.log('Environment:', process.env.NODE_ENV);

console.log('API key loaded:', !!process.env.ANTHROPIC_API_KEY);