import { fileURLToPath } from 'url';
import fs, { read } from 'fs'
import path from 'path'
import toParse from '../src/genDiff.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fullpath = (file) => path.join(__dirname, '..', '__fixtures__', file)
const readFiel = (file) => fs.readFileSync(fullpath(file), 'utf-8' )

const resultGendiff1 = readFiel('result_gendiff.txt')


/*const file1yaml = readFiel('file1.yml')
const file2yaml = readFiel('file2.yml')
const file1json = readFiel('file1.json')
const file2json = readFiel('file2.json')

const actual1 = toParse(file1yaml, file2yaml)
const actual2 = toParse(file1json, file2json)*/

const extensions = ['yml', 'json'];

test.each([
    extensions,
])('main test', (extensions) => {
    const filepath1 = fullpath(`file1.${extensions}`);
    const filepath2 = fullpath(`file2.${extensions}`)
    
    expect(toParse(filepath1,filepath2)).toEqual(resultGendiff1)
    //expect(actual2).toEqual(resultGendiff1)
})