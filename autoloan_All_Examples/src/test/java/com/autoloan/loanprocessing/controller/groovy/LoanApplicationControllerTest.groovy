package com.autoloan.loanprocessing.controller.groovy

import com.autoloan.loanprocessing.controller.LoanApplicationController
import com.autoloan.loanprocessing.entities.Application
import com.autoloan.loanprocessing.entities.Branch
import com.autoloan.loanprocessing.entities.User
import com.autoloan.loanprocessing.exception.ALPException
import com.autoloan.loanprocessing.model.LoanApplication
import com.autoloan.loanprocessing.repository.ApplicationRepository
import com.autoloan.loanprocessing.service.impl.LoanApplicationService
import groovy.json.JsonSlurper
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation.ComponentScan
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.context.web.WebAppConfiguration
import org.springframework.test.web.servlet.MockMvc
import spock.lang.Ignore
import spock.lang.Issue
import spock.lang.Narrative
import spock.lang.See
import spock.lang.Specification
import spock.lang.Subject
import spock.lang.Title

import static org.springframework.http.HttpStatus.OK
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.standaloneSetup

@WebAppConfiguration
@Title('This test will test documenting features of Spock Framework')
@Narrative('''
As a Developer using Spock Framework for testing,
I want to be see Specifications documented,
so that my Business Analyst understand what is this all about.
''')
class LoanApplicationControllerTest  extends Specification {



	/**
	 * LoanApplicationController Declaration
	 */
	// Clearly indicates System Under Test:
	def  @Subject loanApplicationController = new LoanApplicationController()
    MockMvc mockMvc = standaloneSetup(LoanApplicationController).build()

	/**
	 * LoanApplicationService Declaration
	 */

	private LoanApplicationService loanApplicationService = Mock(LoanApplicationService)


	/**
	 * ApplicationRepository Declaration
	 */
	private ApplicationRepository applicationRepository = Mock(ApplicationRepository)

	/**
	 * Application Entity Declaration
	 */
	private Application application

	/**
	 * Branch Entity Declaration
	 */
	private Branch branch

	/**
	 * User Entity Declaration
	 */
	private User user;

	private Application newapplication
	/**
	 * LoanApplication VO Declaration
	 */
	private LoanApplication loanApplication


	/**
 * Setting the User entity values across the class before test
 *
 */
	def setup() {
		loanApplicationService = Mock(LoanApplicationService)
		applicationRepository = Mock(ApplicationRepository)
		loanApplicationController.loanApplicationService = loanApplicationService
		loanApplicationController.applicationRepository = applicationRepository
		application = new Application()
		application.setApplicationId("20171000000071")
		application.setRequestedAmt(250000)
		application.setLoanTerm(3)
		loanApplication = new LoanApplication()
		user = new User()
		user.setUserName("Jerry")
		branch = new Branch()
		newapplication = new Application()
	}

	/**
	* Cleaning up after test
	 */
	def cleanup() {

	}

	@See('https://cognizantagilelab.atlassian.net/wiki/spaces/EP/overview#!spacehome')
	def  "The application id should be added to Application object"() {
		given:
		Application app = new Application()
		when:
		app.setApplicationId("12345678")
		then:
		"12345678" == app.getApplicationId()
	}

	def "Check Save Loan Application With Valid Input" (){

		given:"The valid Loan Application is applied"
		loanApplication.setApplication(application)
		loanApplication.setUser(user)
		Application savedApp = application
		loanApplicationService.saveLoanApplicationDetails(loanApplication) >> savedApp

		when:"The SaveLoanApplication function is executed"
		def expectedApp = loanApplicationController.saveLoanApplicationDetails(loanApplication)

		then:"New Account Id is generated"
		expectedApp.getApplicationId() == savedApp.getApplicationId();
	}

	@Issue('https://cognizantagilelab.atlassian.net/wiki/spaces/EP/overview#!spacehome')
	def "Check Save Loan Application For Exception handling" (){

		given:"The Empty Loan Application is applied"
		loanApplication = null
        loanApplicationController.saveLoanApplicationDetails(loanApplication)>> new ALPException("Loan Application is Empty/Blank")
		when:"The SaveLoanApplication function is executed"
		loanApplicationController.saveLoanApplicationDetails(loanApplication)

		then:"Exception is thrown"
        def e = thrown(ALPException)
        e.message == "Loan Application is Empty/Blank"
	}

	def "Check FindByUserName throw exception for invalid user" (){

		given:"The valid user name was sent"

		applicationRepository.findByUserName("Micheal") >> null
		applicationRepository.findByUserName("Jerry") >> application

		when:"The FindByUserName function is executed for Micheal"
		loanApplicationController.findByUserName("Micheal")

		then:"Exception is thrown"
		thrown(ALPException)

      when:"The FindByUserName function is executed for Jerry"
		loanApplicationController.findByUserName("Jerry")

		then:"Exception is not thrown"
            notThrown(ALPException)
	}

	def "Check Application Repository is not invoked if user name is empty" (){

		given:"The valid user name was sent"

		applicationRepository.findByUserName(null) >> null


		when:"The FindByUserName function is executed for Micheal"
		loanApplicationController.findByUserName(null)

		then:"Exception is thrown and application repository is never called"
        0 * applicationRepository.findByUserName(null)

        thrown(ALPException)

    }

    @Ignore('The Application should be running')
    def "username test hits the URL and parses JSON output"() {

        given:"The rest username url is hit"
        application.setApplicationId("34344453")
        application.setUserName("johnbecker")

        when: 'the username is passed as johnbecker'
        def response = mockMvc.perform(get("/username?userName='johnbecker'")).andReturn().response
        def content = new JsonSlurper().parseText(response.contentAsString)

        then: 'Loan Application controller correctly returned application in JSON'
        1 * loanApplicationController.findByUserName("johnbecker") >> application

        //Testing the HTTP Status code
        response.status == OK.value()

        //Showing how a contains test could work
        response.contentType.contains('application/json')
        response.contentType == 'application/json;charset=UTF-8'

        content.applicationId == "34344453"
        content.userName == 'johnbecker'
    }


}
