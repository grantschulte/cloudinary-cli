#! /usr/bin/env node

const yargs = require('yargs')
const fs = require('fs')
const { CLOUDINARY_CONFIG_FILE, CONFIG_KEYS } = require('../config')

let cloudinaryConfig

try {
  cloudinaryConfig = require(CLOUDINARY_CONFIG_FILE)

  require('../lib/configure')
  require('../lib/delete')
  require('../lib/get')
  require('../lib/upload')

  yargs
    .help()
    .argv

} catch (err) {
  let baseConfig = {}

  for (let key of CONFIG_KEYS) {
    baseConfig[key] = ''
  }

  baseConfig = JSON.stringify(baseConfig, null, 2)

  console.error('Configuration required.')
  console.error(`Add configuration here: ${CLOUDINARY_CONFIG_FILE}`)

  fs.writeFileSync(CLOUDINARY_CONFIG_FILE, baseConfig, err => {
    if (err) throw err
    process.exit(1)
  })
}
