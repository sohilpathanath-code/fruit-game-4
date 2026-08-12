import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.suikagame.fruitmerge',
  appName: 'Suika Fruit Merge',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
