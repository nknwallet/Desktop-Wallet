export default (filename, text) => {
  const element = global.document.createElement('a');

  element.setAttribute(
    'href',
    `data:application/json;charset=utf-8,${text}`,
  );
  element.setAttribute('download', filename);
  element.style.display = 'none';

  global.document.body.appendChild(element);

  element.click();

  global.document.body.removeChild(element);
};
