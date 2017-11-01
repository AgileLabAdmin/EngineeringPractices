package com.autoloan.loanprocessing.model;

import java.util.ArrayList;
import java.util.List;

public class Applications {
	private List<String> appIds = new ArrayList();

	public List<String> getAppIds() {
		return appIds;
	}

	public void setAppIds(List<String> appIds) {
		this.appIds = appIds;
	}
}
