require('./database');
const app = require('./app');
const loginRoutes = require('./routes/authentication/login-routes')

app.use('/login',loginRoutes);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log('server online', app.get('port'));