/**
 *
 */
package com.autoloan.loanprocessing.controller;

import com.autoloan.loanprocessing.entities.Application;
import com.autoloan.loanprocessing.exception.ALPException;
import com.autoloan.loanprocessing.model.LoanApplication;
import com.autoloan.loanprocessing.repository.ApplicationRepository;
import com.autoloan.loanprocessing.service.impl.LoanApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

/**
 * @author 326012
 */
@RestController
@RequestMapping("/")
public class LoanApplicationController {

    @Autowired
    private LoanApplicationService loanApplicationService;


    @Autowired
    private ApplicationRepository applicationRepository;


    @RequestMapping(value = "/loanapplication", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody
    Application saveLoanApplicationDetails(
            @RequestBody LoanApplication loanApplication) throws ALPException {
        if (loanApplication == null) {
            throw new ALPException("Loan Application is Empty/Blank");
        }
        return loanApplicationService.saveLoanApplicationDetails(loanApplication);
    }


    @RequestMapping(value = "/username", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    Application findByUserName(@RequestParam String userName) throws ALPException {
        if (userName == null) {
            throw new ALPException("Username is Empty/Blank");
        }
        Application application = applicationRepository.findByUserName(userName);
        if (application == null) {
            throw new ALPException("No Application found");
        }
        return application;
    }

    @RequestMapping(value = "/getAllLoanApplication", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    ArrayList<LoanApplication> getAllLoanApplications() throws ALPException {
        ArrayList<LoanApplication> loanApplications = loanApplicationService.getAllLoanApplication();
        return loanApplications;
    }


}
