package com.autoloan.loanprocessing.service.groovy

import com.autoloan.loanprocessing.entities.Application
import com.autoloan.loanprocessing.entities.Branch
import com.autoloan.loanprocessing.entities.User
import com.autoloan.loanprocessing.exception.ALPException
import com.autoloan.loanprocessing.model.LoanApplication
import com.autoloan.loanprocessing.repository.ApplicationRepository
import com.autoloan.loanprocessing.repository.UserRepository
import com.autoloan.loanprocessing.service.impl.LoanApplicationService
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation.ComponentScan
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories
import org.springframework.test.context.ContextConfiguration
import org.springframework.test.context.web.WebAppConfiguration
import spock.lang.Shared
import spock.lang.Specification

@WebAppConfiguration
@ComponentScan("com.autoloan.loanprocessing")
@EnableAutoConfiguration
@ContextConfiguration
@EnableMongoRepositories(basePackages = "com.autoloan.loanprocessing.repository")
class LoanApplicationServiceTest extends Specification{


    /**
     * LoanApplicationService Declaration
     */

    def loanApplicationService = new LoanApplicationService()


    /**
     * ApplicationRepository Declaration
     */
    private ApplicationRepository applicationRepository = Mock(ApplicationRepository)

    private UserRepository userRepository = Mock(UserRepository)

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

    // Will be instantiated only once for all the tests!
    def @Shared loanApplication = new LoanApplication()
    /**
     * Setting the User entity values across the class
     * @return
     */
    def setup() {
        loanApplication = new LoanApplication();
        userRepository = Mock(UserRepository)
        applicationRepository = Mock(ApplicationRepository)
        loanApplicationService.repository = applicationRepository
        loanApplicationService.userRepository = userRepository
        application = new Application()
        application.setApplicationId("20171100000071")
        application.setRequestedAmt(250000)
        application.setLoanTerm(3)
        user = new User()
        user.setUserName("Jerry")
        branch = new Branch()
        newapplication = new Application()
    }

    def "Check Save Loan Application With Valid Input" (){

        given:"The valid Loan Application is passed"
            application.setApplicationId("12345670")
            loanApplication.setApplication(application)
            loanApplication.setUser(user)
            Application savedApp = application
            loanApplicationService.saveLoanApplicationDetails(loanApplication) >> savedApp


        when:"The SaveLoanApplication function is executed"
            def app = loanApplicationService.saveLoanApplicationDetails(loanApplication)

        then:"New Account Id is generated"
           savedApp.getApplicationId() == "20171100000071"
    }

    def "Check Save Loan Application With null Input and expect Exception" (){

        given:"The Empty Loan Application is applied"
        loanApplication = null
        loanApplicationService.saveLoanApplicationDetails(loanApplication)>> new ALPException("Loan Application is Empty/Blank")
        when:"The SaveLoanApplication function is executed"
        loanApplicationService.saveLoanApplicationDetails(loanApplication)

        then:"Exception is thrown"
        def e = thrown(ALPException)
        e.message == "Loan Application is Empty/Blank"
    }

    def "Check Save Loan Application With valid Loan Application data saves the correct user information" (){

        given:"The valid Loan Application is passed"
        application.setApplicationId("12345670")
        application.setUserName("Jerry")
        loanApplication.setApplication(application)
        loanApplication.setUser(user)
        Application savedApp = application
        loanApplicationService.saveLoanApplicationDetails(loanApplication) >> savedApp


        when:"The SaveLoanApplication function is executed"
        def app = loanApplicationService.saveLoanApplicationDetails(loanApplication)

        then:"User information is saved correctly"
        savedApp.getUserName() == "Jerry"
    }


}
