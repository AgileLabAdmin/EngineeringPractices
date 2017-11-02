'use strict';

angular
		.module('EZBank.newApplication', [ 'ngRoute' ])

		.config([ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/newApplication', {
				templateUrl : 'app/newApplication/newApplication.html',
				controller : 'newApplicationCtrl'
			});
		} ])



		.controller(
				'newApplicationCtrl',
				[
						'$scope',
						'autoLoanService',
						'$location',
						'sharedProperties',
						'toaster',
						'$http',
						function($scope, autoLoanService, $location,
								sharedProperties, toaster,$http) {

							// Personal Info
							$scope.firstName = "";
							$scope.lastName = "";
							$scope.caption = "";
							$scope.address1 = "";
							$scope.adress2 = "";
							$scope.city = "";
							$scope.state = "NJ";
							$scope.zipcode = "";
							$scope.isUS = "false";
							$scope.hasOtherResidence = "";
							$scope.yearLived = "";
							$scope.monthLived = "";
							$scope.primaryPhone = "";
							$scope.primaryPhoneType = "";
							$scope.secondaryPhone = "3138895248";
							$scope.secondaryPhoneType = "";
							$scope.email = "";
							$scope.housingStatus = "";
							$scope.monthlyPayment = "";
							$scope.annualIncome = "75000";
							$scope.DOB = "08/15/1984";
							$scope.SSN = "4582";
							$scope.usCitizen = "false";
							$scope.politician = "false";
							$scope.otherIncome = false;
							$scope.mapSrc = "";

							$scope.ownership = "";

							// Vechicle Info
							$scope.vehicleType = "New";
							$scope.year = "";
							$scope.make = "";
							$scope.model = "";
							$scope.VIN = "1HGCM82633A004352";
							$scope.estValue = "20000";
							$scope.milage = "150";
							$scope.regState = "NJ";
							$scope.transactionType = "Dealer";
							$scope.dealerName = "CRAINS HUNDAI";
							$scope.dealerAddress = "2001 US Highway 1";
							$scope.dealerCity = "Edison";
							$scope.delearState = "NJ";
							$scope.delearzipcode = "08817";
							$scope.loanAmt = "15000";
							$scope.term = "10";
							$scope.termYears = "5";
							$scope.isPlatinumUser = "";
							$scope.usedOutsideUS = "false";

							//Employee Details
							$scope.empStatus = "Employed";
							$scope.empType = "";
							$scope.empName = "Cognizant";
							$scope.jobTitle = "Manager";
							$scope.empAddressLine1 = "200 Somerset Corparate Blvd";
							$scope.empAddressLine2 = "";
							$scope.empPhone = "2078897458";
							$scope.empCity = "Bridgewater";
							$scope.empState = "NJ";
							$scope.empZipCode = "08807";

							$scope.empYear = "5";
							$scope.empMonth = "2";

							//Branch Details

							  $scope.branchName="";
							  $scope.contactPerson = "";
							  $scope.branchApartmentNo = "";
							  $scope.branchStreet = "";
							  $scope.branchCity = "";
							  $scope.branchState = "";
							  $scope.branchZip = "";
							  $scope.branchPhone = "";
							  $scope.branchAddress = "";

							  	$scope.zip1 = true;
								$scope.zip2 = false;
								$scope.zip3 = false;
								$scope.zip4 = false;
								$scope.zip5 = false;

                            $scope.montlyIncome ="";

							$scope.carModels = {
								     availableOptions: []
								 };

								 $scope.modelList = {
								     availableOptions: []};



							$scope.prePopulateUserInfo = function() {

								 
								$scope.showPersonalTab();

								$scope.userInfo = sharedProperties
										.getUserInfo();

								// Personal Info
								sharedProperties
										.setIsPlatinumUser($scope.userInfo.platinum);
								sharedProperties.setUserId($scope.userInfo.uid);
								$scope.isPlatinumUser = sharedProperties
										.getIsPlatinumUser();

								$scope.firstName = $scope.userInfo.firstName;
								$scope.lastName = $scope.userInfo.lastName;
								$scope.caption = $scope.userInfo.suffix;
								$scope.primaryPhone = $scope.userInfo.phoneNo;
								$scope.email = $scope.userInfo.email;
								$scope.politician = $scope.userInfo.anyPoliticalRelationship;

								$scope.address1 = $scope.userInfo.apartmentNo;
								$scope.address2 = $scope.userInfo.street;
								$scope.city = $scope.userInfo.city;
								$scope.state = $scope.userInfo.state;
								$scope.zipcode = $scope.userInfo.zipCode;
								$scope.isUS = $scope.userInfo.permanentResidence;
								$scope.hasOtherResidence = "";
								$scope.yearLived = $scope.userInfo.yearsAtCurrAdd;
								$scope.monthLived = $scope.userInfo.monthsAtCurrAdd;
								$scope.housingStatus = $scope.userInfo.housingStatus;
								$scope.monthlyPayment = $scope.userInfo.monthlyPayment;
								$scope.annualIncome = $scope.userInfo.annualIncome;
								//$scope.DOB = $scope.userInfo.dateOfBirth;
								$scope.SSN = $scope.userInfo.ssn;
								$scope.usCitizen = $scope.userInfo.citizenOf;

								
							};

                            $scope.calculateMonthlyIncome = function(annualIncome){
                            						        $scope.montlyIncome =  annualIncome/12;
                            						    }

							$scope.savePersonelInfo = function() {
								$scope.userId = sharedProperties.getUserId();
								sharedProperties.setYear($scope.year);
								sharedProperties.setMake($scope.make);
								sharedProperties.setModel($scope.model);
								sharedProperties.setLoanAmt($scope.loanAmt);
								sharedProperties.setFirstName($scope.firstName);
								sharedProperties.setLastName($scope.lastName);

                                    $scope.Application = {
									"application" : {
										"uid" : sharedProperties.getUserId(),
										"userName" : sharedProperties.getUserId(),
										"requestedAmt" : $scope.loanAmt,
										"loanTerm":  $scope.term,
										"loanYearPeriod":  $scope.termYears,

										"ownerShip":  $scope.ownership,
										"applicationStatus" : "Submitted",
										"vehicle" : {
											"vehicleId" : '45612',
											"vehicleType" :  $scope.vehicleType,
											"vehicleYear" : $scope.year,
											"vehicleMake" : $scope.make,
											"vehicleModel" : $scope.model,
											"vehIdentNo" : $scope.VIN,
											"estimatedValue" : $scope.estValue,
											"approxMileage" : $scope.milage,
											"regState" : $scope.regState,
											"transactionType" : $scope.transactionType,
											"sellerName" : $scope.dealerName,
											"sellerAddress" : $scope.dealerAddress,
											"street" : $scope.dealerAddress,
											"city" : $scope.dealerCity,
											"state" : $scope.delearState,
											"zipCode" : $scope.delearzipcode

										}
									},
									"user" : {
										"uid" : sharedProperties.getUserId(),
										"email" : $scope.email,
										"userName" : sharedProperties.getUserId(),
										"firstName" : $scope.firstName,
										"lastName" : $scope.lastName,
										"initial" : "",
										"suffix" : $scope.caption,
										"addTypePrevious" : "null",
										"addTypePrimary" : "null",
										"apartmentNo" : $scope.address1,
										"street" : $scope.address2,
										"city" : $scope.city,
										"state" : $scope.state,
										"zipCode" : $scope.zipcode,
										"yearsAtCurrAdd" : $scope.yearLived,
										"monthsAtCurrAdd" : $scope.monthLived,
										//"dateOfBirth" : $scope.DOB,
										"dateOfBirth" : "1470096000",
										"ssn" : $scope.SSN,
										"citizenOf" : $scope.usCitizen,
										"permanentResidence" : $scope.isUS,
										"housingStatus" : $scope.housingStatus,
										"monthlyPayment" : $scope.monthlyPayment,
										"annualIncome" : $scope.annualIncome,
										"phoneNo" : $scope.primaryPhone,
										"otherIncome" : $scope.otherIncome,
										"anyPoliticalRelationship" : $scope.politician
									}
								}

								 console.log("New Application Controller - Loan URL: "+sharedProperties.getLoanUrl());
								 console.log("Request Input: "+JSON.stringify($scope.Application));
								autoLoanService
										.submitApplication($scope.Application,
												sharedProperties.getLoanUrl(),sharedProperties.getApiKey())
										.then(
												function(data, status, headers) {
												console.log("New Application Controller - Loan URL - Response Code: "+data.status);
          console.log("Response Data: "+JSON.stringify(data.data));
													sharedProperties
															.setAcctInfo(data.data);
													sharedProperties
															.setApplicationId(data.data.applicationId);
													$scope.showReview();

												},
												function(error) {
													console.log("New Application Controller - Loan URL - Response Code: "+error.status);
													console.log("Response Data"+JSON.stringify(error.data));
													toaster
															.pop('warning',
																	"Some problem occured. Please try after sometimes");
													toaster.toast.timeout = 800;
												})
							};

							$scope.showPersonalTab = function() {

								$("#tab1").show();
								$("#tab2").hide();
								$("#tab3").hide();
								$("#tab4").hide();
								$('#t1').addClass('active');
								$('#t2').removeClass();
								$('#t3').removeClass();
								$('#t4').removeClass();
							};

							$scope.showVehicleTab = function() {

								$("#tab1").hide();
								$("#tab2").show();
								$("#tab3").hide();
								$("#tab4").hide();
								$('#t1').removeClass();
								$('#t2').addClass('active');
								$('#t3').removeClass();
								$('#t4').removeClass();
								if($scope.zipcode!=""){
									$scope.fetchAddressByZipCode();
								}
							};

							$scope.showSummary = function() {
								$scope.getMap();
								$("#tab1").hide();
								$("#tab2").hide();
								$("#tab3").show();
								$("#tab4").hide();
								$('#t1').removeClass();
								$('#t2').removeClass();
								$('#t3').addClass('active');
								$('#t4').removeClass();
							}

							$scope.showReview = function() {
								$("#tab1").hide();
								$("#tab2").hide();
								$("#tab3").hide();
								$("#tab4").show();
								$('#t1').removeClass();
								$('#t2').removeClass();
								$('#t3').removeClass();
								$('#t4').addClass('active');

							}

                            $scope.getBankDetais = function(){
                                $http.get("http://localhost:9000//branchdetail?zipCode="+$scope.zipcode).then(function (data) {
                                        console.log("Request branchname: "+data.data.branchName);
                                              $scope.branchName=data.data.branchName;
                                              $scope.contactPerson = data.data.contactPerson;
                                              $scope.branchApartmentNo = data.data.apartmentNo;
                                              $scope.branchStreet = data.data.street;
                                              $scope.branchCity = data.data.city;
                                              $scope.branchState = data.data.state;
                                              $scope.branchZip = data.data.zipCode;
                                              $scope.branchPhone = data.data.phoneNo;
                                        });
                            }

							$scope.fetchAddressByZipCode = function() {
								 console.log("New Application Controller - Zip Code URL: "+sharedProperties.getFetchZipCodeUrl());
								 console.log("Request Input: "+$scope.zipcode);

								$scope.branchAddress = autoLoanService.fetchAddressFromZipcode($scope.zipcode);
								console.log("Request Output: "+$scope.branchAddress.branchName);
										/*.then(
												function(data, status, headers) {
												console.log("New Application Controller - Zip Code URL - Response Code: "+data.status);
          console.log("Response Data: "+JSON.stringify(data.data));
													  $scope.branchName=data.data.branchName;
													  $scope.contactPerson = data.data.contactPerson;
													  $scope.branchApartmentNo = data.data.apartmentNo;
													  $scope.branchStreet = data.data.street;
													  $scope.branchCity = data.data.city;
													  $scope.branchState = data.data.state;
													  $scope.branchZip = data.data.zipCode;
													  $scope.branchPhone = data.data.phoneNo;

													
												},
												function(error) {
													console.log("New Application Controller - Zip Code URL - Response Code: "+error.status);
													console.log("Response Data"+JSON.stringify(error.data));

													toaster
															.pop('warning',
																	"Some problem fetching nearest branch. Please try after sometimes");
													toaster.toast.timeout = 800;
												})*/
								
							};

							$scope.reviewApplication = function() {
								 console.log("New Application Controller - Account Details URL: "+sharedProperties.getAccountDetailsUrl());
								 console.log("Request Input: "+sharedProperties.getApplicationId());
								autoLoanService
										.fetchAccountDetails(
												sharedProperties
														.getApplicationId(),sharedProperties.getAccountDetailsUrl(),sharedProperties.getApiKey())
										.then(
												function(data, status, headers) {
													console.log("New Application Controller - Account Details URL - Reponse Code: "+data.status);
          console.log("Response Data: "+JSON.stringify(data.data));
													$location.path('/newAccount');

													$scope.acctInfo = data.data;
													sharedProperties.setAcctInfo($scope.acctInfo);
													sharedProperties
															.setApplicationId($scope.acctInfo.applicationId);


												},
												function(error) {
													console.log("New Application Controller - Account Details URL - Response Code: "+error.status);
													console.log("Response Data"+JSON.stringify(error.data));

													toaster
															.pop('warning',
																	"Some problem occured. Please try after sometimes");
													toaster.toast.timeout = 800;
												})
								
							};

							$scope.checkCitizen = function(key, value) {
								if (key == "pr") {
									$scope.isUS = value;
								}

								if (key == "other") {
									$scope.hasOtherResidence = value;
								}

								if (key == "usCitizen") {
									$scope.usCitizen = value;
								}

								if (key == "politician") {
									$scope.politician = value;
								}

								if (key == "vehicle") {
									$scope.vehicleType = value;
								}

								if(key == ""){
								   $scope.isUS  = null;
								}
							};

							$scope.checkPhoneType = function(key, value) {
								if (key == "pr") {
									$scope.primaryPhoneType = value;
								}

								if (key == "sc") {
									$scope.secondaryPhoneType = value;
								}

								
							};

							$scope.checkOtherIncome = function(value) {
								
									$scope.otherIncome = value;
								
							};

							$scope.employmentType = function(value) {
								
									$scope.empType = value;
								
							};

							$scope.ownership = function(value) {
								
								$scope.ownership = value;
							
						};

						$scope.setConsent = function(value) {
								
								$scope.disclosures = value;
							
						};


							
							$scope.CheckUsedOutsideUS = function(value) {
								
									$scope.usedOutsideUS = value;
								
							};

									$scope.getEmailId = function(value) {

                                    									$scope.email = value+"@ezbank.com";

                                    							};

							

							$scope.loadModels = function(make){
								$scope.make = make;

								 console.log("New Application Controller - Vehicle Details URL: "+sharedProperties.getVehicleDetailsUrl());
								 console.log("Request Input: "+$scope.make);
								autoLoanService
										.fetchCarModels($scope.make,sharedProperties.getVehicleDetailsUrl(),sharedProperties.getApiKey())
										.then(
												function(data, status, headers) {
												console.log("New Application Controller - Vehicle Details URL - Response Code: "+data.status);
												//console.log("Response Message: "+JSON.stringify(data.data.message));
												console.log("Response VehicleDetailList: "+JSON.stringify(data.data));
												//console.log("Response VehicleDetailList Embedded: "+JSON.stringify(data.data._embedded.vehicleDetails));
												
												//alert(data.data.message);
												
													$scope.modelList.availableOptions = data.data;
													//$scope.modelList.availableOptions = data.data._embedded.vehicleDetails;
													$scope.carModels = {
													     availableOptions: []
													 };
													for(var i=0;i<$scope.modelList.availableOptions.length;i++){
														if($scope.modelList.availableOptions[i].vehicleMake == make){
																$scope.carModels.availableOptions.push($scope.modelList.availableOptions[i]);
														}
													}

												},
												function(error) {
													console.log("New Application Controller - Vehicle Details URL - Response Code: "+error.status);
													console.log("Response Data"+JSON.stringify(error.data));

													toaster
															.pop('warning',
																	"Some problem occured. Please try after sometimes");
													toaster.toast.timeout = 800;
												})



								
							};


							$scope.loadMakes = function(model){
								 $scope.model = model;
							};

							$scope.getYear = function(year){
								 $scope.year = year;
							};

							$scope.getMap = function(){
								if($scope.zipcode == "08817"){
									$scope.zip1 = true;
									$scope.zip2 = false;
									$scope.zip3 = false;
									$scope.zip4 = false;
									$scope.zip5 = false;

								}
								if($scope.zipcode == "08904"){
									$scope.zip1 = false;
									$scope.zip2 = true;
									$scope.zip3 = false;
									$scope.zip4 = false;
									$scope.zip5 = false;
								}
								if($scope.zipcode == "48834"){
									$scope.zip1 = false;
									$scope.zip2 = false;
									$scope.zip3 = true;
									$scope.zip4 = false;
									$scope.zip5 = false;
								}
								if($scope.zipcode == "72712"){
									$scope.zip1 = false;
									$scope.zip2 = false;
									$scope.zip3 = false;
									$scope.zip4 = true;
									$scope.zip5 = false;
								}
								if($scope.zipcode == "07306"){
									$scope.zip1 = false;
									$scope.zip2 = false;
									$scope.zip3 = false;
									$scope.zip4 = false;
									$scope.zip5 = true;
								}
							};

							$scope.reset = function(){
								$scope.firstName = "";
							$scope.lastName = "";
							$scope.caption = "";
							$scope.address1 = "";
							$scope.adress2 = "";
							$scope.city = "";
							$scope.state = "";
							$scope.zipcode = "";
							$scope.isUS = "false";
							$scope.hasOtherResidence = "";
							$scope.yearLived = "";
							$scope.monthLived = "";
							$scope.primaryPhone = "";
							$scope.primaryPhoneType = "";
							$scope.secondaryPhone = "";
							$scope.secondaryPhoneType = "";
							$scope.email = "";
							$scope.housingStatus = "";
							$scope.monthlyPayment = "";
							$scope.annualIncome = "";
							$scope.DOB = "";
							$scope.SSN = "";
							$scope.usCitizen = "false";
							$scope.politician = "false";
							$scope.otherIncome = "false";
							$scope.mapSrc = "";

							//Employee Details
							$scope.empStatus = "";
							$scope.empType = "";
							$scope.empName = "";
							$scope.jobTitle = "";
							$scope.empAddressLine1 = "";
							$scope.empAddressLine2 = "";
							$scope.empPhone = "";
							$scope.empCity = "";
							$scope.empState = "";
							$scope.empZipCode = "";
							$scope.empYear = "";
							$scope.empMonth = "";
							};

							$scope.resetVehicle = function(){
						

							// Vechicle Info
								$scope.vehicleType = "New";
								$scope.year = "";
								$scope.make = "";
								$scope.model = "";
								$scope.VIN = "";
								$scope.estValue = "";
								$scope.milage = "";
								$scope.regState = "";
								$scope.transactionType = "";
								$scope.dealerName = "";
								$scope.dealerAddress = "";
								$scope.dealerCity = "";
								$scope.delearState = "";
								$scope.delearzipcode = "";
								$scope.loanAmt = "";
								$scope.term = "";
								$scope.termYears = "";
								$scope.isPlatinumUser = "";
								$scope.usedOutsideUS = "false";

						
							};

} ])

.directive('phoneInput', function($filter, $browser) {
    return {
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModelCtrl) {
            var listener = function() {
                var value = $element.val().replace(/[^0-9]/g, '');
                $element.val($filter('tel')(value, false));
            };

            // This runs when we update the text field
            ngModelCtrl.$parsers.push(function(viewValue) {
                return viewValue.replace(/[^0-9]/g, '').slice(0,10);
            });

            // This runs when the model gets updated on the scope directly and keeps our view in sync
            ngModelCtrl.$render = function() {
                $element.val($filter('tel')(ngModelCtrl.$viewValue, false));
            };

            $element.bind('change', listener);
            $element.bind('keydown', function(event) {
                var key = event.keyCode;
                // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
                // This lets us support copy and paste too
                if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)){
                    return;
                }
                $browser.defer(listener); // Have to do this or changes don't get picked up properly
            });

            $element.bind('paste cut', function() {
                $browser.defer(listener);
            });
        }

    };
})
.filter('tel', function () {
    return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 1:
            case 2:
            case 3:
                city = value;
                break;

            default:
                city = value.slice(0, 3);
                number = value.slice(3);
        }

        if(number){
            if(number.length>3){
                number = number.slice(0, 3) + '-' + number.slice(3,7);
            }
            else{
                number = number;
            }

            return ("(" + city + ") " + number).trim();
        }
        else{
            return "(" + city;
        }

    };
})

.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
})

.directive('allowPattern', [allowPatternDirective]);
                                   
function allowPatternDirective() {
    return {
        restrict: "A",
        compile: function(tElement, tAttrs) {
            return function(scope, element, attrs) {
        // I handle key events
                element.bind("keypress", function(event) {
                    var keyCode = event.which || event.keyCode; // I safely get the keyCode pressed from the event.
                    var keyCodeChar = String.fromCharCode(keyCode); // I determine the char from the keyCode.
          
          // If the keyCode char does not match the allowed Regex Pattern, then don't allow the input into the field.
                    if (!keyCodeChar.match(new RegExp(attrs.allowPattern, "i"))) {
            event.preventDefault();
                        return false;
                    }
          
                });
            };
        }
    };
};




