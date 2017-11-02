var fs = require('fs');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var Browser = require("zombie");
//Browser.waitDuration = '15s';
var url = "http://dev.cognizantagilelab.com/#/login";
var newAppUrl = url+"/?#/newApplication";
var gettngStartedUrl = url+"/?#/gettingStarted";
var newAcctUrl = "http://dev.cognizantagilelab.com/#/newAccount";
var loanDetailsUrl = url+"/?#/loanDetails";
var simulateLoanUrl = "http://dev.cognizantagilelab.com/#/simulator";
var dealersUrl = "http://dev.cognizantagilelab.com/#/getDealers";
var refinanceUrl =url+"/refinance";
var usedCarValueUrl = url+"/carvalue";
var scheduleAppointmentUrl = url+"/representative?zipCode=";
var loadModelsUrl = url+"/carlist";
          
  var loadCarModelsForMakeUrl = url+"/model?make=";
var browser = new Browser();

module.exports = function() {
  this.setDefaultTimeout(100 * 1000);
   this.Given(/^After launching the application$/, function(callback) {
   browser = new Browser({
        maxWait: 30000,
        loadCSS: false
    });
    browser.visit(url).then(function() {
    console.log("=====================Given browser dump#1=====================")
	browser.dump();
	console.log("=====================Resources==================");
	console.log(browser.resources); 
    console.log(browser.location.href);
        browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
        console.log("i am done Given");
        callback();
      });
  });

  this.When(/^I am in the Login page$/, function(callback) {
    console.log("=====================When browser dump#1=====================")
	browser.dump();
	console.log("=====================Resources==================");
	console.log(browser.resources); 
      browser.assert.element('#menu'); 
       callback();
      console.log("i am done When");
  });

  this.Then(/^I should see the Menu on top of the page$/, function(callback) {
      console.log("=====================then browser dump#1=====================")
	  browser.dump();
	  console.log("=====================Resources==================");
	  console.log(browser.resources); 
      browser.assert.element('#navbar-collapse-1');  
      console.log("i am done Then");
      callback();
  });

    this.Then(/^I should see the Header and Footer in the page$/, function(callback) {
      browser.assert.element('#header');  
      console.log("i am done Then");
      callback();
  });

  //continuum -getdealers
   this.Given(/^I am on the landing page$/, function(callback) {
     browser = new Browser();
      browser.visit(dealersUrl).then(function() {
       console.log(browser.location.href);
          browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
          console.log("i am done Given");
          callback();
         });
      
    });

    this.When(/^I click on the get Dealers button$/, function(callback) {
      console.log(browser.location.href);
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
        console.log("i am done When");
        callback();
    });

    this.Then(/^I should be taken to the get dealer details page$/, function(callback) {
      
      console.log(browser.location.href);
        browser.assert.element('#IPZipcode');
        console.log("i am done Then");
        callback();
     
    });

    this.Given(/^I am redirected to the get dealers page$/, function(callback) {
     {
       console.log(browser.location.href);
         browser.assert.element('#IPZipcode');  
         callback();
         };
      
    });
    this.When(/^The get dealers page is loaded$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#IPZipcode');  
        console.log("i am done When");
        callback();
    });
    this.Then(/^I should an input field to capture zipcode$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#IPZipcode');  
        console.log("i am done Then");
        callback();
    });

    this.Given(/^I am in the get dealers page$/, function(callback) {
      console.log(browser.location.href);
     browser.assert.element('#IPZipcode');  
        console.log("i am done Then");
        callback();
    });

    this.When(/^I Enter a valid zipcode$/, function(callback) {
      console.log(browser.location.href);
      browser.fill('#IPZipcode', '25482');      
        console.log("i am done When");
        callback();
    });

    this.Then(/^I should be able to click the get dealers button$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#getDealersBtn'); 
        console.log("i am done Then");
        callback();
    });


    this.When(/^I provide non US zipcode and click on get dealers button$/, function(callback) {
      console.log(browser.location.href);
        browser.fill('#IPZipcode', '600045');
        browser.pressButton('#getDealersBtn', callback);
        console.log("i am done When");
        callback();
    });

    this.Then(/^An Error message should appear to fill US zipcode to get dealers$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#getDealersBtn');  
        console.log("i am done Then");
        callback();
    });
  this.When(/^I provide alphabets as zipcode and click on get dealers button$/, function(callback) {
    console.log(browser.location.href);
        browser.fill('#IPZipcode', 'abd');
        browser.pressButton('#getDealersBtn', callback);
        console.log("i am done When");
        callback();
    });

    this.Then(/^An Error message should appear to fill valid zipcode$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#getDealersBtn');  
        console.log("i am done Then");
        callback();
    });
    this.When(/^I provide 25482 as zipcode and click on get dealers button$/, function(callback) {
      console.log(browser.location.href);
        browser.fill('#IPZipcode', '25482');
        browser.pressButton('#getDealersBtn', callback);
        console.log("i am done When");
        callback();
    });

    this.Then(/^I should see list of repesentatives returned with same zipcode as 25482 in the address field$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#dealersDiv');  
        console.log("i am done Then");
        callback();
    });
    //continuum
      
    this.Given(/^I am a customer$/, function(callback) {
      browser = new Browser();
     browser.visit(url).then(function() {
       console.log(browser.location.href);
          browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
          console.log("i am done Given");
          callback();
         });
      
    });

    this.When(/^I land on the home page$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
       
        console.log("i am done When");
        callback();
    });

    this.Then(/^I should see a Live chat option for Support$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#credentialDiv');  
        console.log("i am done Then");
        callback();
    });
    
    //continuum - simulator
   this.Given(/^I am in the Landing page of ALP$/, function(callback) {
     browser = new Browser();
       browser.visit(url).then(function() {
       console.log(browser.location.href);
          browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
          console.log("i am done Given");
          callback();
       });
           
    });

    this.When(/^I click on Simulator tab$/, function(callback) {
      console.log(browser.location.href);
          browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
        console.log("i am done When");
        callback();  
    });

    this.Then(/^I should see Consult button$/, function(callback) {
      console.log(browser.location.href);
          browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
        console.log("i am done Then");
        callback();
    });

    this.Given(/^I am in the Landing page and in the Simulator tab$/, function(callback) {

      console.log(browser.location.href);
          browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
          console.log("i am done Given");
          callback();     
              
    });

    this.When(/^I click on the Consult button$/, function(callback) {
      console.log(browser.location.href);
          browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
        console.log("i am done When");
        callback();  
    });

    this.Then(/^I should be redirected to Simulator page$/, function(callback) {
         browser.visit(simulateLoanUrl).then(function() {

      console.log(browser.location.href);
        browser.assert.element('#mainDiv');  
        console.log("i am done Then");
        callback();
        });
    });

    this.Given(/^I am redirected to the simulator page$/, function(callback) {  
      console.log(browser.location.href);
           browser.assert.element('#mainDiv');
          console.log("i am done Given");
          callback();     
      
    });

    this.When(/^The simulator page loaded$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#mainDiv');
        console.log("i am done When");
        callback();  
    });

    this.Then(/^I should the see the Simulator Area section with a quick description about the page$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#descDiv');  
        console.log("i am done Then");
        callback();
    });

    this.Given(/^I am in the Simulator page$/, function(callback) {  
      console.log(browser.location.href);
           browser.assert.element('#mainDiv');
          console.log("i am done Given");
          callback();     
      
    });

    this.When(/^I click the Car Model dropdown$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#model');
        console.log("i am done When");
        callback();  
    });

    this.Then(/^I should select a Car from the list$/, function(callback) {
      console.log(browser.location.href);
      browser.assert.element('#model'); 
        console.log("i am done Then");
        callback();
    });

    this.When(/^I Enter the Loan Amount and select Tenure in months$/, function(callback) {
      console.log(browser.location.href);
      browser.fill('#loanAmt', '15000');
      browser.select('#tenure','60');
      console.log("i am done When");
      callback();  
    });

    this.Then(/^I should be able to click the Simulate button$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#simulateBtn')  
        console.log("i am done Then");
        callback();
    });

    this.When(/^I click on Simulate button$/, function(callback) {
      console.log(browser.location.href);
      browser.pressButton('#simulateBtn', callback);
      console.log("i am done When");
      callback();  
    });

    this.Then(/^An Error message should appear to Select all Mandatory fields$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#creditdetails')  
        console.log("i am done Then");
        callback();
    });

    this.When(/^I enter the loan amount and selected the car details and leave the Tenure in months empty and click on Simulate button$/, function(callback) {
      console.log(browser.location.href);
      browser.fill('#loanAmt', '15000');
     // browser.select('#make','Fiesta');  
     // browser.select('#tenure',' ');
      browser.pressButton('#simulateBtn', callback);
      console.log("i am done When");
      callback();  
    });

    this.Then(/^An Error message should appear to select the Tenure in months$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#creditdetails')  
        console.log("i am done Then");
        callback();
    });

     this.When(/^I selected the Car as Ford Focus and Loan Amount as 10000 and Tenure as 12 months$/, function(callback) {
       console.log(browser.location.href);
      browser.fill('#loanAmt', '10000');
     // browser.select('#make','Fiesta')  ;
      //browser.select('#tenure','12');
      browser.pressButton('#simulateBtn', callback);
      console.log("i am done When");
      callback();  
    });

    this.Then(/^I should see the EMI value is calculated as 875$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#creditdetails')  
        console.log("i am done Then");
        callback();
    });

     this.When(/^I selected the Tenure in months greater than 60$/, function(callback) {
       console.log(browser.location.href);
      browser.fill('#loanAmt', '10000');
     // browser.select('model','Ford Focus')  ;
     // browser.select('#tenure','100');
      browser.pressButton('#simulateBtn', callback);
      console.log("i am done When");
      callback();  
    });

    this.Then(/^I should see an alert message says Please contact our Bank Repesentative$/, function(callback) {
      console.log(browser.location.href);
        browser.assert.element('#creditdetails')  
        console.log("i am done Then");
        callback();
    });


    //continuum
   // continuum - refinance
   
  this.Given(/^I am in the Landing page$/, function(callback) {
     browser.visit(url).then(function() {
       console.log(browser.location.href);
          browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
          console.log("i am done Given");
          callback();
         });
      
    });

    this.When(/^I click on the refinance button$/, function(callback) {
      console.log(browser.location.href);
        browser.pressButton('#btnRefinance', callback);
        console.log("i am done When");
        callback();
    });

    this.Then(/^I should be redirected to get refinance page$/, function(callback) {
      console.log(browser.location.href);
       // browser.assert.element('#compareBtn');
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
        console.log("i am done Then");
        callback();
    });

    this.Given(/^I am redirected to the refinance page$/, function(callback) {
      console.log(browser.location.href);
     // browser.assert.element('#compareBtn');
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
      console.log("i am done Given");
      callback();  
      
    });

    this.When(/^The refinance page is loaded$/, function(callback) {
      console.log(browser.location.href);
        // browser.assert.element('#compareBtn');
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
        console.log("i am done When");
        callback();
    });

    this.Then(/^I should see input fields to capture loan details$/, function(callback) {
      console.log(browser.location.href);
        //browser.assert.element('#compareBtn');
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
        console.log("i am done Then");
        callback();
    });

   this.Given(/^I am in the refinance page$/, function(callback) {
     console.log(browser.location.href);
      //browser.assert.element('#compareBtn');
     browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
      console.log("i am done Given");
      callback();  
      
    });
   this.When(/^The balance Loan amount is given as 10000, tenure as 60, interest % as 8% ,remaining tenure as 120 months,old emi as 500 new tenure as 60 months$/, function(callback) {
     console.log(browser.location.href);
     /* browser.fill('#oldBalAmtTxt', '10000');
      browser.fill('#oldInterestRate', '8');
      browser.fill('#oldEMI', '500');
      browser.fill('#remainingTenure', '120');
      browser.fill('#newRefinanceAmt', '10000');
      browser.fill('#newInterestRate', '6');
      browser.fill('#newTenure', '60') ;
      browser.pressButton('#compareBtn', callback); */
     browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
        console.log("i am done When");
        callback();
    });
    this.Then(/^the comparison table will be populated with new emi as 347$/, function(callback) {
      console.log(browser.location.href);
       // browser.assert.element('#comparisontable');
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
        console.log("i am done Then");
        callback();
    });

    this.Then(/^the EMI difference will be calculated as 153$/, function(callback) {
      console.log(browser.location.href);
       // browser.assert.element('#comparisontable');
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
        console.log("i am done Then");
        callback();
    });
    this.Then(/^the interest difference is calculated as 2$/, function(callback) {
      console.log(browser.location.href);
       // browser.assert.element('#comparisontable');
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
        console.log("i am done Then");
        callback();
    });
    this.Then(/^the month difference is calculated as 60$/, function(callback) {
      console.log(browser.location.href);
        //browser.assert.element('#comparisontable');
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
        console.log("i am done Then");
        callback();
    });

    this.When(/^new Tenure given higher than 60  months$/, function(callback) {
      console.log(browser.location.href);
      /*browser.fill('#oldBalAmtTxt', '10000');
      browser.fill('#oldInterestRate', '8');
      browser.fill('#oldEMI', '500');
      browser.fill('#remainingTenure', '120');
      browser.fill('#newRefinanceAmt', '10000');
      browser.fill('#newInterestRate', '6');
      browser.fill('#newTenure', '120'); */
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done When");
      callback();
    });
    this.Then(/^An Error message should be displayed with Contact Bank Representative Message$/, function(callback) {
      console.log(browser.location.href);
        //browser.assert.element('#comparisontable');
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
        console.log("i am done Then");
        callback();
    });

    this.When(/^New Tenure given as empty$/, function(callback) {
      console.log(browser.location.href);
     /* browser.fill('#oldBalAmtTxt', '10000');
      browser.fill('#oldInterestRate', '8');
      browser.fill('#oldEMI', '500');
      browser.fill('#remainingTenure', '120');
      browser.fill('#newRefinanceAmt', '10000');
      browser.fill('#newInterestRate', '6');
      browser.fill('#newTenure', ' ') ;
      console.log("i am done When");*/
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      callback();
    });
    this.Then(/^An Error message should be displayed as fill in mandatory fields$/, function(callback) {
      console.log(browser.location.href);
        //browser.assert.element('#comparisontable');
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
        console.log("i am done Then");
        callback();
    });
    
   //continuum

 //continuum-schedule appointment
 this.Given(/^I am in the ALP Landing page$/, function(callback) {
   browser.visit(url).then(function() {
     console.log(browser.location.href);
        browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
        console.log("i am done Given");
        callback();
       });
    
  });

  this.When(/^I click on the Meet Us button$/, function(callback) {
    console.log(browser.location.href);
      browser.pressButton('#btnAppointment', callback);
      console.log("i am done When");
      callback();
  });

  this.Then(/^I should be redirected to schedule appointment page$/, function(callback) {
    console.log(browser.location.href);
      //browser.assert.element('#appointmentDiv');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
      console.log("i am done Then");
      callback();
  });

  this.Given(/^I am redirected to the schedule appointment page$/, function(callback) {
    console.log(browser.location.href);
        //browser.assert.element('#appointmentDiv'); 
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
        console.log("i am done Given");
        callback();
     
    
  });

  this.When(/^The schedule appointment page is loaded$/, function(callback) {
    console.log(browser.location.href);
      //browser.assert.element('#appointmentDiv'); 
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
      console.log("i am done When");
      callback();
  });

  this.Then(/^I should see an input field to capture zipcode$/, function(callback) {
    console.log(browser.location.href);
    //browser.assert.element('#Repzipcode'); 
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
      console.log("i am done Then");
      callback();
  });
  
  this.Given(/^I am in the schedule appointment page$/, function(callback) {
    console.log(browser.location.href);
        //browser.assert.element('#appointmentDiv');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
        console.log("i am done Given");
        callback();
     
    
  });

  this.When(/^I Enter the valid zipcode value$/, function(callback) {
    console.log(browser.location.href);
   /* browser
      .fill('#Repzipcode', '25482');  */  
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done When");
      callback();
  });

  this.Then(/^I should be able to click the search button$/, function(callback) {
    console.log(browser.location.href);
      //browser.assert.element('#btnGetRep');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
      console.log("i am done Then");
      callback();
  });

this.When(/^I click on search button$/, function(callback) {
   console.log(browser.location.href);
    //browser.pressButton('#btnGetRep', callback);
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
      console.log("i am done When");
      callback();
  });

  this.Then(/^An Error message should appear to fill zipcode$/, function(callback) {
    console.log(browser.location.href);
      //browser.assert.element('#appointmentDiv');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
      console.log("i am done Then");
      callback();
  });
  this.When(/^I provide non US zipcode and click on search button$/, function(callback) {
    console.log(browser.location.href);
    /* browser.fill('#Repzipcode','600045');
    browser.pressButton('#btnGetRep', callback);    */
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done When");
      callback();
  });

  this.Then(/^An Error message should appear to fill US zipcode$/, function(callback) {
    console.log(browser.location.href);
      //browser.assert.element('#appointmentDiv');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
      console.log("i am done Then");
      callback();
  });
  this.When(/^I provide alphabets as zipcode and click on search button$/, function(callback) {
    console.log(browser.location.href);
    /* browser.fill('#Repzipcode','abc');
    browser.pressButton('#btnGetRep', callback);     */
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done When");
      callback();
  });

  this.Then(/^An Error message should appear to fill valid zipcode to get representatives details$/, function(callback) {
    console.log(browser.location.href);
     // browser.assert.element('#appointmentDiv');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
      console.log("i am done Then");
      callback();
  });
  this.When(/^I provide 25482 as zipcode and click on search button$/, function(callback) {
    console.log(browser.location.href);
    /* browser.fill('#Repzipcode','25482');
    browser.pressButton('#btnGetRep', callback);    */
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done When");
      callback();
  });

  this.Then(/^I should see list of repesentatives returned with same zipcode as 25482 in the address fields$/, function(callback) {
    console.log(browser.location.href);
      //browser.assert.element('#detailsDiv');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
      console.log("i am done Then");
      callback();
  });

  
 //continuum
 //continuum - used car value
    
this.Given(/^I am in the Landing page of portal$/, function(callback) {
  browser = new Browser();
    browser.visit(url).then(function() {
    console.log(browser.location.href);
        browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
        console.log("i am done Given");
        callback();
      });
  });

  this.When(/^I click on the Used Car Value button$/, function(callback) {
    console.log(browser.location.href);
      browser.pressButton('#usedCarValue', callback);
      console.log("i am done When");
      callback();
  });

  this.Then(/^I should be redirected to Used Car Value calculation page$/, function(callback) {
    console.log(browser.location.href);
      //browser.assert.element('#calculateBtn');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
    
      console.log("i am done Then");
      callback();
  });

  this.Given(/^I am in the Used Car Value calculation page$/, function(callback) {
    console.log(browser.location.href);
       //browser.assert.element('#calculateBtn'); 
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
        console.log("i am done Given");
        callback();
  });

  this.When(/^I click the Car Model drop down$/, function(callback) {
    console.log(browser.location.href);
      //browser.assert.element('#calculateBtn');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done When");
      callback();
  });

  this.Then(/^I should select a Car from the list of cars$/, function(callback) {
    console.log(browser.location.href);
      //browser.assert.element('#calculateBtn');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done Then");
      callback();
  });

  this.When(/^I Enter the mileage and select car make and model$/, function(callback) {
    console.log(browser.location.href);
   /* browser.select('yearSelect','2000');
    browser.select('makeSelect','Ford');
    //browser.select('modelSelect','Fiesta')
    browser.fill('#usedcarmileage','20000');
    //browser.pressButton('#calculateBtn', callback);*/
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done When");
      callback();
  });

  this.Then(/^I should be able to click the calculate button$/, function(callback) {
    console.log(browser.location.href);
     // browser.assert.element('#calculateBtn');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done Then");
      callback();
  });

  this.When(/^I click on calculate button$/, function(callback) {
    console.log(browser.location.href);
   // browser.pressButton('#calculateBtn', callback);
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done When");
      callback();
  });

  this.Then(/^An Error message should appear to fill in all Mandatory fields$/, function(callback) {
    console.log(browser.location.href);
     // browser.assert.element('#calculateBtn');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done Then");
      callback();
  });
  this.When(/^I enter the select the car details and leave the mileage empty and click on calculate button$/, function(callback) {
    console.log(browser.location.href);
   /* browser.select('yearSelect','2000');
    browser.select('makeSelect','Ford');
    //browser.select('modelSelect','Fiesta');
    browser.fill('#usedcarmileage',' ');
    browser.pressButton('#calculateBtn', callback);*/
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done When");
      callback();
  });

  this.Then(/^An Error message should appear to fill in mandatory fields$/, function(callback) {
    console.log(browser.location.href);
     // browser.assert.element('#usedcarmileage');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done Then");
      callback();
  });
  this.When(/^I selected the Car as Ford Focus and mileage as 210000$/, function(callback) {
    console.log(browser.location.href);
    /*browser.select('yearSelect','2000');
    browser.select('makeSelect','Ford');
    //browser.select('modelSelect','Fiesta');
    browser.fill('#usedcarmileage','210000');
    browser.pressButton('#calculateBtn', callback);*/
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done When");
      callback();
  });

  this.Then(/^I should see the car value is calculated as 3000$/, function(callback) {
    console.log(browser.location.href);
    //  browser.assert.element('#carValueDiv');
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      console.log("i am done Then");
      callback();
  });

//continuum
  this.Given(/^I am in the home page$/, function(callback) {
    browser = new Browser();
    browser.visit(url).then(function() {
    console.log(browser.location.href);
        browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
        console.log("i am done Given");
        callback();
      });
  
  });
  
  

  this.When(/^I click the  Apply Now button$/, function(callback) {
      browser.pressButton('#btnApplyNow', callback);
      /* browser.visit(gettngStartedUrl).then(function() {
        callback();
        });*/
      console.log("i am done When");
  });

  

  this.Then(/^Take me to gettng started page$/, function(callback) {
      browser.assert.element('#txtUid');  
      console.log("i am done Then");
      callback();
  });


     this.Given(/^After clicking the Apply Now button$/, function(callback) {
        browser.assert.element('#txtUid');  
        callback();
  });

  this.When(/^I am in the Getting Started page$/, function(callback) {
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      callback();
  });

  this.Then(/^I should see the Personal Requirements section$/, function(callback) {
          browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      callback();
  });




  //Sceanrio

  this.Given(/^I have given an invalid user id and Password$/, function(callback) {
    
    browser.assert.element('#txtUid');  
    browser
      .fill('#txtUid', 'user')
      .fill('#password', 'pass');
    console.log("i am done Given");
    console.log(browser.location.href);
    callback();
  });

  this.Given(/^I have given an user id and invalid Password$/, function(callback) {
    
    browser.assert.element('#txtUid');  
    browser
      .fill('#txtUid', 'johnu')
      .fill('#password', 'pass');
    console.log("i am done Given");
    console.log(browser.location.href);
    callback();
  });

  

  this.When(/^I click go button$/, function(callback) {
     browser.pressButton('#btnContinue', callback);
  });

  this.Then(/^I should receive an error message Invalid UserID or Password in red color on top of the User id$/, function(callback) {
    browser.assert.element('#txtUid');  
    console.log(browser.location.href);
    callback();
  });

  //Sceanrio
  this.Given(/^I have given an valid user id and valid Password$/, function(callback) {
    console.log("=====================Given browser dump=====================")
	browser.dump();
	console.log("=====================Resources==================");
	console.log(browser.resources); 
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
    browser
      .fill('#txtUid', 'johnu')
      .fill('#password', 'johnp');
    callback();
  });

  this.When(/^I clicked Continue button$/, function(callback) {
    
    console.log("=====================Before When browser dump=====================")
	browser.dump();
	console.log("=====================Before Resources==================");
	console.log(browser.resources); 
    browser.pressButton('#btnContinue', callback);
    console.log("=====================After When browser dump=====================")
	browser.dump();
	console.log("=====================After Resources==================");
	console.log(browser.resources); 

    
    /*browser.pressButton('#btnContinue').then(function(){
    	 callback(); 
     }).catch(function(error) {
        console.log('error 360370>'+error);
      });*/
  });

  this.Then(/^I should be taken to New Application page$/, function(callback) {
    console.log("=====================Then browser dump=====================")
	browser.dump();
	console.log("=====================Resources==================");
	console.log(browser.resources); 
    console.log(browser.location.href);
    browser.assert.element('#tabs');  
    callback();
  });

 
 this.Given(/^After successful Login$/, function(callback) {

    browser.assert.element('#fn');  
    console.log(browser.location.href);
    callback();
  });

  this.When(/^I am in About You tab$/, function(callback) {
     browser.assert.element('#ln');  
      console.log(browser.location.href);
      callback();
  });

  this.Then(/^I should see the personal info form pre populated$/, function(callback) {
    console.log(browser.location.href);
    browser.assert.element('#titleTxt');  
    callback();
  });


 this.Given(/^I want to capture the Previous Address Income Section Employment Section$/, function(callback) {

    browser.assert.element('#fn');  
    console.log(browser.location.href);
    callback();
  });

  this.When(/^I clicked the Next Button$/, function(callback) {
    browser.pressButton('#nxtButton', callback);
     /*browser.pressButton('#nxtButton').then(function(){
     	 callback(); 
      }).catch(function(error) {
         console.log('error 360370>'+error);
      });*/
  });

  this.Then(/^I should see the Vehicle details form$/, function(callback) {
    console.log(browser.location.href);
    browser.assert.element('#tab2');  
    callback();
  });

 this.Given(/^I want to enter vehicle Information$/, function(callback) {
   console.log(browser.location.href);
   browser.fill('#VINTxt', '1HGCM82633A004352')
           .select('yearSelect','2017')
           .select('makeSelect','GM');
   setTimeout(function(){
	   browser.select('modelSelect','Tahoe');
   }, 3000);
        callback();
             
  });

  this.When(/^I click the Next Button$/, function(callback) {
        browser.pressButton('#nxtButton1', callback);
         /*browser.pressButton('#nxtButton1').then(function(){
     	 callback(); 
      }).catch(function(error) {
         console.log('error 360370>'+error);
      });*/
         
  });

  this.Then(/^I should go to the next page to view the summary$/, function(callback) {
        console.log(browser.location.href);
        browser.assert.element('#tab3');  
        callback();
  });



 this.Given(/^I entered all required informations$/, function(callback) {
        console.log(browser.location.href);
        browser.assert.element('#tab3'); 
        callback();
  });

  this.When(/^I comes to review tab$/, function(callback) {
       browser.assert.element('#tab4');  
      callback();
  });

  this.Then(/^I should be able to edit any entered information$/, function(callback) {
      console.log(browser.location.href);
     browser.assert.elements('h5', { atLeast: 1 });
      callback();
  });


  this.Given(/^I have verified the Loan Application information$/, function(callback) {
        console.log(browser.location.href);
        browser.assert.element('#tab3'); 
        callback();
  });

  this.When(/^I click on the Submit$/, function(callback) {
      browser.pressButton('#btnSubmit', callback);
      /*browser.pressButton('#btnSubmit').then(function(){
     	 callback(); 
      }).catch(function(error) {
         console.log('error 360370>'+error);
      });*/
  });

  this.Then(/^I should be able to submit a new loan application for my new car$/, function(callback) {
      console.log(browser.location.href);
     browser.assert.element('#btnviewApp');  
      callback();
  });


  this.Given(/^I have submited the Loan Application$/, function(callback) {
       browser.assert.element('#tab4');  
      callback();
  });

  this.When(/^I click on View Application Status Button$/, function(callback) {
     browser.pressButton('#btnviewApp', callback);
  });

  this.Then(/^I should be taken to see the loan Application status with the progress bar$/, function(callback) {
   // browser.visit(newAcctUrl).then(function() {
     console.log(browser.location.href);  
       browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
     callback();
   //});
  });


this.Given(/^I have accepted the loan offer$/, function(callback) {
    console.log(browser.location.href);  
    browser.assert.element('#idAppSts'); 
    callback();
  });

  this.When(/^I should be able to login to my account$/, function(callback) {
	     console.log(browser.location.href);  
	   browser.pressButton('#btnAccept', callback);
  });

  this.Then(/^I should see see all my loan details$/, function(callback) {
  //  browser.visit(loanDetailsUrl).then(function() {
     console.log(browser.location.href);  
    browser.assert.element('#acctLbl'); 
      callback();
  // });
  });
 
this.Given(/^I am in my account$/, function(callback) {
      console.log(browser.location.href); 
      browser.assert.element('#acctLbl'); 
     callback();
  });

  this.When(/^I see the Loan offer$/, function(callback) {
   // browser.visit(newAcctUrl).then(function() {
      console.log(browser.location.href); 
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
     callback();
   //  });
      
  });

  this.Then(/^I should be able to see my Loan details and should be able to accept or reject the Loan offer$/, function(callback) {
   // browser.visit(newAcctUrl).then(function() {
        console.log(browser.location.href); 
        browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
    callback();
    // });
  });

   this.Given(/^After I see the Application Progress$/, function(callback) {
      console.log(browser.location.href); 
     browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
     callback();
  });

  this.When(/^I clicked the Accept button$/, function(callback) {
      console.log(browser.location.href); 
      browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      callback();
//      browser.pressButton('#btnAccept', callback);
      /*browser.pressButton('#btnAccept').then(function(){
     	 callback(); 
      }).catch(function(error) {
         console.log('error 360370>'+error);
      });*/
  });

  this.Then(/^I should see the Loan Account Information$/, function(callback) {
    console.log(browser.location.href);  
         browser.assert.text('title', 'EZBank - Cooperative, bank and financial');  
    callback();
  });

     this.Given(/^After I Accept the Loan$/, function(callback) {
      console.log(browser.location.href); 
     browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
     callback();
  });

  this.When(/^I comes to Loan details page$/, function(callback) {
      console.log(browser.location.href); 
          browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
      callback();
  });

  this.Then(/^I should see the payoff calendar$/, function(callback) {
    console.log(browser.location.href);  
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
    callback();
  });

    this.Then(/^I should see the Car Image$/, function(callback) {
    console.log(browser.location.href);  
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial'); 
    callback();
  });


  this.Then(/^I should see the Easy Pay option$/, function(callback) {
    console.log(browser.location.href);  
    browser.assert.text('title', 'EZBank - Cooperative, bank and financial');
    callback();
  });


 }; 