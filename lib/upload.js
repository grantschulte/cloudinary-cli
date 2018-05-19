#! /usr/bin/env node

const yargs = require('yargs')
const { uploadImage } = require('./funcs')

yargs
  .command('upload [file]', 'Upload images', yargs => {
    return yargs
      .positional('file', {
        describe: 'Path to image file or URL',
        demandOption: true,
        type: 'string'
      })
      .option('n', {
        alias: 'name',
        describe: 'Image name',
        demandOption: true,
        type: 'string'
      })
      .option('f', {
        alias: 'folder',
        describe: 'Destination folder',
        type: 'string'
      })
  }, uploadImage)
  .example('cloudinary-cli upload ~/Desktop/sample.png -n sample -f myImages')
