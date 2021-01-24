const mongoose = require('mongoose');
const User = require('../../models/user-model');
const dashboard = {};

dashboard.createIncome = async (req, res) => {
  const { value, category, date } = req.body;
  if (!value || !category || !date)
    return res.status(400).json({ error: 'not data' });
  if(!validateFieldisObject(date))
    return res.status(400).json({ error: 'not date' });
  try {
    const createIncome = await User.updateOne(
      { _id: req.params.idUser },
      {
        $push: {
          income: req.body,
        },
      }
    );
    res.status(201).json({ error: false, data: createIncome });
  } catch (error) {
    res.status(400).json({ error: true });
  }
};

dashboard.getIncome = async (req, res) => {
  try {
    const income = await User.findOne(
      { _id: req.params.idUser },
      { income: true }
    );
    res.status(201).json({ error: false, data: income });
  } catch (error) {
    res.status(400).json({ error });
  }
};

dashboard.getAnIncome = async (req, res) => {
  try {
    const income = await User.findOne(
      {
        _id: req.params.idUser,
        'income._id': mongoose.Types.ObjectId(req.params.idIncome),
      },
      {
        'income.$': true,
      }
    );
    res.status(201).json({ error: false, data: income.income[0] });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: true });
  }
};

dashboard.updateAnIncome = async (req, res) => {
  const { value, category } = req.body;

  if (!value || !category)
    return res.status(400).json({ error: 'not data' });  

  try {
    const income = await User.updateOne(
      {
        _id: req.params.idUser,
        'income._id': mongoose.Types.ObjectId(req.params.idIncome),
      },
      {
        $set: {
          'income.$.value': value,
          'income.$.category': category,          
        },
      }
    );
    res.status(201).json({ error: false, data: income });
  } catch (error) {
    res.status(400).json({ error });
  }
};

dashboard.deleteAnIncome = async (req, res) => {
  try {
    const income = await User.updateOne(
      {
        _id: req.params.idUser,
      },
      {
        $pull: {
          income: {
            _id: mongoose.Types.ObjectId(req.params.idIncome),
          },
        },
      }
    );
    res.status(201).json({ error: false, data: income });
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
