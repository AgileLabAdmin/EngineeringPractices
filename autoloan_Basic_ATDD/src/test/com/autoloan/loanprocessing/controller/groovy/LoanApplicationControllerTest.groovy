package test.com.autoloan.loanprocessing.controller.groovy;

import main.com.autoloan.loanprocessing.controller.LoanApplicationController;
import spock.lang.Ignore;
import spock.lang.Specification;

class LoanApplicationControllerTest extends Specification {

	private LoanApplicationController loanApplicationController = new LoanApplicationController();
	
	def  "Check password Strength" (){

		given:"The password is given as empty value"
			def password = "";

		when:"The password strength is validated"
			def isStrong = loanApplicationController.checkPasswordStrength(password)

		then:"It should validate the given password as not strong"
			isStrong == false;
	}


}