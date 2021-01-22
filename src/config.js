require('dotenv').config();

module.exports = {
  mongodbURL: process.env.MONGODB_URL,
  secret: process.env.TOKEN_SECRET 
}
