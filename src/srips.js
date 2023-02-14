import toStringJSON from './formats/json.js'

const takeObjct = (arrObj) => {
    let result = {}
    for (let i = 0; i < arrObj.length; i++) {
        if (arrObj[i]['type'] === 'chanched') {
            result[`- ${arrObj[i]['key']}`] = arrObj[i]['value1']
            result[`+ ${arrObj[i]['key']}`] = arrObj[i]['value2']
            
        }
        else {
            if (arrObj[i]['type'] === 'first') {
                result[`- ${arrObj[i]['key']}`] = arrObj[i]['value'] 
            }
            if (arrObj[i]['type'] === 'second') {
                result[`+ ${arrObj[i]['key']}`] = arrObj[i]['value']
            }
            if (arrObj[i]['type'] === 'unchanched') {
                result[`  ${arrObj[i]['key']}`] = arrObj[i]['value']
            }
        }
    }
    
    return toStringJSON(result)
}

export default takeObjct