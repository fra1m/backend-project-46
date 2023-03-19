import formatStylish from './formatStylish.js'
import formatJson from './formatJson.js'

const formats = {
    stylish: formatStylish,
    json: formatJson
}

const format = (file, format) => {
    return formats[format](file)
}

export default format