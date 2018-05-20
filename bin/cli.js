#! /usr/bin/env node

const fs = require('fs')
const yargs = require('yargs')
const { CLOUDINARY_CONFIG_FILE, CONFIG_KEYS } = require('../config')

try {
  const file = fs.readFileSync(CLOUDINARY_CONFIG_FILE, 'utf8')

  require('../lib/configure')
  require('../lib/delete')
  require('../lib/get')
  require('../lib/upload')

  yargs
    .help()
    .argv

} catch (err) {
  console.log('Creating config file...')

  let baseConfig = {}

  for (let key of CONFIG_KEYS) {
    baseConfig[key] = ''
  }

  baseConfig = JSON.stringify(baseConfig, null, 2)

  fs.writeFileSync(CLOUDINARY_CONFIG_FILE, baseConfig)

  console.log(`Config file created. Fill in here: ${CLOUDINARY_CONFIG_FILE}`)
}
