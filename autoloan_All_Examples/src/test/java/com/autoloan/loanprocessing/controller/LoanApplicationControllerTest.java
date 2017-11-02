/**
 * 
 */
package com.autoloan.loanprocessing.controller;

import static org.junit.Assert.*;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.math.BigInteger;

import com.autoloan.loanprocessing.controller.LoanApplicationController;
import org.apache.catalina.filters.CorsFilter;
import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.autoloan.loanprocessing.entities.Application;
import com.autoloan.loanprocessing.entities.Branch;
import com.autoloan.loanprocessing.entities.User;
import com.autoloan.loanprocessing.entities.Vehicle;
import com.autoloan.loanprocessing.exception.ALPException;
import com.autoloan.loanprocessing.model.LoanApplication;
import com.autoloan.loanprocessing.repository.ApplicationRepository;
import com.autoloan.loanprocessing.service.impl.LoanApplicationService;
import com.google.gson.Gson;

/**
 * @author OneAgility Lab
 *
 */
@RunWith(SpringRunner.class)
@WebAppConfiguration
public class LoanApplicationControllerTest {

	// Instantiates testing object instance of LoanApplication controller and
	// tries to inject fields annotated with @Mock
	@InjectMocks
	private LoanApplicationController controller;

	// Creates mock instance of the LoanApplicationService
	@Mock
	private LoanApplicationService loanApplicationService;

	// Creates mock instance of the ApplicationRepository
	@Mock
	private ApplicationRepository applicationRepository;

	// The MockMvc will mock all the Spring MVC infrastructure
	private MockMvc mockMvc;

	private User user = new User();

	private Application application = new Application();

	private Branch branch = new Branch();

	private Vehicle vehicle = new Vehicle();

	String userName = "johnbecker";

	private LoanApplication loanApplication = new LoanApplication();


	/**
	 * @Before annotated class will be run before every test method execution
	 */
	@Before
	public void setUp() throws Exception {
		//initMocks() will initializes fields annotated with Mockito annotations like @Mock, @InjectMocks
		MockitoAnnotations.initMocks(this);
		
		//To initialize Spring MVC Infrastructure
		mockMvc = MockMvcBuilders.standaloneSetup(controller).addFilters(new CorsFilter()).build();
		
		//Stubbing User and application object
		user.setUid(12334);
		user.setUserName("johnbecker");
		user.setMonthlyPayment(BigInteger.valueOf(3000));
		user.setAnnualIncome(BigInteger.valueOf(36000));
		application.setApplicationId("123456456");
		application.setUid(12334);
		application.setApplicationStatus("Processing");
		application.setApplicationState("New");
		application.setUserName("johnbecker");
		application.setUser(user);
		application.setRequestedAmt(8000);
		application.setLoanYearPeriod(36);
		application.setLoanTerm(3);
		
		//stubbing loan application object to be used in the tests
		loanApplication.setApplication(application);
		loanApplication.setUser(user);

	}
	
	/**
	 * This test method is to test the Rest API call for the resource loanapplication with valid input
	 * return OK status
	 *
	 */
	@Test
	public void testLoanApplicationFuncitionwithValidRequest() throws Exception {

		String json = new Gson().toJson(loanApplication);
		this.mockMvc.perform(post("/loanapplication").contentType(MediaType.APPLICATION_JSON).content(json))
				.andExpect(status().isOk());

	}
	
	/**
	 * This test method is to test the Rest API call for the resource loanapplication with invalid input
	 * return 400 error code for invalid request format
	 *
	 */
	@Test
	public void testLoanApplicationFuncitionwithInValidRequest() throws Exception {
		loanApplication = null;
		String json = new Gson().toJson(loanApplication);
		this.mockMvc.perform(post("/loanapplication").contentType(MediaType.APPLICATION_JSON).content(json))
				.andExpect(status().is(400));

	}
	
	/**
	 * This test method is to test the loan application method 
	 * and asserting the result with JUnit assertion Same
	 *
	 */
	@Test
	public void testSaveLoanApplicationforValidInput() throws Exception {
		Application result = new Application();
		application.setApplicationId("34344453");
		when(loanApplicationService.saveLoanApplicationDetails(loanApplication)).thenReturn(application);
		result = this.controller.saveLoanApplicationDetails(loanApplication);
		assertSame(result.getApplicationId(), "34344453");

	}
	
	/**
	 * This test method is to test the loan application method 
	 * and verify the loanservice saveloanapplication method is called
	 * also assert that the method not returning null for valid input
	 */
	@Test
	public void testSaveLoanApplicationforValidInputReturnNotNull() throws Exception {
		application.setApplicationId("34344453");
		when(loanApplicationService.saveLoanApplicationDetails(loanApplication)).thenReturn(application);
		this.controller.saveLoanApplicationDetails(loanApplication);
		verify(loanApplicationService).saveLoanApplicationDetails(any(LoanApplication.class));
		assertNotNull(loanApplicationService.saveLoanApplicationDetails(loanApplication));
		assertSame(application,loanApplication.getApplication());
	}
	
	/**
	 * This test method is to test the loan application service is called when saveLoanApplication
	 * function of controller is called 
	 * 
	 */
	@Test
	public void testVerifyLoanApplicationServiceisCalled() throws Exception {
		application.setApplicationId("34344453");
		when(loanApplicationService.saveLoanApplicationDetails(loanApplication)).thenReturn(application);
		this.controller.saveLoanApplicationDetails(loanApplication);
		verify(loanApplicationService).saveLoanApplicationDetails(any(LoanApplication.class));
	}
	
	/**
	 * This test method is for checking exception scenario
	 * 
	 */
	@Test(expected = ALPException.class)
	public void testSaveLoanApplicationforValidException() throws Exception {
		loanApplication = null;
		when(controller.saveLoanApplicationDetails(loanApplication))
				.thenThrow(new ALPException("Loan Application is Empty/Blank"));
		this.controller.saveLoanApplicationDetails(loanApplication);
		assertNull(loanApplication);
	}

	/**
	 * This test the Rest API resource send OK response for valid input
	 * 
	 */
	@Ignore
	public void testFindApplicationByUserNamewithValiduserName() throws Exception {
		application.setApplicationId("34344453");
		application.setUserName("johnbecker");
		this.mockMvc.perform(get("/username?userName='johnbecker'").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk());

	}
	
	/**
	 * This test the Rest API resource send 400 error code response for invalid format input
	 * 
	 */
	@Test
	public void testFindApplicationByUserNamewithInvalidValiduserName() throws Exception {
		application.setApplicationId("34344453");
		application.setUserName("johnbecker");

		when(applicationRepository.findByUserName(userName)).thenReturn(application);
		this.mockMvc.perform(get("/username?username='johnbecker'").contentType(MediaType.APPLICATION_JSON))
				.andExpect(status().is(400));

	}
	
	/**
	 * This test the FindApplicationByUserName function for exception scenario
	 * 
	 */
	@Test(expected = ALPException.class)
	public void testFindApplicationByUserNamewithEmptyusername() throws Exception {
		loanApplication = null;
		when(controller.findByUserName(null)).thenThrow(new ALPException("Username is Empty/Blank"));
		this.controller.findByUserName(userName);
		assertNull(loanApplication);
	}

	/**
	 * This test the FindApplicationByUserName function with predefined value
	 * and Assert the result for not null and expected output
	 * 
	 */
	@Test
	public void testFindApplicationByUserNamewithValidusername() throws Exception {
		when(applicationRepository.findByUserName(userName)).thenReturn(application);
		this.controller.findByUserName(userName);
		assertNotNull(applicationRepository.findByUserName(userName));
		assertSame(application.getUserName(), userName);
		assertNotSame(application,loanApplication);
	}

	/**
	 * @throws java.lang.Exception
	 */
	@After
	public void tearDown() throws Exception {
		user = new User();
		application = new Application();
		loanApplication = new LoanApplication();
	}

}
