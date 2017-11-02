import com.autoloan.loanprocessing.controller.LoanApplicationControllerTest;
import com.autoloan.loanprocessing.service.LoanApplicationServiceTest;
import com.autoloan.loanprocessing.utilities.AutoloanHelperParameterizedTest;
import com.autoloan.loanprocessing.utilities.AutoloanHelperTest;
import feature.loanapplication.LoanApplicationTest;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)

@Suite.SuiteClasses({
    com.autoloan.loanprocessing.controller.groovy.LoanApplicationControllerTest.class,
    com.autoloan.loanprocessing.service.groovy.LoanApplicationServiceTest.class,
    com.autoloan.loanprocessing.utilities.groovy.AutoloanHelperTest.class
})

public class AutoloanATDDTestSuite {

}
