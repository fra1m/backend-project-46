
const takeObjct = (arrObj) => {
    let result = {}
    for (let i = 0; i < arrObj.length; i++) {
        result[arrObj[i]['key']] = arrObj[i]['value']
    }

    return result
}

export default takeObjct