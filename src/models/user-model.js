const mongoose = require("mongoose");

const categoryExpenseSchema = mongoose.Schema({
  title:{type:String,require:true},
  limit:{type:Number,require:true},
})
const categoryIncomeSchema = mongoose.Schema({
  title:{type:String,require:true},
})
const expenseSchema = mongoose.Schema({
  value:{type:Number,require:true},
  category:[categoryExpenseSchema],
  date:{}
  
})
const incomeSchema = mongoose.Schema({
  value:{type:Number,require:true},
  category:String,
  date:{}
})

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    expenses:[expenseSchema],
    income:[incomeSchema],
    expenseCategories:[categoryExpenseSchema],
    IncomeCategories:[categoryIncomeSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
