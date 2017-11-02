package com.autoloan.loanprocessing.service;

import com.autoloan.loanprocessing.entities.Application;
import com.autoloan.loanprocessing.exception.ALPException;
import com.autoloan.loanprocessing.model.LoanApplication;

public interface ILoanApplicationService {
	public Application saveLoanApplicationDetails(LoanApplication loanApplication) throws ALPException;
	
}
