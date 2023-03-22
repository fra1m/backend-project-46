import _ from 'lodash';

const space = ' ';
const spaceCount = 4;

const doSpacer = (depth) => space.repeat(depth * spaceCount - 2);
const doNoSpacer = (depth) => space.repeat(depth * spaceCount - spaceCount);

const stringify = (file, depth) => {
  if (!_.isObject(file)) {
    return `${file}`;
  }

  const entries = Object.entries(file);
  const lines = entries.map(([key, value]) => `${doSpacer(depth)}  ${key}: ${stringify(value, depth + 1)}`);

  return ['{', ...lines, `${doNoSpacer(depth)}}`].join('\n');
};

const formatStylish = (tree) => {
  const file = (arrObj, depth) => {
    const lines = arrObj.map((obj) => {
      const {
        type, key, children, value, value1, value2,
      } = obj;

      switch (type) {
        case 'inner':
          return `${doSpacer(depth)}  ${key}: ${file(children, depth + 1)}`;
        case 'first': {
          return `${doSpacer(depth)}- ${key}: ${stringify(value, depth + 1)}`;
        }
        case 'second': {
          return `${doSpacer(depth)}+ ${key}: ${stringify(value, depth + 1)}`;
        }
        case 'chanched': {
          return `${doSpacer(depth)}- ${key}: ${stringify(value1, depth + 1)}\n${doSpacer(depth)}+ ${key}: ${stringify(value2, depth + 1)}`;
        }
        case 'unchanched':
          return `${doSpacer(depth)}  ${key}: ${stringify(value, depth + 1)}`;
        default:
          throw new Error('fuck');
      }
    });
    return ['{', ...lines, `${doNoSpacer(depth)}}`].join('\n');
  };
  return file(tree, 1);
};

export default formatStylish;
