package test.features.authendicateuser;


import static org.mockito.Mockito.when;

import org.junit.Assert;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import main.com.autoloan.loanprocessing.controller.LoanApplicationController;
import main.com.autoloan.loanprocessing.service.UserAuthendicationService;


public class AuthendicateUserSteps {
	
	@InjectMocks
    private LoanApplicationController loanApplicationController = new LoanApplicationController();
	
	@Mock
    private UserAuthendicationService authendicationService = new UserAuthendicationService();

    private String userId = "";
	
	private String password = "";

    private Boolean isValid = false;
    
    @Before
    public void setup(){
    	MockitoAnnotations.initMocks(this);
    }
    
    @Given("^As a User, when I provide the user name as '(.+)' and password as '(.+)'$")
    public void getuserNameToBeSearched(String userId, String password){
    	this.userId = userId;
        this.password = password;

    }

    @When("^the system authenticate the above user details$")
    public void runSearchForApplication(){
    	when(authendicationService.authendicateUser(userId, password)).thenReturn(true);
        isValid = loanApplicationController.authendicateUser(userId, password);
    }

    @Then("^it should return successfully authenticated$")
    public void returnFoundApplication() {
        Assert.assertTrue(isValid);
    }


}
