'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the mathematical ' + chalk.red('generator-new-nextjs-app') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'Name of Project',
      default: 'myProject'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    // const projectName = this.props.projectName;

    this.fs.copyTpl(
      `${this.templatePath()}//**/!(_)`,
      this.destinationPath(),
      this.props
    );
  }

  install() {
    this.installDependencies();
  }
};
