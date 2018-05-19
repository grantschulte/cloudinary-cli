const cloudinary = require('cloudinary')
const fs = require('fs')
const { CLOUDINARY_CONFIG_FILE } = require('../config')
const cloudinaryConfig = require(CLOUDINARY_CONFIG_FILE)
const { cloudName, apiKey, secretKey } = cloudinaryConfig

if (!cloudName || !apiKey || !secretKey ) {
  console.error('Missing configuration variables.')
  process.exit(1)
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: secretKey
})

const { api, uploader }= cloudinary.v2

/**
 * Delete a resource (folder of images)
 * @param argv
 */

exports.deleteResource = argv => {
  api.delete_resources_by_prefix(argv.name, {
    invalidate: argv.invalidate
  }, responseCallback)
}

/**
 * Delete a single image.
 * @param argv
 */

exports.deleteImage = argv => {
  api.delete_resources([argv.name], {
    invalidate: argv.invalidate
  }, responseCallback)
}

/**
 * Get a set of images.
 * @param name
 */

exports.getResource = (name) => {
  api.resources({
    type: 'upload',
    max_results: 100,
    prefix: name
  }, responseCallback)
}

/**
 * Get a single image.
 * @param name
 */

exports.getImage = (name = 'sample') => {
  api.resource(name, responseCallback)
}

/**
 * Get a single image.
 * @param name
 */

exports.uploadImage = argv => {
  uploader.upload(name, {
    public_id: argv.name,
    folder: argv.folder
  }, responseCallback)
}

/**
 * Set a configuration variable.
 * @param argv
 */

exports.setConfig = argv => {
  const [ key, value ] = argv.keyValuePair.split('=')

  if (!Object.keys(cloudinaryConfig).includes(key)) {
    console.error('Invalid config key.')
    process.exit(1)
  }

  cloudinaryConfig[key] = value
  const newConfig = JSON.stringify(cloudinaryConfig, null, 2)

  fs.writeFile(CLOUDINARY_CONFIG_FILE, newConfig, err => {
    if (err) throw err
  })
}

/**
 * List configuration variables
 */

exports.listConfig = () => {
  fs.readFile(CLOUDINARY_CONFIG_FILE, (err, data) => {
    if (err) throw err

    const config = JSON.parse(data)

    for (let prop in config) {
      console.log(`${prop}: ${config[prop]}`)
    }
  })
}

/**
 * Handle api response callback
 * @param err
 * @param result
 */

function responseCallback(err, result) {
  if (err) {
    console.error(err.message)
    process.exit(1)
  }
  console.log(result)
}
