const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TelegramTelegram_BOT_Token  || '7743266180:AAFiUgLT7X58omTiFOOoVPQQAthsiD_BYX8;
const chatId = process.env.CHAT_Id  || '@goodbuy_amazon;
const amazonTag = process.env.AMAZON_TAG || 'sheiko0-20';

const bot = new TelegramBot(token);

const products = [
  {
    title: "Facial Cleansing Brush - Deep Pore Cleanser",
    link: "https://www.amazon.com/dp/B07ZVKTP53"
  },
  {
    title: "IPL Hair Removal for Women and Men",
    link: "https://www.amazon.com/dp/B08TH8R1P5"
  },
  {
    title: "Electric Blackhead Remover Vacuum",
    link: "https://www.amazon.com/dp/B07X28PHW4"
  }
];

if (products.length === 0) throw new Error("No products available");
const affiliateLink = `${product.link}?tag=${amazonTag}`;
const message = `**${product.title}**\n\nCheck it out on Amazon:\n${affiliateLink}`;

bot.sendMessage(chatId, message, { parse_mode: "Markdown" })
  .then(() => console.log("Product sent!"))
  .catch(console.error);
