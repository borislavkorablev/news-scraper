require('dotenv').config();

const config = require('./config/config.js');

console.log('News scraper starting...');
console.log('Environment:', process.env.NODE_ENV);
console.log('API key loaded:', !!process.env.ANTHROPIC_API_KEY);
console.log('Max items per source:', config.maxItemsPerSource);
console.log('Target language:', config.targetLanguage);