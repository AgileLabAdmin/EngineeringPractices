package com.autoloan.loanprocessing.utilities;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import com.autoloan.loanprocessing.entities.Application;
import com.autoloan.loanprocessing.entities.LoanApp;
import com.autoloan.loanprocessing.exception.ALPException;
import com.autoloan.loanprocessing.model.Applications;
import org.springframework.stereotype.Component;

@Component
public class AutoloanHelper {

	public String generateAccountNumber(String lastno) {
		
		int year = Calendar.getInstance().get(Calendar.YEAR);
		String month = String.format("%02d", Calendar.getInstance().get(Calendar.MONTH) + 1);
		if (lastno != null && lastno.length() > 0) {
			long newnum = Long.valueOf(lastno.substring(6, lastno.length())) + 1;
			return year + month + String.format("%08d", newnum);
		} else {
			return year + month + String.format("%08d", 1);
		}

	}
	
	public Applications getApplicationIdList(ArrayList<Application> apps){
		List<String> appIds = new ArrayList<>();
		Applications applications = new Applications();
		for(int i=0;i<apps.size();i++){
			appIds.add(apps.get(i).getApplicationId());
		}
		applications.setAppIds(appIds);
		return applications;
	}

	public Application buildAplication(String appId,String status, String type, String userName){
		Application application = new Application();
		application.setApplicationId("123456456");
		application.setApplicationStatus("Processing");
		application.setApplicationState("New");
		application.setUserName("Jerry Ryder");
		return application;
	}

	public String validateApplication(List<LoanApp> applications) {
		for (int i = 0; i < applications.size(); i++) {
			if (applications.get(i).getRequestedAmt() < 3000 || applications.get(i).getRequestedAmt() > 20000) {
				return applications.get(i).getApplicationId();
			}
		}
		return "";
	}
	
}
