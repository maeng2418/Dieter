import { Div, Form, Button, Input, Select, Option } from 'tags';
import { FormItem, Row } from 'components';
import { getFormatDate } from 'utils/date-format';

export const RegisterForm = (children = [], props = {}) => {
  return Form(
    [
      FormItem([
        '분류',
        Div(
          [
            Button(['섭취'], {
              style: ButtonStyle + isSelectedStyle,
              class: 'type-btn intake-btn isSelected',
              id: 'intake',
            }),
            Button(['소비'], {
              style: ButtonStyle + unSelectedStyle,
              class: 'type-btn consumption-btn',
              id: 'consumption',
            }),
          ],
          { style: 'width: 75%;' }
        ),
      ]),
      Row([
        FormItem([
          '날짜',
          Input([], {
            type: 'date',
            value: getFormatDate(new Date()),
            class: 'date-picker',
            style: InputStyle,
          }),
        ]),
        FormItem([
          '카테고리',
          Select([Option(['한식']), Option(['중식'], { selected: true }), Option(['일식'])], {
            style: InputStyle,
            class: 'category',
          }),
        ]),
      ]),
      Row([
        FormItem([
          '칼로리',
          Input([], {
            type: 'text',
            placeholder: '칼로리를 입력해주세요.',
            style: InputStyle,
            class: 'input-kcal',
          }),
        ]),
        FormItem([
          '내용',
          Input([], {
            type: 'text',
            placeholder: '내용을 입력해주세요.',
            style: InputStyle,
            class: 'input-content',
          }),
        ]),
      ]),
      Button(['등록'], { style: SubmitButtonStyle, class: 'submit-btn' }),
    ],
    {
      ...props,
      class: `form ${props.class && props.class}`,
      style: `${Style} ${props.style && props.style}`,
    }
  );
};

const Style = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  width: 50%;
`;

const InputStyle = `
  width:75%;
  box-sizing: border-box;
  height: 2rem;
  padding: 0 10px;
  outline: none;
  cursor: pointer;
`;

const ButtonStyle = `
  height: 2rem;
  width: 5rem;
  outline: none;
  cursor: pointer;
`;

const isSelectedStyle = `
  color: #36cfc9;
  background: #fff;
  border: 2px solid #36cfc9;
  cursor: pointer;
`;

const unSelectedStyle = `
  background: #36cfc9;
  color: #fff;
  border: 2px solid #36cfc9;
  cursor: pointer;
`;

const SubmitButtonStyle = `
  height: 2rem;
  background: #36cfc9;
  color: #fff;
  border: 2px solid #36cfc9;
  outline: none;
  cursor: pointer;
`;
