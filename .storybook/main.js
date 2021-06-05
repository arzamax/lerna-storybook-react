const path = require('path');
const { statSync, readdirSync } = require('fs');

const basePath = path.resolve(__dirname, '../', 'packages');

const packages = readdirSync(basePath).filter((name) =>
  statSync(path.join(basePath, name)).isDirectory(),
);

module.exports = {
  stories: ['../packages/**/*.stories.tsx'],
  webpackFinal: async config => {
    Object.assign(config.resolve.alias, {
      ...packages.reduce(
        (acc, name) => ({
          ...acc,
          [`@example/${name}`]: path.join(basePath, name, 'src'),
        }),
        {},
      ),
    });

    return config;
  }
}