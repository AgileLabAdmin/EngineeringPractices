package com.autoloan.loanprocessing.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "application")
public class Application {
	@Id
	private String id;
	private String applicationId;
	private Integer uid;
	private String applicationStatus;
	private String applicationState;
	private String userName;
	private String pendingWith;
	private String ownerShip;
	private Vehicle vehicle;
	private User user;
	private Branch branch;
	private Integer requestedAmt;
	private int loanYearPeriod;
	private int loanTerm;

	public String getApplicationId() {
		return applicationId;
	}

	public void setApplicationId(String applicationId) {
		this.applicationId = applicationId;
	}

	public Integer getUid() {
		return uid;
	}

	public void setUid(Integer uid) {
		this.uid = uid;
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

	public String getPendingWith() {
		return pendingWith;
	}

	public void setPendingWith(String pendingWith) {
		this.pendingWith = pendingWith;
	}

	public String getOwnerShip() {
		return ownerShip;
	}

	public void setOwnerShip(String ownerShip) {
		this.ownerShip = ownerShip;
	}

	public Vehicle getVehicle() {
		return vehicle;
	}

	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Branch getBranch() {
		return branch;
	}

	public void setBranch(Branch branch) {
		this.branch = branch;
	}

	public Integer getRequestedAmt() {
		return requestedAmt;
	}

	public void setRequestedAmt(Integer requestedAmt) {
		this.requestedAmt = requestedAmt;
	}

	public int getLoanYearPeriod() {
		return loanYearPeriod;
	}

	public void setLoanYearPeriod(int loanYearPeriod) {
		this.loanYearPeriod = loanYearPeriod;
	}

	public int getLoanTerm() {
		return loanTerm;
	}

	public void setLoanTerm(int loanTerm) {
		this.loanTerm = loanTerm;
	}

}
