const Img = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <img ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </img>
  `;
};

export default Img;
