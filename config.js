const os = require('os')

const CONFIG_FILE_NAME = '.cloudinarycli.json'

exports.CONFIG_FILE_NAME = CONFIG_FILE_NAME
exports.CLOUDINARY_CONFIG_FILE = `${os.homedir()}/${CONFIG_FILE_NAME}`
exports.CONFIG_KEYS = [
  'cloudName',
  'apiKey',
  'secretKey'
]

exports.CISCO_IMAGE_FOLDER_NAME = 'thumbs'
exports.CISCO_IMAGE_TYPE_MAP = {
  thumbnail: 'thumb',
  boxArt: 'box_art',
  masthead: 'masthead',
  large: 'lg'
}
