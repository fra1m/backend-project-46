import { fileURLToPath } from 'url';
import fs, { read } from 'fs'
import path from 'path'
import toParse from '../src/genDiff.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fullpath = (file) => path.join(__dirname, '..', '__fixtures__', file)
const readFiel = (file) => fs.readFileSync(fullpath(file), 'utf-8' )

const resultGendiff1 = readFiel('result_gendiff.txt')
const resultGendiff2 = readFiel('result_gendiff_rec.txt')
const resultPlain = readFiel('result_plain.txt')

const extensions = ['yml' ,'json'];

test('Плоское сравнение', () => {
    const filepath1 = fullpath(`def1.yml`)
    const filepath2 = fullpath(`def2.yml`)

    expect(toParse(filepath1,filepath2)).toBe(resultGendiff1)
})

test.each([
    extensions,
])('main test', (extensions) => {
    const filepath1 = fullpath(`file1.${extensions}`)
    const filepath2 = fullpath(`file2.${extensions}`)
    
    expect(toParse(filepath1,filepath2, 'stylish')).toBe(resultGendiff2)
    expect(toParse(filepath1,filepath2, 'plain')).toBe(resultPlain)
})

