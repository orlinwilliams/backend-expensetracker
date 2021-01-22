const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const User = require('../../models/user-model');

const login = async (req, res) => {
  const user = await User.findOne(
    { email: req.body.email },
    { email: true, password: true }
  );

  if (!user) return res.status(400).json({ error: 'email not found' });

  const comparePassword = await bcryptjs.compare(
    req.body.password,
    user.password
  );

  if (!comparePassword)
    return res.status(400).json({ error: 'wrong password' });

  const token = generateAccessToken({ user });

  if (token) res.json({ token, data: { email: user.email, _id: user._id } });
};
const generateAccessToken = (user) => {
  return jwt.sign(user, config.secret, { expiresIn: '1d' });
};
module.exports = login;
