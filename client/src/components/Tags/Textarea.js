const Textarea = (children = [], props = {}) => {
  let strProps = '';
  for (let key in props) {
    strProps += `${key}="${props[key]}" `;
  }
  return `
    <textarea ${strProps}>
      ${children.reduce((acc, child) => (acc += child), ``)}
    </textarea>
  `;
};

export default Textarea;
