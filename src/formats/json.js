const toStringJSON = (obj) => JSON.stringify(obj, null, 2).replace(/"/g,'').replace(/\,/g,'')
export default toStringJSON