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

    //found expenses to update
    const expensesFoundToUpdate = await expensesFound(
      req.params.idExpenseCategory
    );
    console.log(expensesFoundToUpdate);
    //updating
    updateExpenseFound(
      expensesFoundToUpdate,
      req.params.idUser,
      req.body.title,
      req.body.limit
    );

    res.status(201).json({ error: false, data: expense });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const expensesFound = async (idCategoryExpense) => {
  try {
    //training find
    const searchExpenses = await User.aggregate([
      {
        $match: {
          'expenses.category._id': idCategoryExpense,
        },
      },
      {
        $unwind: '$expenses',
      },
      {
        $match: {
          'expenses.category._id': idCategoryExpense,
        },
      },
      {
        $project: {
          _idExpense: '$expenses._id',
          value: '$expenses.value',
          category: '$expenses.category',
          date: '$expenses.date',
        },
      },
    ]);
    if (searchExpenses) {
      return searchExpenses;
    }
  } catch (error) {
    console.log(error);
  }
};
const updateExpenseFound = async (
  expensesFound,
  idUser,
  newTitle,
  NewLimit
) => {
  try {
    expensesFound.forEach(async (item) => {
      const updateAnExense = await User.updateOne(
        {
          _id: idUser,
          'expenses._id': mongoose.Types.ObjectId(item._idExpense),
        },
        {
          $set: {
            'expenses.$.category.title': newTitle,
            'expenses.$.category.limit': NewLimit,
          },
        }
      );
    });
  } catch (error) {
    console.log(error);
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
