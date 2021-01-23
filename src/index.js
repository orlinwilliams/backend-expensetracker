require('./database');
const app = require('./app');
const registerRoutes = require('./routes/authentication/register-routes'); 
const loginRoutes = require('./routes/authentication/login-routes');
const categoriesIncomeRoutes = require('./routes/categories/income-routes');
const categoriesExpenseRoutes = require('./routes/categories/expense-routes');
const dashboardIncomeRoutes = require('./routes/dashboard/income-routes')
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);

app.use('/categories/income', categoriesIncomeRoutes);
app.use('/categories/expense', categoriesExpenseRoutes);

app.use('/dashboard/income', dashboardIncomeRoutes);


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log('server online', app.get('port'));