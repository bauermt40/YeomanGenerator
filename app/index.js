'use strict';
var _ = require('underscore.string');
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');



var SimpleAngularAppGenerator = module.exports = function SimpleAngularAppGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(SimpleAngularAppGenerator, yeoman.generators.Base);

SimpleAngularAppGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'appName',
    message: 'App name?'
  }];

  this.prompt(prompts, function (props) {
    this.appName = _.slugify(props.appName);
    this.appTitle = props.appName;

    cb();
  }.bind(this));
};

SimpleAngularAppGenerator.prototype.app = function app() {
  this.template('Gruntfile.js', 'Gruntfile.js');

  this.template('_bower.json', 'bower.json');
  this.template('_config.json', 'config.json');
  this.template('_package.json', 'package.json');
};

SimpleAngularAppGenerator.prototype.projectfolders = function projectfolders() {
  this.directory('.\\src', 'src', true);
};

SimpleAngularAppGenerator.prototype.templateStuff = function templateStuff() {
  this.template('.\\src\\js\\app.js', 'src/js/app.js');
  this.template('.\\src\\js\\home\\homeController.js', 'src/js/home/homeController.js');
  this.template('.\\src\\views\\home\\homeView.html', 'src/js/views/home/homeView.html');
  this.template('.\\src\\styles\\main.css', 'src/styles/main.css');
  this.template('.\\src\\index.html', 'src/index.html');
};

SimpleAngularAppGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('karma.conf.js', 'karma.conf.js');
};
