package test.features.passwordstrength;


import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import main.com.autoloan.loanprocessing.controller.LoanApplicationController;


public class PasswordStrengthSteps {

    private LoanApplicationController loanApplicationController = new LoanApplicationController();

    private String password = "";

    private Boolean isStrong = false;

    @Given("As a User, when I provide the password as empty string")
    public void getuserNameToBeSearched(){
        password = "";

    }

    @When("the system validate the strength of the password")
    public void runSearchForApplication(){
        isStrong = loanApplicationController.checkPasswordStrength(password);
    }

    @Then("it should return password is not strong")
    public void returnFoundApplication() {
        Assert.assertFalse(isStrong);
    }


}
