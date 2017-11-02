import com.autoloan.loanprocessing.controller.groovy.LoanApplicationControllerTest
import com.autoloan.loanprocessing.service.groovy.LoanApplicationServiceTest
import com.autoloan.loanprocessing.utilities.groovy.AutoloanHelperTest
import junit.framework.Test
import junit.textui.TestRunner
import org.junit.runner.RunWith
import org.junit.runners.Suite


@RunWith(Suite.class)
@Suite.SuiteClasses([
        LoanApplicationServiceTest.class,
        LoanApplicationControllerTest.class,
        AutoloanHelperTest.class,
])


class AutoloanTestSuite{

}