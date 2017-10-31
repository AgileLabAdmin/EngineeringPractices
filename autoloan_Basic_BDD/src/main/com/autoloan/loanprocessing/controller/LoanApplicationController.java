package main.com.autoloan.loanprocessing.controller;



public class LoanApplicationController {

	
	/**
	 * 
	 * This method check the password strength
	 * @param password
	 * @return boolean
	 */
	public Boolean checkPasswordStrength(String password){
		return validatePassword(password);
	}

	private Boolean validatePassword(String password) {
		if(password == ""){
			return false;
		}
		return true;
	}
}
