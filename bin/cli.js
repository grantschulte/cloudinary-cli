#! /usr/bin/env node

const yargs = require('yargs')
const fs = require('fs')
const { CLOUDINARY_CONFIG_FILE, CONFIG_KEYS } = require('../config')

let cloudinaryConfig

try {
  cloudinaryConfig = require(CLOUDINARY_CONFIG_FILE)

  require('./configure')
  require('./delete')
  require('./get')
  require('./upload')

  yargs
    .help()
    .argv

} catch (err) {
  console.error('Configuration required.')
  console.error(`Add configuration here: ${CLOUDINARY_CONFIG_FILE}`)

  let baseConfig = {}

  for (let key of CONFIG_KEYS) {
    baseConfig[key] = ''
  }

  baseConfig = JSON.stringify(baseConfig, null, 2)

  fs.writeFileSync(CLOUDINARY_CONFIG_FILE, baseConfig, err => {
    console.error(err)
    if (err) throw err
    process.exit(1)
  })
}
