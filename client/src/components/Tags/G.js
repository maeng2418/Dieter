const G = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <g ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </g>
  `;
};

export default G;
