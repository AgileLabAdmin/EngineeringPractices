package com.autoloan.loanprocessing.entities;

import java.math.BigInteger;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public class User {
	@Id
	private String id;
	private Integer uid;
	private String email;
	private String userName;
	private String firstName;
	private String lastName;
	private String initial;
	private String suffix;
	private String addTypePrevious;
	private String addTypePrimary;
	private String apartmentNo;
	private String street;
	private String city;
	private String state;
	private String zipCode;
	private int yearsAtCurrAdd;
	private int monthsAtCurrAdd;
	private String dateOfBirth;
	private Integer ssn;
	private boolean citizenOf;
	private boolean permanentResidence;
	private String housingStatus;
	private BigInteger monthlyPayment;
	private BigInteger annualIncome;
	private String phoneNo;
	private String otherIncome;
	private boolean anyPoliticalRelationship;
	
	

	public Integer getUid() {
		return uid;
	}

	public void setUid(Integer uid) {
		this.uid = uid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getInitial() {
		return initial;
	}

	public void setInitial(String initial) {
		this.initial = initial;
	}

	public String getSuffix() {
		return suffix;
	}

	public void setSuffix(String suffix) {
		this.suffix = suffix;
	}

	public String getAddTypePrevious() {
		return addTypePrevious;
	}

	public void setAddTypePrevious(String addTypePrevious) {
		this.addTypePrevious = addTypePrevious;
	}

	public String getAddTypePrimary() {
		return addTypePrimary;
	}

	public void setAddTypePrimary(String addTypePrimary) {
		this.addTypePrimary = addTypePrimary;
	}

	public String getApartmentNo() {
		return apartmentNo;
	}

	public void setApartmentNo(String apartmentNo) {
		this.apartmentNo = apartmentNo;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public int getYearsAtCurrAdd() {
		return yearsAtCurrAdd;
	}

	public void setYearsAtCurrAdd(int yearsAtCurrAdd) {
		this.yearsAtCurrAdd = yearsAtCurrAdd;
	}

	public int getMonthsAtCurrAdd() {
		return monthsAtCurrAdd;
	}

	public void setMonthsAtCurrAdd(int monthsAtCurrAdd) {
		this.monthsAtCurrAdd = monthsAtCurrAdd;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public Integer getSsn() {
		return ssn;
	}

	public void setSsn(Integer ssn) {
		this.ssn = ssn;
	}

	public boolean isCitizenOf() {
		return citizenOf;
	}

	public void setCitizenOf(boolean citizenOf) {
		this.citizenOf = citizenOf;
	}

	public boolean isPermanentResidence() {
		return permanentResidence;
	}

	public void setPermanentResidence(boolean permanentResidence) {
		this.permanentResidence = permanentResidence;
	}

	public String getHousingStatus() {
		return housingStatus;
	}

	public void setHousingStatus(String housingStatus) {
		this.housingStatus = housingStatus;
	}

	public BigInteger getMonthlyPayment() {
		return monthlyPayment;
	}

	public void setMonthlyPayment(BigInteger monthlyPayment) {
		this.monthlyPayment = monthlyPayment;
	}

	public BigInteger getAnnualIncome() {
		return annualIncome;
	}

	public void setAnnualIncome(BigInteger annualIncome) {
		this.annualIncome = annualIncome;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getOtherIncome() {
		return otherIncome;
	}

	public void setOtherIncome(String otherIncome) {
		this.otherIncome = otherIncome;
	}

	public boolean isAnyPoliticalRelationship() {
		return anyPoliticalRelationship;
	}

	public void setAnyPoliticalRelationship(boolean anyPoliticalRelationship) {
		this.anyPoliticalRelationship = anyPoliticalRelationship;
	}

	
}
