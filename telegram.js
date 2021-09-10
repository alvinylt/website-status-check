const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = ''; // Telegram API token here
const chatId = ''; // Telegram chatId here
const bot = new TelegramBot(token, {polling: true});

var interval = 720 * 60 * 1000; // Choose the interval of checking (Example: 720 minutes)
setInterval(function() {
  request('http://alvinylt.net', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    bot.sendMessage(chatId, "The website is working well.")
  }
  else {
    bot.sendMessage(chatId, "Warning: Something is wrong with the website.")
  }
  })
}, interval);
