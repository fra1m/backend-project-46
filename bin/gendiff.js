#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { program } from 'commander'
import toParse from '../src/genDiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .option('-f, --format <type>', 'output format')

program
  .arguments('<filepath1> <filepath2>')
  .action( (file1, file2, options ) => {
        console.log(toParse(file1, file2))
    } )

program.parse(process.argv);

