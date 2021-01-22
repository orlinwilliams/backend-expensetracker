const jwt = require('jsonwebtoken');
const config = require('../config')

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader.split(' ')[1]
  if(!token) return res.status(401).json({error:'Access denegate'});

  try {
    const verified = jwt.verify(token, config.secret);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({error:'Invalid token'});
  }
}

module.exports = verifyToken;