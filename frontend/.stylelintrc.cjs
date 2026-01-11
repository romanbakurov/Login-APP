module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'no-descending-specificity': null,
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]+$', // можно менять на camelCase/PascalCase
      {
        message: 'Expected class selector to be camelCase or PascalCase',
        ignore: ['modules'], // отключаем для файлов *.module.css
      },
    ],
  },
};
