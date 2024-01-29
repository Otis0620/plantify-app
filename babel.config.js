module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~assets': './assets',
            '~core': './app/core',
            '~features': './app/features',
            '~storybook': './.storybook',
          },
        },
      ],
    ],
  };
};
