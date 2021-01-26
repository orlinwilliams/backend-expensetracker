const mongoose = require('mongoose');
const User = require('../../models/user-model');
const dashboard = {};

dashboard.createExpense = async (req, res) => {
  const { value, category, date } = req.body;

  if (!value || !category || !date)
    return res.status(400).json({ error: 'not data' });
  if(!validateFieldisObject(category))
    return res.status(400).json({ error: 'not category' });
  if(!validateFieldisObject(date))
    return res.status(400).json({ error: 'not date' });

  try {
    const createExpense = await User.updateOne(
      { _id: req.params.idUser },
      {
        $push: {
          expenses: req.body,
        },
      }
    );
    res.status(201).json({ error: false, data: createExpense });
  } catch (error) {
    res.status(400).json({ error: true });
  }
};

dashboard.getExpenses = async (req, res) => {
  try {
    const expenses = await User.aggregate([
      {
        $match: {
          'expenses.date.month': parseInt(req.params.month),
          'expenses.date.year': parseInt(req.params.year),
        },
      },
      {
        $unwind: '$expenses',
      },
      {
        $match: {
          'expenses.date.month': parseInt(req.params.month),
          'expenses.date.year': parseInt(req.params.year),
        },
      },
      {
        $project: {
          value: '$expenses.value',
          category: '$expenses.category',
          date: '$expenses.date',
        },
      },
    ]);
    res.status(201).json({ error: false, data: expenses });
  } catch (error) {
    res.status(400).json({ error });
  }
};

dashboard.getAnExpense = async (req, res) => {
  try {
    const expense = await User.findOne(
      {
        _id: req.params.idUser,
        'expenses._id': mongoose.Types.ObjectId(req.params.idExpense),
      },
      {
        'expenses.$': true,
      }
    );
    res.status(201).json({ error: false, data: expense.expenses[0] });
  } catch (error) {    
    res.status(400).json({ error: true });
  }
};

dashboard.updateAnExpense = async (req, res) => {
  const { value, category } = req.body;

  if (!value || !category)
    return res.status(400).json({ error: 'not data' });
  if(!validateFieldisObject(category))
    return res.status(400).json({ error: 'not category' });
  
  try {
    const expense = await User.updateOne(
      {
        _id: req.params.idUser,
        'expenses._id': mongoose.Types.ObjectId(req.params.idExpense),
      },
      {
        $set: {
          'expenses.$.value': value,
          'expenses.$.category': category      
        },
      }
    );
    res.status(201).json({ error: false, data: expense });
  } catch (error) {
    res.status(400).json({ error });
  }
};

dashboard.deleteAnExpense = async (req, res) => {
  try {
    const expense = await User.updateOne(
      {
        _id: req.params.idUser,
      },
      {
        $pull: {
          expenses: {
            _id: mongoose.Types.ObjectId(req.params.idExpense),
          },
        },
      }
    );
    res.status(201).json({ error: false, data: expense });
  } catch (error) {
    res.status(400).json({ error: true });
  }
};

const validateFieldisObject = (field) => {
  if(typeof field != 'object') return false;
  if(Object.keys(field).length === 0) return false;
  return true;
}

module.exports = dashboard;
