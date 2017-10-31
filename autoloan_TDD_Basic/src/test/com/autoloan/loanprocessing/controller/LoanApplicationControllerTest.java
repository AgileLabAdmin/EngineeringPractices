package test.com.autoloan.loanprocessing.controller;

import static org.junit.Assert.assertFalse;

import org.junit.Test;

import main.com.autoloan.loanprocessing.controller.LoanApplicationController;

public class LoanApplicationControllerTest {
	
	
	private LoanApplicationController loanApplicationController = new LoanApplicationController();

	@Test
	public void checkPasswordStrengthReturnsFalseForEmptyPassword(){
		Boolean isStrong = loanApplicationController.checkPasswordStrength("");
		assertFalse(isStrong);
	}

}
