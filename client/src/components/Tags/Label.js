const Label = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <label ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </label>
  `;
};

export default Label;
