package com.autoloan.loanprocessing.model;

import com.autoloan.loanprocessing.entities.Application;
import com.autoloan.loanprocessing.entities.User;

public class LoanApplication {
	private Application application;
	private User user;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Application getApplication() {
		return application;
	}

	public void setApplication(Application application) {
		this.application = application;
	}

}
