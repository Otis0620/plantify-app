import { ConfigContext, ExpoConfig } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'plantify-app',
  slug: 'plantify-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.otis0620.plantifyapp',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.otis0620.plantifyapp',
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    storyBookEnabled: process.env.STORYBOOK_ENABLED === 'true',
    eas: {
      projectId: '61cc3ffa-a8ce-4713-bfee-a6405409b32e',
    },
  },
  owner: 'otis0620',
});
