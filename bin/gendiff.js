#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import compare from '../src/index.js'
import takeObjct from '../src/srips.js'
import { program } from 'commander'


program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1');

program
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format <type>', 'output format')
    .action( (file1, file2) => {
      const fileObjct1 = JSON.parse(fs.readFileSync(path.resolve(file1)))
      const fileObjct2 = JSON.parse(fs.readFileSync(path.resolve(file2)))
        console.log(takeObjct(compare(fileObjct1,fileObjct2)))
    } )

program.parse(process.argv);

