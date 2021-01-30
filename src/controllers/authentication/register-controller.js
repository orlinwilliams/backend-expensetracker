const bcryptjs = require('bcryptjs');
const User = require('../../models/user-model');

const register = async (req, res) => {  
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).json({ error: true, message:'mail already exists'});

  const salt = await bcryptjs.genSalt(10);
  const password = await bcryptjs.hash(req.body.password, salt);
  const user = new User({
    email: req.body.email,
    password,
  });
  console.log(user);
  try {
    const saveUser = await user.save();
    console.log(saveUser);
    res
      .status(201)
      .json({
        error: false,
        data: { _id: saveUser._id, email: saveUser.email },
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error:true, message:'error register' });
  }
};

module.exports = register;
