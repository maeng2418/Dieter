import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../modules/database';
// import REGEX from '../../../shared/validate';

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
      // validate: {
      //   is: REGEX.NAME_REGEX,
      // },
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      // validate: {
      //   is: REGEX.EMAIL_REGEX,
      // },
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    provider: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  { timestamps: true, tableName: 'user', sequelize }
);

export default User;
