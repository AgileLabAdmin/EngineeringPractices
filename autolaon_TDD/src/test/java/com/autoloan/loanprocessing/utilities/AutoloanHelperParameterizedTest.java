package com.autoloan.loanprocessing.utilities;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.Collection;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;


@RunWith(Parameterized.class) 
public class AutoloanHelperParameterizedTest {
	
	 private final String appId;  
	 private final String accountId;
	 
	 private AutoloanHelper autoloanHelper = new AutoloanHelper();
	 
	    public AutoloanHelperParameterizedTest(String appId,String accountId) {   
	        this.appId = appId;
	        this.accountId = accountId;
	    }
	 
	    @Parameters                    // => #3
	    public static Collection data(){
	        return Arrays.asList(new String[][] {
	                {"12345670","20171100000071"},{"12345671","20171100000072"}});
	    }

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {
			assertEquals("Expected Account id for AppId:"+appId+"is :"+accountId, accountId, autoloanHelper.generateAccountNumber(appId));
	}

}
