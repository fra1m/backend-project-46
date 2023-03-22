#!/usr/bin/env node
import { program } from 'commander';
import toParse from '../src/genDiff.js';
import process from 'process';


program
	.name('gendiff')
	.description('Compares two configuration files and shows a difference.')
	.version('0.1.0');

program
	.option('-f, --format <type>', 'output format')
	.arguments('<filepath1> <filepath2>')
	.action( (file1, file2, options) => {
		console.log(toParse(file1, file2, options.format));
	} );

program.parse(process.argv);

