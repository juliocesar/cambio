import 'dotenv/config'

export default {
  name: 'cambio',
  slug: 'cambio',
  platforms: ['ios', 'android', 'web'],
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  extra: {
    currConvApiKey: process.env.CURRCONV_API_KEY,
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
}
