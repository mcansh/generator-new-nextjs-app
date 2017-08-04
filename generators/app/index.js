const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Name of Project',
        default: 'myProject',
      },
      {
        type: 'input',
        name: 'projectAuthor',
        message: 'Your Name',
        default: '',
      },
    ];

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      `${this.templatePath()}//**/!(_)`,
      this.destinationPath(),
      this.props,
    );
    this.fs.copyTpl(
      `${this.templatePath()}//**/.*`,
      this.destinationPath(),
      this.props,
    );
  }

  install() {
    this.yarnInstall();
  }
};
