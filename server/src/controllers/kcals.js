import { CREATED, OK, ACCEPTED } from 'http-status-codes';
import { KcalService } from '../services';
import CustomError from '../modules/exceptions/custom-error';

const insertKcal = async (req, res, next) => {
  const { body } = req;
  body['userId'] = req.user.id;

  try {
    const newKcal = await KcalService.insertKcal(body);

    res.status(CREATED).json({
      status: CREATED,
      message: `created new kcal`,
      result: {
        success: true,
        kcal: {
          id: newKcal.id,
          type: newKcal.type,
          date: newKcal.date,
          category: newKcal.category,
          kcal: newKcal.kcal,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

const findAllKcals = async (req, res, next) => {
  const id = req.user.id;

  try {
    const kcals = await KcalService.findAllKcals(parseInt(id));
    if (!kcals) throw new CustomError(ACCEPTED, `해당 ${id}는 등록된 유저가 아닙니다.`, '');

    res.status(OK).json({
      status: OK,
      message: `found kcals`,
      result: {
        success: true,
        kcals,
      },
    });
  } catch (err) {
    next(err);
  }
};

export default {
  insertKcal,
  findAllKcals,
};
