package com.autoloan.loanprocessing.utilities;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;

import com.autoloan.loanprocessing.entities.Application;
import com.autoloan.loanprocessing.model.Applications;

import javax.validation.constraints.AssertTrue;

@RunWith(SpringRunner.class)
public class AutoloanHelperTest {
	
	private AutoloanHelper autoloanHelperTest = new AutoloanHelper();
	
	private ArrayList<Application> applications = new ArrayList<Application>();
	
	private Application application = new Application();

	@Before
	public void setUp() throws Exception {
		 application = new Application();
		 applications = new ArrayList<Application>();
		 application.setApplicationId("12345670");
		 applications.add(application);
		
		 
	}
	

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testGetApplicationIdList() {
		List<String> appIds = new ArrayList<>();
		appIds.add("12345670");
		Applications apps = new Applications();
		apps.setAppIds(appIds);
		assertTrue(appIds.size()!=0);
		assertArrayEquals("The Applications Id are not same as expected",apps.getAppIds().toArray(),  autoloanHelperTest.getApplicationIdList(applications).getAppIds().toArray());
	}



}
