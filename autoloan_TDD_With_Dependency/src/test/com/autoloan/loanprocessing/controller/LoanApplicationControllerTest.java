package test.com.autoloan.loanprocessing.controller;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import main.com.autoloan.loanprocessing.controller.LoanApplicationController;
import main.com.autoloan.loanprocessing.service.UserAuthendicationService;

public class LoanApplicationControllerTest {
	
	@InjectMocks
	private LoanApplicationController loanApplicationController = new LoanApplicationController();
	
	@Mock
	private UserAuthendicationService authendicationService = new UserAuthendicationService();
	
	@Before
	public void setup(){
		MockitoAnnotations.initMocks(this);
	}

	@Test
	public void checkPasswordStrengthReturnsFalseForEmptyPassword(){
		Boolean isStrong = loanApplicationController.checkPasswordStrength("");
		assertFalse(isStrong);
	}
	
	@Test
	public void checkUserAuthendicationForValidUserToReturnSuccess(){
		when(authendicationService.authendicateUser("testuser", "pass1234")).thenReturn(true);
		Boolean isValid = loanApplicationController.authendicateUser("testuser","pass1234");
		assertTrue(isValid);
	}

}
