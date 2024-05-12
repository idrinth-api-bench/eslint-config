import {
  parse,
} from 'yaml';
import {
  readFileSync,
} from 'fs';

const config = parse(readFileSync('.eslintrc.yml', 'utf8',),);

delete config.root;

export default {
  configs: {
    recommended: {
      ...config,
      name: '@idrinth-api-bench/recommended',
    },
  },
};
