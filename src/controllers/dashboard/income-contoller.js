const mongoose = require('mongoose');
const User = require('../../models/user-model');
const dashboard = {};

dashboard.createIncome = async (req, res) => {
  const { value, category, date } = req.body;
  if (!value || !category || !date)
    return res.status(400).json({ error: 'not data' });

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

module.exports = dashboard;
