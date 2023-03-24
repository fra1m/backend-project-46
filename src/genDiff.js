import fs from 'fs';
import path from 'path';
import process from 'process';
import compare from './compareData.js';
import parse from './parsers.js';
import format from './formatters/index.js';

const readFile = (file) => {
  const fullpath = path.resolve(process.cwd(), file);
  return fs.readFileSync(fullpath, 'utf-8');
};

const getData = (file) => {
  const data = readFile(file);
  const fileFormat = path.extname(file).slice(1);
  return parse(data, fileFormat);
};

const gendiff = (file1, file2, defformat = 'stylish') => {
  const fileObjct1 = getData(file1);
  const fileObjct2 = getData(file2);
  const diff = compare(fileObjct1, fileObjct2);

  return format(diff, defformat);
};

export default gendiff;
