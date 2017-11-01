package com.autoloan.loanprocessing.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

public class LoanApp {

	private String applicationId;
	private String applicationStatus;

	private String userName;
	private Integer requestedAmt;
	private String applicationState;
	public String getApplicationId() {
		return applicationId;
	}

	public void setApplicationId(String applicationId) {
		this.applicationId = applicationId;
	}


	public String getApplicationStatus() {
		return applicationStatus;
	}

	public void setApplicationStatus(String applicationStatus) {
		this.applicationStatus = applicationStatus;
	}

	public String getApplicationState() {
		return applicationState;
	}

	public void setApplicationState(String applicationState) {
		this.applicationState = applicationState;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}



	public Integer getRequestedAmt() {
		return requestedAmt;
	}

	public void setRequestedAmt(Integer requestedAmt) {
		this.requestedAmt = requestedAmt;
	}


}
