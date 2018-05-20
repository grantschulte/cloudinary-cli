const yargs = require('yargs')
const { setConfig, listConfig } = require('./funcs')

yargs
  .command('config:set [keyValuePair]', 'Set a config variable', yargs => {
    return yargs
      .positional('keyValuePair', {
        demandOption: true,
        type: 'string'
      })
  }, setConfig)
  .example('cloudinary-cli config:set cloudName=my-cloud')
  .command('config', 'List configuration', yargs => {}, listConfig)
