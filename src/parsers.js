import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

const parse = (file, format) => {
  if (!Object.hasOwn(parsers, format)) {
    throw new Error(`Format ${format} - unsupported.`);
  }
  return parsers[format](file);
};

export default parse;
