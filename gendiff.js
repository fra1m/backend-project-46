#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import compare from '../src/index.js'
import { program } from 'commander'

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1');

program
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format <type>', 'output format')
    .action( (filepath1, filepath2) => {
        console.log(compare(file1,file2))
    } )

program.parse();

