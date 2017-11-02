'use strict';



var hooks = function() {
    this.Before(function(scenario, callback) {
        console.log('console logs should not break the report');
        this.scenario = scenario;
        callback();
    });

 console.log('I am hooked up');
 
var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: '../../../../../../BDD/cucumber_report.json',
        output: '../../../../../../BDD/index.html',
        reportSuiteAsScenarios: false,
        launchReport: true,
        title:     'Cucumber Report'
    };
 
    

    this.registerHandler('AfterFeatures', function(features, callback) {

        reporter.generate(options);


        callback();
    });
};

module.exports = hooks;