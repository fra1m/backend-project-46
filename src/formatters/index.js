import formatStylish from './formatStylish.js'
import formatJson from './formatJson.js'
import formatPlain from './formatPlain.js'

const formats = {
    stylish: formatStylish,
    plain: formatPlain,
    json: formatJson
}

const format = (file, format) => {
    if (!Object.hasOwn(formats, format)) {
        throw new Error(`Format ${format} - unsupported.`)
    }
    return formats[format](file)
}

export default format