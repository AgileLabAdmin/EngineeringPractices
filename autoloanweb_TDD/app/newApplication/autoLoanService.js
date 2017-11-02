angular.module('EZBank.services', [])
  .factory('autoLoanService', ['$http','$q',  function($http,$q) {
 var result = {"branchId":100,"branchName":"Edison-Talmadge Branch","contactPerson":"Miller","phoneNo":"2078974000",
            "apartmentNo":"Edison-Talmadge","street":"250 Talmadge Rd","city":"Edison","state":"New Jersey",
            "zipCode":"08817"};
  	  var submitApplication = function(application,url) {
      return $http({	
      	method: "POST",
        headers : {'Content-Type': 'application/json'},
        url: url,
        data:  application
      });
   }

   
   var usedCarModels = function(make,url) {
      return $http({  
        method: "GET",
        headers: {'Content-Type': 'application/json'},
        url: url+make
      });
   }
   var validateUserInfo = function(user,url) {
      return $http({	
      	method: "POST",
        headers: {'Content-Type': 'application/json'},
        url: url,
        data: user
      });
   }

   var fetchCarModels = function(make,url){

    return $http({  
        method: "GET",
        url: url+make,
      });
   }
	
	var fetchAccountDetails = function(applicationId,url){

    return $http({  
        method: "GET",
        url: url+applicationId,
      });
   }
  var fetchAddressFromZipcode = function(zipcode){

    return result;
   }


   var fetchAppIDfromUID = function(userId,url){
      return $http({  
        method: "GET",
        url: url+userId,
      });
   }

      var fetchChatUsername = function(user,url,apiKey) {
      return $http({  
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        url: url,
        data: user
      });
   }

   
   var getDealers = function(zipcode,url) {
      return $http({  
        method: "GET",
        headers: {'Content-Type': 'application/json'},
        url: url+zipcode
       
      });
   }

   var refinance = function(loanComparisonObj,url) {
      return $http({  
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        url: url,
        data: loanComparisonObj
       
      });
   }

   
   var scheduleAppointment = function(zipcode,url) {
      return $http({  
        method: "GET",
        headers: {'Content-Type': 'application/json'},
        url: url+zipcode
       
      });
   }

var simulateLoan = function(loanInfo,url) {
      return $http({  
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        url: url,
        data: loanInfo
       
      });
   }
   var loadModels = function(url) {
      return $http({  
        method: "GET",
        headers: {'Content-Type': 'application/json'},
        url: url
       
      });
   }

    var usedCarValue = function(make,model,year,mileage,url) {
      return $http({  
        method: "GET",
        headers: {'Content-Type': 'application/json'},
         url: url+"?make=" + make + "&model=" + model + "&year=" + year
    				+ "&mileage=" + mileage
       
      });
   }


     return {
      submitApplication: submitApplication,
      validateUserInfo : validateUserInfo,
	  fetchAccountDetails : fetchAccountDetails,
	  fetchAddressFromZipcode : fetchAddressFromZipcode,
    fetchCarModels:fetchCarModels,
    fetchAppIDfromUID:fetchAppIDfromUID,
    fetchChatUsername:fetchChatUsername,
    getDealers:getDealers,
    refinance:refinance,
    scheduleAppointment:scheduleAppointment,
    simulateLoan:simulateLoan,
    loadModels:loadModels,
    usedCarValue:usedCarValue,
    usedCarModels:usedCarModels

    };

}]);