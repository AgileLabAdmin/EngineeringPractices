package test.com.autoloan.loanprocessing.controller.groovy;

import main.com.autoloan.loanprocessing.controller.LoanApplicationController
import main.com.autoloan.loanprocessing.service.UserAuthendicationService;
import spock.lang.Ignore;
import spock.lang.Specification;

class LoanApplicationControllerTest extends Specification {

	private LoanApplicationController loanApplicationController = new LoanApplicationController();

	//Mocking UserAuthendicationSerivce
	private UserAuthendicationService userAuthendicationService = Mock(UserAuthendicationService);
	
	def  "Check User details is valid" (){

		given:"The valid user name and password"
			def userId = "testuser";
			def password = "pass1234";

		when:"The password strength is validated"
			//Setting up mocking behaviour
			userAuthendicationService.authendicateUser(userId,password) >> true
			def isValid = loanApplicationController.authendicateUser(userId,password);

		then:"It should validate the given password as not strong"
			isValid == true;
	}

}