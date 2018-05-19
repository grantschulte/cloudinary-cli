#! /usr/bin/env node

const yargs = require('yargs')
const { getResource, getImage } = require('./funcs')

yargs
  .command('get [name]', 'Get images', yargs => {
    return yargs
      .positional('name', {
        describe: 'Image or resource name',
        default: 'sample',
        demandOption: true,
        type: 'string'
      })
      .option('r', {
        alias: 'resource',
        describe: 'Denotes that this is a resource',
        default: false,
        type: 'boolean'
      })
  }, argv => {
    if (argv.r) {
      getResource(argv.name)
    } else {
      getImage(argv.name)
    }
  })
  .example('cloudinary-cli get sample')
  .example('cloudinary-cli get thumbs --resource')
