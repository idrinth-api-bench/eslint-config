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

module.exports =config;
