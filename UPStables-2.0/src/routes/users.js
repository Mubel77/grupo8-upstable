var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController.js');
const loginValidator = require('../validaciones/loginValidator.js')
const { validateRegister, validateRegisterAdmin } = require('../validaciones/registerValidator.js');
const { validateUpdateUser, validateUpdateAdmin } = require('../validaciones/updateUserValidator.js');
const {sessionValidator, isAdmin} = require('../middlewares/sessionValidator.js')
const upload = require('../validaciones/uploadUser');

/* GET users listing. */
router.get('/register', usersController.register);
router.post('/register', upload.single('imagen'), validateRegister, usersController.createUser);

router.get('/registerAdmin', isAdmin, usersController.registerAdmin); 
router.post('/registerAdmin', upload.single('imagen'),validateRegisterAdmin, usersController.createUserAdmin);

router.get('/login', usersController.login);
router.post('/login', loginValidator, usersController.loginUp);

//ruta para editar usuario, tarea de santy y mauri, 
router.get('/profile', sessionValidator, usersController.formUpdateUser);
router.put('/profile', upload.single('imagen'), validateUpdateUser, usersController.processUpdate);

router.get('/perfilAdmin', isAdmin, usersController.perfilAdmin);
router.get('/perfilUser',sessionValidator, usersController.perfilUser);

//router.get('/userList', isAdmin, userController.list) Dashboard de empleados
router.get('/profileAdmin/:id',  usersController.formUpdateAdmin) // Formulario de edicion del perfil empleado
router.put('/profileAdmin/:id', upload.single('imagen'), validateUpdateAdmin, usersController.updateAdmin) // Editar perfil del empleado

router.get('/logout', usersController.logout);

module.exports = router;