//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-route/angular-route.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      'app.js',
      '**/*Service.js',
      'utils/sessionService.js',
      '**/*Ctrl.js',
      '**/*.feature',
      '**/*steps.js'
      //'**/*_test.js'

    ],

    exclude: [
      'assets/js/**/*.js',
    ],


    //autoWatch: true,

    frameworks: ['jasmine', 'jasmine-feature'],

   browsers: ['PhantomJS'],

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },


//,'htmlalt'
   reporters: ['progress'],

    jsonResultReporter: {
      outputFile: "karma-result.json",
    },

    /*coverageReporter : {
      type : 'html',
      dir : '../coverage/'
    },*/


    htmlReporter: {
      outputFile: '../ATDD/index.html',
      pageTitle: 'Auto Loan Procesing',
      subPageTitle: 'ATDD Results'
    },



  plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'jasmine-cucumber',
      'karma-jasmine-feature',
      'karma-junit-reporter',
      'karma-json-result-reporter',
      'karma-coverage',
      'karma-html-reporter',
     // 'karma-htmlfilealt-reporter',
      'jasmine-allure-reporter',
      'protractor-html-screenshot-reporter'
         ],


  });
};