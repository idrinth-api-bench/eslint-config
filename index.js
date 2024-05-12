/* eslint @typescript-eslint/no-var-requires: off */
const {
  parse,
} = require('yaml',);
const {
  readFileSync,
} = require('fs',);

const config = parse(readFileSync('.eslintrc.yml', 'utf8',),);

delete config.root;
delete config.env;

module.exports = {
  configs: {
    recommended: config,
  },
  meta: {
    name: '@idrinth-api-bench',
    version: '1.0.0',
  },
};
