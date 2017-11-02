
exports.config = {

    baseUrl: 'http://localhost:8080',

    seleniumAddress: 'http://localhost:4444/wd/hub',

       capabilities: {
         'browserName': 'zombie'
       },

  specs: ['../BDD/**/*.feature','../app/**.Ctrl.js'],

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
        // Require files before executing the features.
       require: ['../BDD/support/hooks.js','../BDD/support/autoloanSteps.js'],
         format: 'json:../../../../../../BDD/cucumber_report.json'
  },

};






