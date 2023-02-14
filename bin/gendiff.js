#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import gendiff from '../src/genDiff.js'
import { program } from 'commander'


program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0');

program
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format <type>', 'output format')
    .action( (file1, file2, options ) => {
        console.log(gendiff(file1, file2))
    } )

program.parse(process.argv);

