/* jslint node: true */
'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  prompting: function () {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project or repo name',
      // Default to current folder name
      default: this.appname
    },
    {
      type: 'input',
      name: 'author',
      message: 'Your github username',
      default: ""
    }]).then(function (answers) {
      this.props = answers;
      this.log('Project Name:', answers.name);
      this.log('Author:', answers.author);
    }.bind(this));
  },

  writing: {
    config: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.name,
          author: this.props.author
        }
      );

      this.fs.copyTpl(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore')
      );

      this.fs.copyTpl(
        this.templatePath('LICENSE'),
        this.destinationPath('LICENSE')
      );

      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md')
      );
    },

    app: function() {
      this.fs.copyTpl(
        this.templatePath('_server.js'),
        this.destinationPath('server.js')
      );

      this.fs.copyTpl(
        this.templatePath('_data/_list.json'),
        this.destinationPath('data/lsit.json')
      );

      this.fs.copyTpl(
        this.templatePath('_public/_index.html'),
        this.destinationPath('public/index.html')
      );

      this.fs.copyTpl(
        this.templatePath('_public/_base.css'),
        this.destinationPath('public/base.css')
      );

      this.fs.copyTpl(
        this.templatePath('_src/_components/_example.js'),
        this.destinationPath('src/components/example.js')
      );

      this.fs.copyTpl(
        this.templatePath('_src/_app.js'),
        this.destinationPath('src/app.js')
      );
    }
  }
});
