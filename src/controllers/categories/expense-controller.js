const User = require('../../models/user-model');
const mongoose = require('mongoose');
const categories = {};

categories.createExpense = async (req, res) => {
  try {
    const createCategory = await User.updateOne(
      { _id: req.params.idUser },
      {
        $push: {
          expenseCategories: {
            title: req.body.title,
            limit: req.body.limit,
          },
        },
      }
    );
    res.status(201).json({ error: false, data: createCategory });
  } catch (error) {
    res.status(400).json({ error });
  }
};

categories.getExpenses = async (req, res) => {
  try {
    const expenses = await User.findOne(
      { _id: req.params.idUser },
      { expenseCategories: true }
    );
    res.status(201).json({ error: false, data: expenses });
  } catch (error) {
    res.status(400).json({ error });
  }
};

categories.getAnExpense = async (req, res) => {
  try {
    const expense = await User.findOne(
      {
        _id: req.params.idUser,
        'expenseCategories._id': mongoose.Types.ObjectId(
          req.params.idExpenseCategory
        ),
      },
      {
        'expenseCategories.$': true,
      }
    );
    res.status(201).json({ error: false, data: expense.expenseCategories[0] });
  } catch (error) {
    res.status(400).json({ error });
  }
};

categories.updateAnExpense = async (req, res) => {
  try {
    const expense = await User.updateOne(
      {
        _id: req.params.idUser,
        'expenseCategories._id': mongoose.Types.ObjectId(
          req.params.idExpenseCategory
        ),
      },
      {
        $set: {
          'expenseCategories.$.title': req.body.title,
          'expenseCategories.$.limit': req.body.limit,
        },
      }
    );
    res.status(201).json({ error: false, data: expense });
  } catch (error) {
    res.status(400).json({ error });
  }
};

categories.deleteAnExpense = async (req, res) => {
  try {
    const expense = await User.updateOne(
      {
        _id: req.params.idUser,
      },
      {
        $pull: {
          expenseCategories: {
            _id: mongoose.Types.ObjectId(req.params.idExpenseCategory),
          },
        },
      }
    );
    res.status(201).json({ error: false, data: expense });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = categories;
