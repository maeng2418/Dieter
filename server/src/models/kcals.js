import { DataTypes } from 'sequelize';
import { sequelize } from '../modules/database';
// import REGEX from '../../../shared/validate';

const Kcal = sequelize.define(
  'kcal',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    kcal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  { timestamps: true }
);

export default Kcal;
