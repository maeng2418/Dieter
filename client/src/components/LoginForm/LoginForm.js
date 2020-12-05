import { Form, Button, Input } from 'tags';
import { FormItem } from 'components';

export const LoginForm = (children = [], props = {}) => {
  return Form(
    [
      FormItem(
        [
          '아이디',
          Input([], {
            type: 'text',
            placeholder: '아이디를 입력해주세요.',
            style: InputStyle,
            class: 'input-id',
          }),
        ],
        { style: 'width: 100%;' }
      ),
      FormItem(
        [
          '비밀번호',
          Input([], {
            type: 'password',
            placeholder: '비밀번호를 입력해주세요.',
            style: InputStyle,
            class: 'input-pw',
          }),
        ],
        { style: 'width: 100%;' }
      ),
      Button(['로그인'], { style: SubmitButtonStyle, class: 'login-btn' }),
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
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const InputStyle = `
  box-sizing: border-box;
  height: 2rem;
  padding: 0 10px;
  outline: none;
  width: 75%;
`;

const SubmitButtonStyle = `
  height: 2rem;
  background: #36cfc9;
  color: #fff;
  border: 2px solid #36cfc9;
  outline: none;
  margin: 2rem auto;
  width: 100%;
`;
