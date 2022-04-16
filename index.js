const express = require('express');
const controllerUser = require('./controllers/user');
const controllerLogin = require('./controllers/login');
const userValidations = require('./middlewares/validateUser');
const loginValidations = require('./middlewares/validateLogin');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userValidations.validateName, 
userValidations.validateEmail, userValidations.validadePassword, 
userValidations.findUser, controllerUser);

app.post('/login', loginValidations.validateEmail, 
loginValidations.validadePassword, controllerLogin.login);
