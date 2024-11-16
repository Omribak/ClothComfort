const {
  Register,
  Login,
  Logout,
  checkAuth
} = require('../controllers/AuthController');
const { checkAuhtMiddleware } = require('../middlewares/CheckAuthMIddleware');
const validateBody = require('../validations/bodyValidations');
const {
  RegisterZodSchema,
  LoginZodSchema
} = require('../zod-schemas/AuthZodSchema');

const router = require('express').Router();

router.post('/register', validateBody(RegisterZodSchema), Register);
router.post('/login', validateBody(LoginZodSchema), Login);
router.get('/check-auth', checkAuhtMiddleware, checkAuth);
router.post('/logout', Logout);

module.exports = router;
