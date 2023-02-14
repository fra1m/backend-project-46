import fs from 'fs'
import path from 'path'
import genDiff from '../src/genDiff.js'

const resultGendiff = fs.readFileSync(
    path.resolve(process.cwd(), '__fixtures__/result_gendiff.txt'), 
    'utf-8'
)

test('gendiff', ()=> {
    const file1 = `__fixtures__/file1.json`
    const file2 = `__fixtures__/file2.json`
    const actual1 = genDiff(file1,file2)
    console.log(actual1)
    expect(actual1).toEqual(resultGendiff)
})