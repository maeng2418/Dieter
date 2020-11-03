const Button = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <button ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </button>
  `;
};

export default Button;
