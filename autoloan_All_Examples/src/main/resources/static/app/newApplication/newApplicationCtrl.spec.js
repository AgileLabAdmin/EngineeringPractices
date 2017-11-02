describe('NewApplicationCtrl', function() {

  var $controller,
      $scope,
      autoLaonService,
      autoLaonServiceMock,
      sharedProperties,
      autoLaonPromise,
       toaster,
        $route, $rootScope, $location, $httpBackend,
       compile;
 beforeEach(module('EZBank.services'));
  beforeEach(module('EZBank.utils'));
 beforeEach(module('EZBank.newApplication'));


  beforeEach(function () {

    module(function ($provide) {
     autoLaonService = jasmine.createSpyObj('autoLaonService',[
        'submitApplication',
    'validateUserInfo',
    'fetchAccountDetails',
    'fetchAddressFromZipcode',
    'fetchCarModels'

        ]);

         sharedProperties = jasmine.createSpyObj('sharedProperties',[
              'getUserId',
              'setUserId',
              'getFetchZipCodeUrl',
              'getApiKey'
              ]);
        sharedProperties.getApiKey.and.returnValue("1234");
        var result = {"branchId":100,"branchName":"Edison-Talmadge Branch","contactPerson":"Miller","phoneNo":"2078974000","apartmentNo":"Edison-Talmadge","street":"250 Talmadge Rd","city":"Edison","state":"New Jersey","zipCode":"08817"};
      $provide.value('autoLaonService', autoLaonService);
        $provide.value('sharedProperties', sharedProperties);

    });

     toaster =  jasmine.createSpyObj(toaster, ['success']);

  });


  beforeEach(
  inject(function($controller, $rootScope, $q , sharedProperties) {
    autoLaonPromise = $q.defer();

    autoLaonPromise.resolve('MOCK DATA');

    $scope = $rootScope.$new();

    $controller = $controller('newApplicationCtrl', {
      '$scope': $scope,
      'toaster': toaster,
      'autoLoanService':autoLaonServiceMock
    });
  }));


  beforeEach(function () {
    compile = function () {
      inject([
        '$compile',
        '$rootScope',
        function ($compile, $rootScope) {
          scope = $rootScope.$new();
          scope.testValue = testValue;
          element = angular.element('<input numbers-only ng-model="testValue"/>');
          $compile(element)(scope);
          $controller = element.controller('ngModel');
          scope.$digest();
        }
      ]);
    };
  });

    beforeEach(function(){
       inject(function($injector){
          $route = $injector.get('$route');
          $rootScope = $injector.get('$rootScope');
          $location = $injector.get('$location');
          $httpBackend = $injector.get('$httpBackend');

          $httpBackend.when('GET', 'app/newApplication/newApplication.html').respond('newApplication');
        });
      })

      it('should navigate to new application', function(){
          // navigate using $apply to safely run the $digest cycle
          $rootScope.$apply(function() {
            $location.path('/newApplication');
          });
          expect($location.path()).toBe('/newApplication');
          expect($route.current.templateUrl).toBe('app/newApplication/newApplication.html');
          expect($route.current.controller).toBe('newApplicationCtrl');
        })


   describe('Check the Numbersonly directive for ignoring alphabets', function () {
      beforeEach(function () {
        testValue = '123abc';
        compile();
        $controller.$setViewValue('123abc?');
      });
      it('should be defined', function () {
        expect(scope.testValue).toEqual('123');
      });
    });

  describe('checkCalculateMonthlyIncome', function(){
      it('The Monthly income should be calculated based on the annual income', function() {
          var annualincome = 72400;
          $scope.calculateMonthlyIncome(annualincome);
        //  expect($scope.montlyIncome).toBeCloseTo(6033.33,1);
       expect($scope.montlyIncome).toBeLessThan(6500);
      });
  })
 
  describe('checkCitizenInfo', function() {
/*key = "other"
key = "usCitizen"
key = "politician"
key = "vehicle"*/

   it('The Permanent Residence value should be set based on the user selection', function() {
    var key = "pr"
    var value = "No";
      $scope.checkCitizen(key,value);
      expect($scope.isUS).toBeDefined();
     
    });

    it('The Permanent Residence value should be set null if user selection is empty', function() {
        var key = ""
        var value = "";
          $scope.checkCitizen(key,value);
          expect($scope.isUS).toBeNull();

        });

   it('Has Other Residence value should be set based on the user selection', function() {
    var key = "other"
    var value = "No";
      $scope.checkCitizen(key,value);
      expect($scope.hasOtherResidence).toEqual("No");
     
    });

   it('US citizenship value should be set based on the user selection', function() {
    var key = "usCitizen"
    var value = "No";
      $scope.checkCitizen(key,value);
      expect($scope.usCitizen).toEqual("No");
     
    });

   it('Has political relationship value should be set based on the user selection', function() {
    var key = "politician"
    var value = "No";
      $scope.checkCitizen(key,value);
      expect($scope.politician).toEqual("No");
     
    });


   it('Vehicle type value should be set based on the user selection', function() {
    $scope.vehicleType = "";
    var key = "vehicle"
    var value = "New";
      $scope.checkCitizen(key,value);
      expect($scope.vehicleType).toEqual("New");
     
    });

       

  });

   describe('checkPhoneType', function() {

        it('Primary Phone type should be Home if Home option is selected', function() {
        $scope.primaryPhoneType = "";
        var key = "pr"
        var value = "home";
          $scope.checkPhoneType(key,value);
          expect($scope.primaryPhoneType).toEqual("home");
         
        });

        it('Primary Phone type should be Home if Work option is selected', function() {
        $scope.primaryPhoneType = "";
        var key = "pr"
        var value = "work";
          $scope.checkPhoneType(key,value);
          expect($scope.primaryPhoneType).toEqual("work");
         
        });

        it('Primary Phone type should be Home if Mobile option is selected', function() {
        $scope.primaryPhoneType = "";
        var key = "pr"
        var value = "mobile";
          $scope.checkPhoneType(key,value);
          expect($scope.primaryPhoneType).toEqual("mobile");
         
        });

   });

   describe('checkOtherIncome', function() {

      it('Do you have other income you like considered option should be true if Yes option selected', function() {
        $scope.otherIncome = "";
        var value = true;
          $scope.checkOtherIncome(value);
          expect($scope.otherIncome).toEqual(true);
            expect($scope.otherIncome).toBeTruthy();
        });

      it('Do you have other income you like considered option should be false if No option selected', function() {
        $scope.otherIncome = "";
        var value = false;
          $scope.checkOtherIncome(value);
          expect($scope.otherIncome).toEqual(false);
          expect($scope.otherIncome).toBeFalsy();
        });

   });

    describe('employmentType', function() {

       it('User details is not stored in SharedProperties',function(){
            expect(sharedProperties.getUserId()).toBeUndefined();
       })

       it('Get Email id for the given user id',function(){
        $scope.getEmailId("jerryryder")
        expect($scope.email).toMatch(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/);
       })

      it('Employment Type should be set to Employed', function() {
        $scope.empType = "";
        var value = "Employed";
          $scope.employmentType(value);
          expect($scope.empType).toEqual("Employed");
         
        });

      it('Employment Type should be set to Un Employed', function() {
        $scope.empType = "";
        var value = "Unemployed";
          $scope.employmentType(value);
          expect($scope.empType).toEqual("Unemployed");
         
        });

       it('Employment Type should be set to Student', function() {
        $scope.empType = "";
        var value = "Student";
          $scope.employmentType(value);
          expect($scope.empType).toEqual("Student");
         
        });

       it('Employment Type should be set to Retired', function() {
        $scope.empType = "";
        var value = "Retired";
          $scope.employmentType(value);
          expect($scope.empType).toEqual("Retired");
         
        });

   });

    describe('Testing Telephone Filter', function(){
      var telephoneFilter, $filter;

      beforeEach(function(){
        inject(function($injector){
          // usign $filter Provider
          $filter = $injector.get('$filter')('tel');
        });
      });

      it('should uppercase input', function(){
          expect($filter('3137750331')).toBe('(313) 775-0331');

      })
    })





});
 describe("Test Controller using autoloan service Testing Suite", function () {
       var $scope, mockAutoLoanService,toaster;

        beforeEach(module('EZBank.services'));
          beforeEach(module('EZBank.utils'));
         beforeEach(module('EZBank.newApplication'));
       // Inject the real autoLoanService
       beforeEach(inject(function ($controller, $rootScope, autoLoanService) {
           $scope = $rootScope.$new();

           // Set mockAutoLoanService equal to the real service code.
           mockAutoLoanService = autoLoanService;

           // Turn the mockStringService into a Jasmine spy and call a fake function that
           // basically does the same thing as the real one, but now this one is isolated
           // to just this test.
            var result = {"branchId":100,"branchName":"Edison-Talmadge Branch","contactPerson":"Miller","phoneNo":"2078974000",
            "apartmentNo":"Edison-Talmadge","street":"250 Talmadge Rd","city":"Edison","state":"New Jersey",
            "zipCode":"08817"};
           spyOn(mockAutoLoanService, "fetchAddressFromZipcode").and.throwError("Not a valid ZipCode")
           $controller("newApplicationCtrl", {$scope: $scope,  mockAutoLoanService: autoLoanService, toaster: toaster});
       }));

       it("should make a  call to autoloan service and throw error", function () {
          $scope.zipcode ="08817";
          $scope.zipUrl = "test";
           $scope.fetchAddressByZipCode();
           expect(mockAutoLoanService.fetchAddressFromZipcode).toThrowError("Not a valid ZipCode");
       });


   });

describe("HttpTestController Suite", function () {
    // Since we could be using $httpBackend in every test, we add a reference here.
    var $scope, $httpBackend,toaster;
    var result;
      beforeEach(module('EZBank.services'));
              beforeEach(module('EZBank.utils'));
             beforeEach(module('EZBank.newApplication'));

    // inject the $httpBackend service. Remember, if you want to use the same name
    // ($httpBackend) instead of renaming it, you'll need to wrap the injected service
    // in underscores so there isn't a naming conflict.
    beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
        $scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        $controller("newApplicationCtrl", {$scope: $scope,toaster: toaster});
        result = [{"data":{"branchId":100,"branchName":"Edison-Talmadge Branch","contactPerson":"Miller","phoneNo":"2078974000",
                             "apartmentNo":"Edison-Talmadge","street":"250 Talmadge Rd","city":"Edison","state":"New Jersey",
                             "zipCode":"08817"}}];
    }));


    it("should have all the reindeer available on $scope.reindeer", function () {
         $scope.zipcode ="08817";

        $httpBackend.expectGET("http://localhost:9000/branchdetail?zipCode="+$scope.zipcode).respond(result);

        $scope.getBankDetais();

        expect($scope.branchName).toContain("");
    });
});