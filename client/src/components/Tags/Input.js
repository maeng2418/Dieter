const Input = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <input ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </input>
  `;
};

export default Input;
