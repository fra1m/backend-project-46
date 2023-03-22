import formatStylish from './formatStylish.js';
import formatJson from './formatJson.js';
import formatPlain from './formatPlain.js';

const formats = {
  stylish: formatStylish,
  plain: formatPlain,
  json: formatJson,
};

const format = (file, forma) => {
  if (!Object.hasOwn(formats, forma)) {
    throw new Error(`Format ${forma} - unsupported.`);
  }
  return formats[forma](file);
};

export default format;
