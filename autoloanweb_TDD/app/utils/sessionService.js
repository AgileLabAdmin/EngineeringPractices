angular.module('EZBank.utils', [])
    .service('sharedProperties', function () {
        var userId = '';
        var applicationId = "";
        var year="";
        var make="";
        var model = "";
        var loanAmt = "";
        var firstName = "";
        var lastName = "";
        var chatUserName = "";
        var chatEmail = "";
        var userInfo;
        var isPlatinumUser = "";
        var VIN = "";
        var acctInfo;
        var loginUrl = "/login";
        var loanUrl = "/loanapplication";
	    	var fetchZipCodeUrl = "/branchdetail?zipCode=";
	    	var accountDetailsUrl = "/accountdetail?applicationId=";
        //var vehicleDetailsUrl = "http://localhost:8080/loan/vehicledetail?vehicleMake=";
	    	var vehicleDetailsUrl = "/vehicledetail?vehicleMake=";
	    	var appIDUrl = "/username?userName=";
        
         var simulateLoanUrl = "/loanSimulator";
        var dealersUrl = "/dealerdetail?zipCode=";
        var refinanceUrl ="/refinance";
        var usedCarValueUrl = "/carvalue";
        var scheduleAppointmentUrl = "/representative?zipCode=";
        var loadModelsUrl = "/carlist";
        
        var loadCarModelsForMakeUrl = "/model?make=";

        // var chatServiceUrl = "http://api.agileinteractivelab.com/onlinechat/initiatechat/username?userName=";
        var chatServiceUrl = "http://52.36.65.251:8060/onlinechat/initiatechat/";

        var apiKey = "m2UXYzpvGjawvB2VxSm5o6nbJM5cl0zi5ebYceE2";
        var SimulatedLoanInfo;
        var DealersInfo;
        var RefinanceInfo;
        var UsedCarValInfo;
        var carModelInfo;


        return {
  getScheduleAppointmentUrl: function(){
                return scheduleAppointmentUrl;
            },

            setScheduleAppointmentUrl: function(value){
                scheduleAppointmentUrl = value;
            },
            getCarModelInfo: function(){
                return carModelInfo;
            },

            setCarModelInfo: function(value){
                carModelInfo = value;
            },
            
            getloadModelsUrl: function(){
                return loadModelsUrl;
            },

            setloadModelsUrl: function(value){
                loadModelsUrl = value;
            },
            
            getloadCarModelsForMakeUrl: function(){
                return loadCarModelsForMakeUrl;
            },

            setloadCarModelsForMakeUrl: function(value){
            	loadCarModelsForMakeUrl = value;
            },
            
            getRefinanceUrl: function(){
                return refinanceUrl;
            },

            setRefinanceUrl: function(value){
                refinanceUrl = value;
            },
            getUsedCarValueUrl: function(){
                return usedCarValueUrl;
            },

            setUsedCarValueUrl: function(value){
                usedCarValueUrl = value;
            },
            getDealerListUrl: function(){
                return dealersUrl;
            },

            setDealerListUrl: function(value){
                dealersUrl = value;
            },
            getSimulateLoanUrl: function(){
                return simulateLoanUrl;
            },

            setSimulateLoanUrl: function(value){
                simulateLoanUrl = value;
            },
            getChatServiceUrl: function(){
                return chatServiceUrl;
            },

            setChatServiceUrl: function(value){
                chatServiceUrl = value;
            },
        	getApiKey: function(){
                return apiKey;
            },

            setApiKey: function(value){
            	apiKey = value;
            },
            getAppIDUrl: function(){
                return appIDUrl;
            },

            setAppIDUrl: function(value){
                appIDUrl = value;
            },

            getVIN: function(){
                return VIN;
            },

            setVIN: function(value){
                VIN = value;
            },


            getVehicleDetailsUrl: function(){
                return vehicleDetailsUrl;
            },

            setVehicleDetailsUrl: function(value){
                vehicleDetailsUrl = value;
            },

			getFetchZipCodeUrl: function(){
                return fetchZipCodeUrl;
            },

            setFetchZipCodeUrl: function(value){
                fetchZipCodeUrl = value;
            },
           getAccountDetailsUrl: function(){
                return accountDetailsUrl;
            },

            setAccountDetailsUrl: function(value){
                accountDetailsUrl = value;
            },
            getLoginUrl: function(){
                return loginUrl;
            },

            getLoginUrl: function(){
                return loginUrl;
            },

            setLoginUrl: function(value){
                loginUrl = value;
            },

            getLoanUrl: function(){
                return loanUrl;
            },

            setLoanUrl: function(value){
                loanUrl = value;
            },

        	getIsPlatinumUser: function(){
        		return isPlatinumUser;
        	},

        	setIsPlatinumUser: function(value){
        		isPlatinumUser = value;
        	},

        	getUserInfo: function(){
        		return userInfo;
        	},
            setSimulatedLoanInfo: function(value){
                SimulatedLoanInfo = value;
            },
            getSimulatedLoanInfo: function(){
                return SimulatedLoanInfo;
            },
            setDealersInfo: function(value){
                DealersInfo = value;
            },
            getDealersInfo: function(){
                return DealersInfo;
            },
            setRefinanceInfo: function(value){
                RefinanceInfo = value;
            },
            getRefinanceInfo: function(){
                return RefinanceInfo;
            },
            setUsedCarValInfo: function(value){
                UsedCarValInfo = value;
            },
            getUsedCarValInfo: function(){
                return UsedCarValInfo;
            },
            
            setChatEmail: function(value){
                chatEmail = value;
            },
            getChatEmail: function(){
                return chatEmail;
            },
        	setChatUserName: function(value){
        		chatUserName = value;
        	},
            getChatUserName: function(){
                return chatUserName;
            },

        	setUserInfo: function(value){
        		userInfo = value;
        	},

        	getAcctInfo: function(){
        		return acctInfo;
        	},

        	setAcctInfo: function(value){
        		acctInfo = value;
        	},

            getUserId: function () {
                return userId;
            },
            setUserId: function(value) {
                userId = value;
            },
            getApplicationId: function () {
                return applicationId;
            },
            setApplicationId: function(value) {
                applicationId = value;
            },
            getYear: function () {
                return year;
            },
            setYear: function(value) {
                year = value;
            },
            getMake: function () {
                return make;
            },
            setMake: function(value) {
                make = value;
            },
            getModel: function () {
                return model;
            },
            setModel: function(value) {
                model = value;
            },
            getLoanAmt: function () {
                return loanAmt;
            },
            setLoanAmt: function(value) {
                loanAmt = value;
            },
            getFirstName: function () {
                return firstName;
            },
            setFirstName: function(value) {
                firstName = value;
            },
            getLastName: function () {
                return lastName;
            },
            setLastName: function(value) {
                lastName = value;
            }
            
            
        };
    });