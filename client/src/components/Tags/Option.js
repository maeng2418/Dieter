const Option = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    key === 'selected' ? (strProps += 'selected') : (strProps += `${key}="${props[key]}" `);
  }
  return `
    <option ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </option>
  `;
};

export default Option;
