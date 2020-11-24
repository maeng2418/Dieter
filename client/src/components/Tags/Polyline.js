const Polyline = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <polyline ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </polyline>
  `;
};

export default Polyline;
