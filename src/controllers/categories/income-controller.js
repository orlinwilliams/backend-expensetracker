const User = require('../../models/user-model');
const mongoose = require('mongoose');
const categories = {};

categories.createIncome = async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      { _id: req.params.idUser },
      {
        $push: {
          incomeCategories: {
            title: req.body.title,
          },
        },
      }
    );
    res.status(201).json({ error: false, data: updateUser });
  } catch (error) {
    res.status(400).json({ error });
  }
};

categories.getIncome = async (req, res) => {
  try {
    const income = await User.findOne(
      { _id: req.params.idUser },
      { incomeCategories: true }
    );
    res.status(201).json({ error: false, data: income });
  } catch (error) {
    res.status(400).json({ error });
  }
};

categories.getAnIncome = async (req, res) => {
  try {
    const income = await User.findOne(
      {
        _id: req.params.idUser,
        'incomeCategories._id': mongoose.Types.ObjectId(
          req.params.idIncomeCategory
        ),
      },
      {
        'incomeCategories.$': true,
      }
    );
    res.status(201).json({ error: false, data: income.incomeCategories[0] });
  } catch (error) {
    res.status(400).json({ error });
  }
};

categories.updateAnIncome = async (req, res) => {
  try {
    const income = await User.updateOne(
      {
        _id: req.params.idUser,
        'incomeCategories._id': mongoose.Types.ObjectId(
          req.params.idIncomeCategory
        ),
      },
      { $set: { 'incomeCategories.$.title': req.body.title } }
    );
    res.status(201).json({ error: false, data: income });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: true });
  }
};

categories.deleteAnIncome = async (req, res) => {
  try {
    const income = await User.updateOne(
      {
        _id: req.params.idUser,
      },
      {
        $pull: {
          incomeCategories: {
            _id: mongoose.Types.ObjectId(req.params.idIncomeCategory),
          },
        },
      }
    );
    res.status(201).json({ error: false, data: income });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = categories;
