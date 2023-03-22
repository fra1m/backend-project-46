#!/usr/bin/env node
import { program } from 'commander';
import process from 'process';
import toParse from '../src/genDiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0');

program
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((file1, file2, options) => {
    console.log(toParse(file1, file2, options.format));
  });

program.parse(process.argv);
