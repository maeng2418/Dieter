const Form = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <form ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </form>
  `;
};

export default Form;
