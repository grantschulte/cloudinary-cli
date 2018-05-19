const os = require('os')

const CONFIG_FILE_NAME = '.cloudinarycli.json'

exports.CONFIG_FILE_NAME = CONFIG_FILE_NAME
exports.CLOUDINARY_CONFIG_FILE = `${os.homedir()}/${CONFIG_FILE_NAME}`
exports.CONFIG_KEYS = [
  'cloudName',
  'apiKey',
  'secretKey'
]
