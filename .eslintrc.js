module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'comma-dangle': [
      0,
      {
        arrays: 'always',
        objects: 'never',
        imports: 'always',
        exports: 'always',
        functions: 'always',
      },
    ],
  },
};
