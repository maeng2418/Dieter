import { Router } from 'express';
import passport from 'passport';
import { KcalController } from '../controllers';

const router = Router();

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
  KcalController.findAllKcals
);
router.post(
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
  KcalController.insertKcal
);

export default router;
