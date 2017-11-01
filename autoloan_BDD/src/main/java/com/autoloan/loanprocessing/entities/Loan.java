package com.autoloan.loanprocessing.entities;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "loan")
public class Loan {
	@Id
	private String id;
	private Integer loanId;
	private Integer loanAccntNo;
	private Integer requestedAmt;
	private String loanTermType;
	private int loanTerm;
	private Date loanstartdate;
	private int emi;
	private Date loanEndDate;
	private boolean fundsUsedOutsideUs;
	private int loanYearPeriod;
	private Date paymentDueDate;
	private Integer currentPaymentDue;
	private Integer totalPaymentDue;
	private Integer lastPayment;
	private Date receivedOn;
	private Date MaturityDate;
	private Integer payoffAmount;
	private Date goodEnough;
	private Integer interestPaid;
	private Date yearToDate;
	private Integer priorYear;
	private Application application;

	public Integer getLoanId() {
		return loanId;
	}

	public void setLoanId(Integer loanId) {
		this.loanId = loanId;
	}

	public Integer getLoanAccntNo() {
		return loanAccntNo;
	}

	public void setLoanAccntNo(Integer loanAccntNo) {
		this.loanAccntNo = loanAccntNo;
	}

	public Integer getRequestedAmt() {
		return requestedAmt;
	}

	public void setRequestedAmt(Integer requestedAmt) {
		this.requestedAmt = requestedAmt;
	}

	public String getLoanTermType() {
		return loanTermType;
	}

	public void setLoanTermType(String loanTermType) {
		this.loanTermType = loanTermType;
	}

	public int getLoanTerm() {
		return loanTerm;
	}

	public void setLoanTerm(int loanTerm) {
		this.loanTerm = loanTerm;
	}

	public Date getLoanstartdate() {
		return loanstartdate;
	}

	public void setLoanstartdate(Date loanstartdate) {
		this.loanstartdate = loanstartdate;
	}

	public int getEmi() {
		return emi;
	}

	public void setEmi(int emi) {
		this.emi = emi;
	}

	public Date getLoanEndDate() {
		return loanEndDate;
	}

	public void setLoanEndDate(Date loanEndDate) {
		this.loanEndDate = loanEndDate;
	}

	public boolean isFundsUsedOutsideUs() {
		return fundsUsedOutsideUs;
	}

	public void setFundsUsedOutsideUs(boolean fundsUsedOutsideUs) {
		this.fundsUsedOutsideUs = fundsUsedOutsideUs;
	}

	public int getLoanYearPeriod() {
		return loanYearPeriod;
	}

	public void setLoanYearPeriod(int loanYearPeriod) {
		this.loanYearPeriod = loanYearPeriod;
	}

	public Date getPaymentDueDate() {
		return paymentDueDate;
	}

	public void setPaymentDueDate(Date paymentDueDate) {
		this.paymentDueDate = paymentDueDate;
	}

	public Integer getCurrentPaymentDue() {
		return currentPaymentDue;
	}

	public void setCurrentPaymentDue(Integer currentPaymentDue) {
		this.currentPaymentDue = currentPaymentDue;
	}

	public Integer getTotalPaymentDue() {
		return totalPaymentDue;
	}

	public void setTotalPaymentDue(Integer totalPaymentDue) {
		this.totalPaymentDue = totalPaymentDue;
	}

	public Integer getLastPayment() {
		return lastPayment;
	}

	public void setLastPayment(Integer lastPayment) {
		this.lastPayment = lastPayment;
	}

	public Date getReceivedOn() {
		return receivedOn;
	}

	public void setReceivedOn(Date receivedOn) {
		this.receivedOn = receivedOn;
	}

	public Date getMaturityDate() {
		return MaturityDate;
	}

	public void setMaturityDate(Date maturityDate) {
		MaturityDate = maturityDate;
	}

	public Integer getPayoffAmount() {
		return payoffAmount;
	}

	public void setPayoffAmount(Integer payoffAmount) {
		this.payoffAmount = payoffAmount;
	}

	public Date getGoodEnough() {
		return goodEnough;
	}

	public void setGoodEnough(Date goodEnough) {
		this.goodEnough = goodEnough;
	}

	public Integer getInterestPaid() {
		return interestPaid;
	}

	public void setInterestPaid(Integer interestPaid) {
		this.interestPaid = interestPaid;
	}

	public Date getYearToDate() {
		return yearToDate;
	}

	public void setYearToDate(Date yearToDate) {
		this.yearToDate = yearToDate;
	}

	public Integer getPriorYear() {
		return priorYear;
	}

	public void setPriorYear(Integer priorYear) {
		this.priorYear = priorYear;
	}

	public Application getApplication() {
		return application;
	}

	public void setApplication(Application application) {
		this.application = application;
	}

}
