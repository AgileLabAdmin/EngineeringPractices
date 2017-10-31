package main.com.autoloan.loanprocessing.controller;

import main.com.autoloan.loanprocessing.service.UserAuthendicationService;

public class LoanApplicationController {

	private UserAuthendicationService authendicationService = new UserAuthendicationService();
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
	
	/**
	 * 
	 * This method check the given userId and password are valid
	 * @param userId
	 * @param password
	 * @return boolean
	 */

	public Boolean authendicateUser(String userId, String password) {
		return authendicationService.authendicateUser(userId, password);
	}
}
