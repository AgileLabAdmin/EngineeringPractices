package com.autoloan.loanprocessing.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.*;

import java.math.BigInteger;
import java.util.ArrayList;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.test.context.junit4.SpringRunner;

import com.autoloan.loanprocessing.entities.Application;
import com.autoloan.loanprocessing.entities.Branch;
import com.autoloan.loanprocessing.entities.Loan;
import com.autoloan.loanprocessing.entities.User;
import com.autoloan.loanprocessing.entities.Vehicle;
import com.autoloan.loanprocessing.exception.ALPException;
import com.autoloan.loanprocessing.model.LoanApplication;
import com.autoloan.loanprocessing.repository.ApplicationRepository;
import com.autoloan.loanprocessing.repository.UserRepository;
import com.autoloan.loanprocessing.service.impl.LoanApplicationService;

@RunWith(SpringRunner.class)
@ComponentScan("com.autoloan.loanprocessing")
@EnableAutoConfiguration
@EnableMongoRepositories(basePackages = "com.autoloan.loanprocessing.repository")
public class LoanApplicationServiceTest {

	// Instantiates testing object instance of LoanApplication service and
	// tries to inject fields annotated with @Mock
	@InjectMocks
    private LoanApplicationService service;
	
	// Creates mock instance of the UserRepository
    @Mock
    private UserRepository userRepository;
    
    // Creates mock instance of the ApplicationRepository
    @Mock
    private ApplicationRepository applicationRepository;
	 
	private User user = new User();
	
	private Application application = new Application();
	
	
	private Branch branch = new Branch();
	
	private Vehicle vehicle = new Vehicle();
	
	String userName= "johnbecker";
	
	private LoanApplication loanApplication = new LoanApplication();
	
	/**
	 * @Before annotated class will be run before every test method execution
	 */
	@Before
	public void setUp() throws Exception {
		//initMocks() will initializes fields annotated with Mockito annotations like @Mock, @InjectMocks
		 MockitoAnnotations.initMocks(this);
		  
		//Stubbing User and application object
		user.setUid(12334);
		user.setEmail("johnbecker@xyz.com");
		user.setUserName("johnbecker");
		user.setFirstName("John");
		user.setLastName("Becker");
		user.setInitial("");
		user.setSuffix("Mr");
		user.setAddTypePrevious("");
		user.setAddTypePrimary("");
		user.setApartmentNo("12");
		user.setStreet("Oliver DR");
		user.setCity("Edison");
		user.setState("NJ");
		user.setZipCode("08817");
		user.setYearsAtCurrAdd(2);
		user.setMonthsAtCurrAdd(1);
		user.setDateOfBirth("1987/2/19");
		user.setSsn(12345678);
		user.setCitizenOf(true);
		user.setPermanentResidence(true);
		user.setHousingStatus("Rental");
		user.setMonthlyPayment(BigInteger.valueOf(3000));
		user.setAnnualIncome(BigInteger.valueOf(36000));
		user.setPhoneNo("12343546456");
		user.setOtherIncome("");
		user.setAnyPoliticalRelationship(false);
		
		application.setApplicationId("12345678");
		application.setApplicationStatus("Processing");
		application.setApplicationState("New");
		application.setUserName("johnbecker");
		application.setPendingWith("Reviewver");
		application.setOwnerShip("owner");
		application.setVehicle(vehicle);
		application.setUser(user);
		application.setBranch(branch);
		application.setRequestedAmt(8000);
		application.setLoanYearPeriod(36);
		application.setLoanTerm(3);

		loanApplication.setApplication(application);
		loanApplication.setUser(user);
	}

	/**
	 * Test method to assert the result of saveloanapplication function for valid input
	 * 
	 *
	 */
	@Test
	public void testSaveLoanApplicationWithValidInput() throws ALPException {
		when(service.saveLoanApplicationDetails(loanApplication)).thenReturn(application);
		assertSame(application.getApplicationId(), loanApplication.getApplication().getApplicationId());
		assertTrue(application.getApplicationId()== loanApplication.getApplication().getApplicationId());
	}
	
	/**
	 * 
	 * Test method to check saveloanapplication function for exception scenario
	 *
	 */
	@Test(expected = ALPException.class)
	public void testSaveLoanApplicationWithInValidInput() throws ALPException {
		loanApplication = null;
		when(service.saveLoanApplicationDetails(loanApplication)).thenThrow(new ALPException("Loan Application is Empty/Blank"));
		service.saveLoanApplicationDetails(loanApplication);
		verify(applicationRepository,never()).insert(any(Application.class));
	}
	
	/**
	 * 
	 * Test method to assert the saveloanapplication function for saving correct user details
	 *
	 */
	@Test
	public void verifySaveApplicationHasSavedCorrectUser() throws Exception {
		when(service.saveLoanApplicationDetails(loanApplication)).thenReturn(application);
		Application savedApp = service.saveLoanApplicationDetails(loanApplication);
			assertFalse(loanApplication.getUser().getUid() ==0);
		   assertEquals(application.getUid(), savedApp.getUid());
		   
	    }
	
	/**
	 * 
	 * Test method to verify that User Repository is been called from saveloanapplication function
	 *
	 */
	@Test
	public void verifyUserRepositoryCalledToSaveUser() throws Exception {
		when(userRepository.insert(loanApplication.getUser())).thenReturn(user);
		service.saveLoanApplicationDetails(loanApplication);
		    verify(userRepository).insert(any(User.class));
	    }
	
	/**
	 * 
	 * Test method to verify that Application Repository is been called once from saveloanapplication function
	 *
	 */
	@Test
	public void verifyApplicationRepositoryCalledToSaveApplication() throws Exception {
		when(applicationRepository.insert(loanApplication.getApplication())).thenReturn(application);
		service.saveLoanApplicationDetails(loanApplication);
		    verify(applicationRepository,times(1)).insert(any(Application.class));
		verify(applicationRepository,atLeast(1)).insert(any(Application.class));
		verify(applicationRepository).insert(application);
	    }
	
		
	/**
	 * 
	 * Test method to verify that Application Repository is been called from saveloanapplication function to get max application id
	 *
	 */
	@Test
	public void verifyApplicationRepositoryCalledToGetMaxApplicationId() throws Exception {
		Application maxAppId = new Application();
		maxAppId.setApplicationId("12345678");
		when(applicationRepository.findTopByOrderByApplicationIdDesc()).thenReturn(maxAppId);
		Application savedApp = applicationRepository.findTopByOrderByApplicationIdDesc();
		   assertThat(savedApp.getApplicationId()).isEqualTo("12345678");
	    }
	
	/**
	 * 
	 * Test method to check saveloanapplication function for exception scenario
	 *
	 */
	@Test(expected = ALPException.class)
	public void testEmptyApplicationIdthrowsException() throws ALPException {
		loanApplication.getApplication().setApplicationId("");
		Application maxAppId = new Application();
		maxAppId.setApplicationId("");
		when(service.saveLoanApplicationDetails(loanApplication)).thenThrow(new ALPException("Application is Empty/Blank"));
		service.saveLoanApplicationDetails(loanApplication);
	}

	/*@Test
	public void verifyApplicationRepositoryCalled() throws Exception {
		fail("The Functionality is yet to be discussed with BA");
	}*/
	@After
	public void tearDown() throws Exception {
		user = new User();
		application = new Application();
		loanApplication = new LoanApplication();
	}
}
