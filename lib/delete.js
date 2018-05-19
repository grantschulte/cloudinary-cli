#! /usr/bin/env node

const yargs = require('yargs')
const { deleteResource, deleteImage } = require('./funcs')

yargs
  .command('delete [name]', 'Delete images', yargs => {
    return yargs
      .positional('name', {
        describe: 'Image or resource name',
        demandOption: true,
        type: 'string'
      })
      .option('r', {
        alias: 'resource',
        describe: 'Denotes that this is a resource',
        default: false,
        type: 'boolean'
      })
      .option('i', {
        alias: 'invalidate',
        default: true,
        describe: 'Invalidate the cache'
      })
  }, argv => {
    if (argv.r) {
      deleteResource(argv)
    } else {
      deleteImage(argv)
    }
  })
  .example('cloudinary-cli delete sample -i')
  .example('cloudinary-cli delete thumbs -r -i')
