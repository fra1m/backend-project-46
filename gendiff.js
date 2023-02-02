#!/usr/bin/env node

const { program } = require('commander');

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1');

program
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format <type>', 'output format')


program.parse();