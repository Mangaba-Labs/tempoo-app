module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@ducks': './src/store/ducks',
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@pages': './src/pages',
          '@services': './src/services',
          '@store': './src/store',
          '@theme': './src/styles/theme',
        },
      },
    ],
  ],
};
