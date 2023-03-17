import fs from 'fs'
import path  from 'path'
import compare from './compareData.js'
import parse from './parsers.js'


const readFiel = (file) => {
    const fullpath = path.resolve(process.cwd(), file)
    return fs.readFileSync(fullpath, 'utf-8')
}

const getData = (file) => {
    const data = readFiel(file)
    const fileFormat = path.extname(file).slice(1)
    return parse(data,fileFormat)
}

const toParse = (file1, file2) => {
    const fileObjct1 = getData(file1)
    const fileObjct2 = getData(file2)
    const diff = compare(fileObjct1,fileObjct2)

    return diff
}

export default toParse