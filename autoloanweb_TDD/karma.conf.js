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
      '**/*spec.js'
      
    ],

    exclude: [
      'assets/js/**/*.js',
    ],
    preprocessors : {

    	  'newApplication/*spec.js': 'coverage'
    	    	    },

    //autoWatch: true,

    frameworks: ['jasmine', 'karma-jasmine-cucumber'],

   browsers: ['PhantomJS'],
 
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
      exitOnResourceError: true
    },



   reporters: ['progress','coverage','htmlalt'],

    jsonResultReporter: {
      outputFile: "karma-result.json",
    },

    /*coverageReporter : {
      type : 'html',
      dir : '../coverage/'
    },*/

    coverageReporter: {
       type: 'html',
       dir: '../coverage'
    },
    htmlReporter: {
      outputFile: '../TDD/index.html',
      pageTitle: 'Auto Loan Procesing',
      subPageTitle: 'TDD Results'
    },

 
  
  plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-jasmine-cucumber',
      'karma-junit-reporter',
      'karma-json-result-reporter',
      'karma-coverage',
      'karma-html-reporter',
      'karma-htmlfilealt-reporter',
      'jasmine-allure-reporter',
      'protractor-html-screenshot-reporter'
         ],
   

  });
};

