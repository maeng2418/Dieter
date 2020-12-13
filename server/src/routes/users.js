import { Router } from 'express';
import passport from 'passport';
import { UserController } from '../controllers';
import { ACCEPTED } from 'http-status-codes';
import CustomError from '../modules/exceptions/custom-error';

const router = Router();

/******************************************************************************
 *                      Auth User - "GET /api/users/"
 ******************************************************************************/
router.get(
  '/',
  function (req, res, next) {
    passport.authenticate('jwt', { session: false }, function (err, user) {
      if (err) {
        return next(err);
      }
      if (!user) {
        throw new CustomError(ACCEPTED, `토큰이 존재하지 않습니다.`, '');
      }
      req.user = user;
      next();
    })(req, res, next);
  },
  UserController.isValidToken
);

/******************************************************************************
 *                       SignUp and SignIn - "POST /api/users/email"
 ******************************************************************************/
router.post('/email', UserController.emailSignIn);
router.post('/email/signup', UserController.emailSignUp);

/******************************************************************************
 *                       SignOut - "DELETE /api/users/"
 ******************************************************************************/
router.delete('/', UserController.emailSignOut);

export default router;
