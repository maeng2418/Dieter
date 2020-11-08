const Select = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <select ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </select>
  `;
};

export default Select;
