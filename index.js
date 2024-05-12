/* eslint @typescript-eslint/no-var-requires: off */
const {
  parse,
} = require('yaml',);
const {
  readFileSync,
} = require('fs',);

const config = parse(readFileSync('.eslintrc.yml', 'utf8',),);

delete config.env;
delete config.ignorePatterns;

module.exports = {
  configs: {
    recommended: config,
  },
  meta: {
    name: '@idrinth-api-bench/eslint-plugin',
    version: '1.0.0',
  },
};
