'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
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
    this.fs.copyTpl(
      `${this.templatePath()}//**/!(_)`,
      this.destinationPath(),
      this.props,
    );
  }

  install() {
    this.yarnInstall();
  }
};
