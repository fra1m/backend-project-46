import _ from 'lodash'


const compare = (fileObjct1, fileObjct2) => {
    const keysF1 = _.keys(fileObjct1)
    const keysF2 = _.keys(fileObjct2)
    
    const sortedKeys = _.sortBy(_.union(keysF1,keysF2))

    const compared = sortedKeys.map( (key) => {
        
        
        if (_.isObject(fileObjct1[key]) && _.isObject(fileObjct2[key])) {
            return {
                key,
                children: compare(fileObjct1[key], fileObjct2[key]),
                type: 'inner'
            }
        }
        if (!_.has(fileObjct1,key)) {
            return {
                key,
                value: fileObjct2[key],
                type: 'second'
            }
        }
        
        if (!_.has(fileObjct2,key)) {
            return {
                key,
                value: fileObjct1[key],
                type: 'first'
            }
        }
        if (fileObjct1[key] !== fileObjct2[key]) {
            return {
                key,
                value1: fileObjct1[key],
                value2: fileObjct2[key],
                type: 'chanched'
            }
        }
        
        return {
            key,
            value: fileObjct1[key],
            type: 'unchanched'
        }
    })

    return compared
}

export default compare