package com.autoloan.loanprocessing;

import feature.loanapplication.LoanApplicationTest;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import com.autoloan.loanprocessing.controller.LoanApplicationControllerTest;
import com.autoloan.loanprocessing.service.LoanApplicationServiceTest;
import com.autoloan.loanprocessing.utilities.AutoloanHelperParameterizedTest;
import com.autoloan.loanprocessing.utilities.AutoloanHelperTest;

@RunWith(Suite.class)

@Suite.SuiteClasses({
   LoanApplicationControllerTest.class,
   LoanApplicationServiceTest.class,
   AutoloanHelperParameterizedTest.class,
   AutoloanHelperTest.class,
        com.autoloan.loanprocessing.controller.groovy.LoanApplicationControllerTest.class,
        com.autoloan.loanprocessing.service.groovy.LoanApplicationServiceTest.class,
        com.autoloan.loanprocessing.utilities.groovy.AutoloanHelperTest.class,
        LoanApplicationTest.class
})

public class AutoloanTestSuite {

}
