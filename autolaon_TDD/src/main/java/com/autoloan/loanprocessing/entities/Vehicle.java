package com.autoloan.loanprocessing.entities;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "vehicle")
public class Vehicle {
	@Id
	private String id;
	private Integer vehicleId;
	private String vehicleType;
	private int vehicleYear;
	private String vehicleMake;
	private String vehicleModel;
	private String vehIdentNo;
	private Integer estimatedValue;
	private String approxMileage;
	private String regState;
	private String transactionType;
	private String sellerName;
	private String sellerAddress;
	private String street;
	private String city;
	private String state;
	private String zipCode;

	public Integer getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(Integer vehicleId) {
		this.vehicleId = vehicleId;
	}

	public String getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}

	public int getVehicleYear() {
		return vehicleYear;
	}

	public void setVehicleYear(int vehicleYear) {
		this.vehicleYear = vehicleYear;
	}

	public String getVehicleMake() {
		return vehicleMake;
	}

	public void setVehicleMake(String vehicleMake) {
		this.vehicleMake = vehicleMake;
	}

	public String getVehicleModel() {
		return vehicleModel;
	}

	public void setVehicleModel(String vehicleModel) {
		this.vehicleModel = vehicleModel;
	}

	public String getVehIdentNo() {
		return vehIdentNo;
	}

	public void setVehIdentNo(String vehIdentNo) {
		this.vehIdentNo = vehIdentNo;
	}

	public Integer getEstimatedValue() {
		return estimatedValue;
	}

	public void setEstimatedValue(Integer estimatedValue) {
		this.estimatedValue = estimatedValue;
	}

	public String getApproxMileage() {
		return approxMileage;
	}

	public void setApproxMileage(String approxMileage) {
		this.approxMileage = approxMileage;
	}

	public String getRegState() {
		return regState;
	}

	public void setRegState(String regState) {
		this.regState = regState;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public String getSellerAddress() {
		return sellerAddress;
	}

	public void setSellerAddress(String sellerAddress) {
		this.sellerAddress = sellerAddress;
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

}
