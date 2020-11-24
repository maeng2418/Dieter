import fs from 'fs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Users } from '../models';
import { jwtSecret } from '../config/constants';
import logger from '../config/logger';

const readData = (file) => {
  return JSON.parse(fs.readFileSync(`${__dirname}/${file}`, { encoding: 'utf-8' }));
};

const createAdminUser = async (body) => {
  body.password = crypto.createHash('sha256').update(body.password).digest('base64');
  console.log('hello');
  await Users.create(body);

  return jwt.sign(
    {
      data: {
        username: body.username,
        email: body.email,
        provider: body.provider,
      },
    },
    jwtSecret,
    { expiresIn: '1d' }
  );
};
const bulkData = async () => {
  // create Admin user
  const signupAdminUser = readData('data/user.json');
  const token = await createAdminUser(signupAdminUser);
  logger.info(`admin token: ${token}`);
};
export default bulkData;
