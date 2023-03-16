import fs from 'fs'
import path  from 'path'
import compare from './compareData.js'

const toParse = (file1, file2) => {
    const fileObjct1 = JSON.parse(fs.readFileSync(path.resolve(file1)))
    const fileObjct2 = JSON.parse(fs.readFileSync(path.resolve(file2)))
    return compare(fileObjct1,fileObjct2)
}

export default toParse