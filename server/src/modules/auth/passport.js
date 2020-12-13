// import passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';
import logger from '../../config/logger';
import { jwtSecret } from '../../config/constants';

const jwtFromRequest = (req) => {
  let token = null;

  if (req && req.cookies.authorization) {
    token = req.cookies.authorization;
  }
  return token;
};
const secretOrKey = jwtSecret;
const opts = { jwtFromRequest, secretOrKey };

// JWT 토큰을 읽어 해당 사용자를 인증합니다.
const jwt = new JwtStrategy(opts, (jwtPayload, done) => {
  logger.info('JWT BASED AUTH GETTING CALLED');
  if (jwtPayload.data) {
    // check user valid
    return done(null, jwtPayload.data);
  } else {
    return done(null, false);
  }
});

export default { jwt };
