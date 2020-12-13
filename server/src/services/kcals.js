import { Kcals } from '../models';

// 칼로리 조회
const findAllKcals = async (id) => {
  try {
    const kcals = await Kcals.findAll({
      attributes: ['id', 'type', 'date', 'category', 'kcal', 'content', 'userId'],
      where: {
        userId: id,
      },
    });
    return kcals;
  } catch (err) {
    throw Error(err);
  }
};

// 칼로리데이터 DB에 저장
const insertKcal = async (kcalData) => {
  try {
    const response = await Kcals.create({
      type: kcalData.type,
      date: kcalData.date,
      category: kcalData.category,
      kcal: kcalData.kcal,
      content: kcalData.content,
      userId: kcalData.userId,
    });
    return response;
  } catch (err) {
    throw Error(err);
  }
};

export default {
  findAllKcals,
  insertKcal,
};
