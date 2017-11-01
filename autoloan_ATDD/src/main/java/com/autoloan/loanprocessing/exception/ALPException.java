package com.autoloan.loanprocessing.exception;

@SuppressWarnings("serial")
public class ALPException extends Exception {

	@SuppressWarnings("unused")
	public String message = null;

 
    public ALPException(String message) {
        super(message);
        this.message = message;
    }
 

}
