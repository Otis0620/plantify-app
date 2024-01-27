// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
// eslint-disable-next-line
const config = getDefaultConfig(__dirname);

if (process.env.STORYBOOK_ENABLED === 'true') {
  config.resolver.resolverMainFields.unshift('sbmodern');
}

module.exports = config;
