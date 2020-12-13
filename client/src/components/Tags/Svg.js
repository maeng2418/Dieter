const Svg = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <svg ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </svg>
  `;
};

export default Svg;
