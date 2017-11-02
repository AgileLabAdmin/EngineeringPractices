package feature.loanapplication;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "classpath:feature/loanapplication/loanapplication.feature"
        ,glue={"feature.loanapplication"}
        ,format = {"pretty"}
)
public class LoanApplicationTest {
}
