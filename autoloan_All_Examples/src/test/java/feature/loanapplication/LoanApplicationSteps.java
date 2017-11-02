package feature.loanapplication;

import com.autoloan.loanprocessing.controller.LoanApplicationController;
import com.autoloan.loanprocessing.entities.*;
import com.autoloan.loanprocessing.exception.ALPException;
import com.autoloan.loanprocessing.model.LoanApplication;
import com.autoloan.loanprocessing.repository.ApplicationRepository;
import com.autoloan.loanprocessing.repository.UserRepository;
import com.autoloan.loanprocessing.service.impl.LoanApplicationService;
import com.autoloan.loanprocessing.utilities.AutoloanHelper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;
import static org.hamcrest.core.IsNot.not;

@ContextConfiguration(locations={"classpath:/application-context.xml"})
@EnableAutoConfiguration(exclude={MongoAutoConfiguration.class, MongoDataAutoConfiguration.class})

public class LoanApplicationSteps {

     // Instantiates testing object instance of LoanApplication controller and
    // tries to inject fields annotated with @Mock
     @Autowired
     @InjectMocks
    private LoanApplicationController controller;

    // Creates mock instance of the LoanApplicationService
    @Autowired
    @InjectMocks
    private LoanApplicationService loanApplicationService;

    @Autowired
    private AutoloanHelper helper;

    // Creates mock instance of the ApplicationRepository
    @Mock
    private ApplicationRepository applicationRepository;

    // Creates mock instance of the UserRepository
    @Mock
    private UserRepository userRepository;
    // The MockMvc will mock all the Spring MVC infrastructure
    private MockMvc mockMvc;

    private User user = new User();

    private Application application = new Application();

    private Branch branch = new Branch();

    private Vehicle vehicle = new Vehicle();

    private Application result = new Application();

    private String alert = "";

    private LoanApplication loanApplication = new LoanApplication();

    private ArrayList<Application> loanApplications = new ArrayList<>();

    private List<LoanApp> loanApps = new ArrayList<>();

    private Application savedApplication = new Application();

    private String rejectedApp = "";

    @Given("As a User, when I provide the user name as '(.+)'")
    public void getuserNameToBeSearched(final String name){
        MockitoAnnotations.initMocks(this);
        application = helper.buildAplication("123456456","Received","New","Jerry Ryder");
        user.setUserName(name);

    }

    @When("^the given user name is searched for any loan application available for him$")
    public void runSearchForApplication() throws ALPException{
        Mockito.when(applicationRepository.findByUserName(user.getUserName())).thenReturn(application);
        result = controller.findByUserName(user.getUserName());
    }

    @Then("the system should not create another loan application for the user")
    public void returnFoundApplication() {
        assertThat(result.getUserName(),equalTo(user.getUserName()));
    }

    @Given("the user submits the loan application")
    public void receivedLoanApplication(){
        MockitoAnnotations.initMocks(this);
        loanApplication = null;

    }

    @When("^the loan application is empty with no details provided$")
    public void checkLoanApplicationIsValid(){
        try {
            controller.saveLoanApplicationDetails(loanApplication);
        }
        catch (ALPException e){
            alert = e.message;
        }

    }

    @Then("alert back the user the '(.+)'")
    public void returnAlertMessage(final String message) {

        assertThat(alert,equalTo(message));
    }

    @Given("For Auditing purpose")
    public void prepareForAuditing(){
        MockitoAnnotations.initMocks(this);
        loanApplication = new LoanApplication();
        application = new Application();
        user = new User();
        application.setApplicationId("123456456");
        application.setUid(12334);
        application.setApplicationStatus("Processing");
        application.setApplicationState("New");
        application.setUserName("Jerry Ryder");
        user.setUserName("Jerry Ryder");
        loanApplications.add(application);

        loanApplication = new LoanApplication();
        application = new Application();
        user = new User();
        application.setApplicationId("123456457");
        application.setUid(12334);
        application.setApplicationStatus("Processing");
        application.setApplicationState("New");
        application.setUserName("Mike Westley");
        user.setUserName("Mike Westley");
        loanApplications.add(application);

    }

    @When("^requested for getting all saved loan applications is received$")
    public void requestLoanApplicationList() throws ALPException{
        Mockito.when(applicationRepository.findAll()).thenReturn(loanApplications);
    }

    @Then("list of Loan applications should be provided")
    public void returnLoanApplicationList() throws ALPException{
        assertThat(controller.getAllLoanApplications().size(),not(0));
    }

    @Given("As a registered user '(.+)'")
    public void setupToReceiveData(final String name){
        user = new User();
        loanApplication = new LoanApplication();
        application = new Application();
        user.setUserName(name);
    }

    @When("^I provide ApplicationId as '(.+)' and status as '(.+)' and state as '(.+)' and user name as '(.+)'$")
    public void buildApplicationObject(final String appID,final String status, final String state, final String name){
        MockitoAnnotations.initMocks(this);
        user = new User();
        user.setUserName(name);
        savedApplication = helper.buildAplication(appID,status,state,name);
        loanApplication.setUser(user);
        loanApplication.setApplication(application);

    }

    @Then("the loan application should be saved successfully")
    public void saveLoanApplication() throws ALPException{

        Mockito.when(userRepository.insert(loanApplication.getUser())).thenReturn(user);
        Mockito.when(applicationRepository.insert(application)).thenReturn(application);
        Application newApp = new Application();
        newApp = controller.saveLoanApplicationDetails(loanApplication);
        assertThat(newApp,not(null));
    }

    @Given("^the following loan applications are applied$")
    public void the_following_loan_applications_are_applied(final List<LoanApp> applications) throws Throwable {
        loanApps = applications;
    }

    @When("^the system validates the application$")
    public void validateApplication() throws Throwable {
        rejectedApp = helper.validateApplication(loanApps);
    }

    @Then("^the application with id '(.+)' should be rejected$")
    public void rejectedApplicationCheck(final String id) throws Throwable {
        Assert.assertTrue(rejectedApp == id);
    }


}
