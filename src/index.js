import _ from 'lodash'

const compare = (fileObjct1, fileObjct2) => {
    const newObjFile = _.mergeWith(fileObjct1, fileObjct2, (file1, file2) => {
        if (file1 === file2) {
            return file1
        }
        return _.create(file1, file2)
    })
    return newObjFile
}

export default compare