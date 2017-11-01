import com.autoloan.loanprocessing.controller.groovy.LoanApplicationControllerTest
import com.autoloan.loanprocessing.service.groovy.LoanApplicationServiceTest
import com.autoloan.loanprocessing.utilities.groovy.AutoloanHelperTest
import junit.framework.Test
import junit.textui.TestRunner
import org.junit.runner.RunWith
import org.junit.runners.Suite

/**
 * Created by qualityshepherd on 4/26/14.
 */

@RunWith(Suite.class)
@Suite.SuiteClasses([
        LoanApplicationServiceTest.class,
        LoanApplicationControllerTest.class,
        AutoloanHelperTest.class,
])


class AutoloanTestSuite{

}