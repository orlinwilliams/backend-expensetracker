const express = require('express');
const path = require('path');
require('./database');
const app = require('./app');

const registerRoutes = require('./routes/authentication/register-routes'); 
const loginRoutes = require('./routes/authentication/login-routes');
const categoriesIncomeRoutes = require('./routes/categories/income-routes');
const categoriesExpenseRoutes = require('./routes/categories/expense-routes');
const dashboardIncomeRoutes = require('./routes/dashboard/income-routes');
const dashboardExpenseRoutes = require('./routes/dashboard/expense-routes');

app.use(express.static( path.join(__dirname + '/public')))
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);

app.use('/categories/income', categoriesIncomeRoutes);
app.use('/categories/expense', categoriesExpenseRoutes);

app.use('/dashboard/income', dashboardIncomeRoutes);
app.use('/dashboard/expense', dashboardExpenseRoutes);
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')) );


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log('server online', app.get('port'));