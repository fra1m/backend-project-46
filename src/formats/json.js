const toStringJSON = (obj) => JSON.stringify(obj, null, '\t').replace(/"/g,'').replace(/\,/g,'')
export default toStringJSON