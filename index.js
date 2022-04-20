const express = require('express');
const controllerUser = require('./controllers/user');
const controllerLogin = require('./controllers/login');
const controllerCategories = require('./controllers/categories');
const controllerPosts = require('./controllers/posts');
const userValidations = require('./middlewares/validateUser');
const loginValidations = require('./middlewares/validateLogin');
const categoryValidation = require('./middlewares/validateCategory');
const postValidation = require('./middlewares/validatePost');
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', userValidations.validateName, 
userValidations.validateEmail, userValidations.validadePassword, 
userValidations.findUser, controllerUser.createUserController);

app.get('/user', auth.validateToken, controllerUser.getUsersController);

app.get('/user/:id', auth.validateToken, controllerUser.getUserById);

app.get('/categories', auth.validateToken, controllerCategories.listCategories);

app.post('/login', loginValidations.validateEmail, 
loginValidations.validadePassword, controllerLogin.login);

app.post('/categories', categoryValidation.validateCategory,
auth.validateToken, controllerCategories.createCategory);

app.post('/post', auth.validateToken, postValidation.validateTitle, 
postValidation.validateContent, postValidation.ValidateCatId, 
postValidation.verifyCatId, controllerPosts.createPost);

app.get('/post', auth.validateToken, controllerPosts.getAllPosts);
app.get('/post/:id', auth.validateToken, controllerPosts.getById);

app.put('/post/:id', auth.validateToken, controllerPosts.updatePost);

app.delete('/post/:id', auth.validateToken, controllerPosts.postDelete);

app.delete('/user/me', auth.validateToken, controllerUser.deleteUser);