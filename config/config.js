// config/config.js
// Non-sensitive configuration — safe to commit to git.
// Things that might change between environments
// but aren't secrets.

module.exports = {
    // How many news items to collect per run
    maxItemsPerSource: 50,

    // How many hours back to look for news
    lookbackHours: 24,

    // How many items to show in dashboard
    dashboardItems: 10,

    // Minimum relevance score to pass filter (0-10)
    minRelevanceScore: 6,

    // Scheduler — when to run daily (6am)
    cronSchedule: '0 6 * * *',

    // Supported languages for translation
    supportedLanguages: ['ru', 'en', 'uk', 'de', 'fr'],

    // Target language for output
    targetLanguage: 'ru'
};