require('./database');
const app = require('./app');
const registerRoutes = require('./routes/authentication/register-routes'); 

app.use('/register', registerRoutes);


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log('server online', app.get('port'));