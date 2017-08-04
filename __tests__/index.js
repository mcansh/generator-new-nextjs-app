const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-new-nextjs-app:index', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({ projectName: 'my-new-project', projectAuthor: 'my-name' })
  });

  it('creates files', () => {
    assert.file(
      [
        'components/Meta.js',
        'pages/_document.js',
        'pages/index.js',
        'static/css/style.sass',
        '.eslintrc.js',
        'next.config.js',
        'package.json',
        'postcss.config.js',
        'Readme.markdown',
        '.gitignore',
      ],
    );
  });
});
