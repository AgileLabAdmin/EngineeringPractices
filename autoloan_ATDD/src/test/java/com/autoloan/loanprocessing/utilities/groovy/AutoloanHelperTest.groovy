package com.autoloan.loanprocessing.utilities.groovy

import com.autoloan.loanprocessing.utilities.AutoloanHelper
import spock.lang.Ignore
import spock.lang.IgnoreIf
import spock.lang.Specification

class AutoloanHelperTest extends Specification{

    def autoloanHelper = new AutoloanHelper()

    def testIgnore = false;

    def setup(){

    }

    def "Check the AccountNumber Generator with different inputs" (){
        // {"12345670","20171000000071"},{"12345671","20171000000072"}});
        expect:
        autoloanHelper.generateAccountNumber(appId) == accntNum

        where:
        appId|accntNum
        "12345670"|"20171100000071"
        "12345671"|"20171100000072"
        "12345681"|"20171100000082"
    }

    def "Check the AccountNumber Generator with expect and where condition" (){
        // {"12345670","20171000000071"},{"12345671","20171000000072"}});
        expect:
        autoloanHelper.generateAccountNumber(appId) == accntNum

        where:
        where:
        appId|accntNum
        "12345670"|"20171100000071"

    }

    def "Check the AccountNumber Generator with single input" (){
        given:"The valid Application id is passed"
            String appid = "12345670"

        when:"The SaveLoanApplication function is executed"
        autoloanHelper = Mock(AutoloanHelper)


        then:"New Account Id is generated"
            0 * autoloanHelper.generateAccountNumber(appid)
    }

    // The reason is optional, but a good practice:
    @Ignore('Have to verify equation with BA')
    def 'should not execute no matter what'() {
        expect:
        autoloanHelper.generateAccountNumber("12345670") == "20171100000071"
    }


}
