require('./database');
const app = require('./app');
const registerRoutes = require('./routes/authentication/register-routes'); 
const loginRoutes = require('./routes/authentication/login-routes');
const categoriesRoutes = require('./routes/categories/income-routes')
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categoriesRoutes);


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log('server online', app.get('port'));