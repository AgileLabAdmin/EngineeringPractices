 (function(){
    'use strict';
        featureSteps(/Auto Loan Application/)

            .before(function(){
                              var $scope, $httpBackend,toaster,mockAutoLoanService;
                              var result;
                              module('EZBank.services');
                              module('EZBank.utils');
                              module('EZBank.newApplication');
                              inject(function ($controller, $rootScope, _$httpBackend_,autoLoanService) {
                                  mockAutoLoanService = autoLoanService;
                                  $scope = $rootScope.$new();
                                  $httpBackend = _$httpBackend_;
                                  $controller("newApplicationCtrl", {$scope: $scope,toaster: toaster,mockAutoLoanService:autoLoanService});
                                  result = [{"data":{"branchId":"100","branchName":"Edison-Talmadge Branch","contactPerson":"Miller","phoneNo":"2078974000",
                                                       "apartmentNo":"Edison-Talmadge","street":"250 Talmadge Rd","city":"Edison","state":"New Jersey",
                                                       "zipCode":"08817"}}];
                              });
                              this.$scope = $scope;
                              this.mockAutoLoanService = mockAutoLoanService;
                              this.result = result;
                              spyOn(this.mockAutoLoanService, "fetchAddressFromZipcode").and.returnValue(this.result );

                          })
           .given(/I selected primary phone number type as '(.*)' and respective value '(.*)'/, function(key,value){
                    this.key = key;
                    this.value = value
             })
            .when(/checkPhoneType method called/, function(){
                this.$scope.checkPhoneType( this.key,this.value )
            })

            .then(/the primaryPhoneType object should be saved with '(.*)'/, function(num){
                expect(this.$scope.primaryPhoneType).toBe(num);
            })


             .given(/I enter '(.*)' as my current zip code/, function(zipcode){
                this.$scope.zipcode =zipcode;
             })
            .when(/fetch Bank Details for zip code method is called/, function(){
                this.$scope.getBankDetais();
            })

            .then(/the bank name is '(.*)'/, function(bankName){
                expect(this.$scope.branchName).toBe("");
            })

             .given(/'(.*)' is my current zip code/, function(zipcode){
                              this.$scope.zipcode =zipcode;
                           })
                          .when(/fetch Bank Details for zip code service/, function(){
                               this.bankDetails = this.mockAutoLoanService.fetchAddressFromZipcode(this.$scope.zipcode);
                          })

                          .then(/the bank id is '(.*)'/, function(bankId){
                               expect(this.bankDetails).toBe(this.result);
                          })


    })();