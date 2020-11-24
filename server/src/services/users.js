import { User } from '../models';

// 유저 조회
const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({
      attributes: ['id', 'email', 'provider', 'password', 'username'],
      where: {
        email: email,
        provider: 'email',
      },
    });
    return user;
  } catch (err) {
    throw Error(err);
  }
};

// 유저데이터 DB에 저장
const createUser = async (userData) => {
  try {
    const response = await User.findOrCreate({
      attributes: ['id', 'username', 'password', 'email', 'provider'],
      where: {
        email: userData.email,
        password: userData.password,
        provider: userData.provider,
      },
      defaults: { username: userData.username },
    });
    return response;
  } catch (err) {
    throw Error(err);
  }
};

export default {
  findUserByEmail,
  createUser,
};
