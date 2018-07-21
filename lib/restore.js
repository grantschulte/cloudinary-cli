const yargs = require('yargs')
const { restoreImage } = require('./funcs')

yargs
  .command('restore [name]', 'Restore image', yargs => {
    return yargs
      .positional('name', {
        describe: 'Image or resource name',
        default: 'sample',
        demandOption: true,
        type: 'string'
      })
  }, restoreImage)
  .example('cloudinary-cli restore sample')
