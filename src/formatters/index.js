import formatStylish from './formatStylish.js'
import formatJson from './formatJson.js'

const formats = {
    stylish: formatStylish,
    json: formatJson
}

const format = (file, format) => {
    if (!Object.hasOwn(formats, format)) {
        throw new Error(`Format ${format} - unsupported.`)
    }
    return formats[format](file)
}

export default format