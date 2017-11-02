package com.autoloan.loanprocessing.service.impl;

import com.autoloan.loanprocessing.entities.Application;
import com.autoloan.loanprocessing.entities.User;
import com.autoloan.loanprocessing.exception.ALPException;
import com.autoloan.loanprocessing.model.LoanApplication;
import com.autoloan.loanprocessing.repository.ApplicationRepository;
import com.autoloan.loanprocessing.repository.UserRepository;
import com.autoloan.loanprocessing.service.ILoanApplicationService;
import com.autoloan.loanprocessing.utilities.AutoloanHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class LoanApplicationService implements ILoanApplicationService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private ApplicationRepository repository;

    @Autowired
    private UserRepository userRepository;

    private AutoloanHelper helper = new AutoloanHelper();


    public Application saveLoanApplicationDetails(LoanApplication loanApplication) throws ALPException {
        logger.info("LoanApplicationService - saveLoanApplicationDetails() ");
        if (loanApplication == null) {
            throw new ALPException("Loan Application is Empty/Blank");
        }
        Application application = loanApplication.getApplication();
        User user = userRepository.insert(loanApplication.getUser());
        String appId = application.getApplicationId();
        if (appId == "") {
            throw new ALPException("Application is Empty/Blank");
        }
        appId = helper.generateAccountNumber(appId);
        application.setApplicationId(appId);
        application.setUser(user);
        return repository.insert(application);
    }

    //region Description
    public ArrayList<LoanApplication> getAllLoanApplication() throws ALPException {

        ArrayList<LoanApplication> loanApplications = new ArrayList<LoanApplication>();
        ArrayList<Application> applications = new ArrayList<Application>();
        applications = repository.findAll();
        LoanApplication loanApp = new LoanApplication();
        if (null != applications) {
            if (applications.size() == 0) {
                throw new ALPException("No Application found");
            } else {
                for (int i = 0; i < applications.size(); i++) {
                    loanApp = new LoanApplication();
                    loanApp.setApplication(applications.get(i));
                    loanApplications.add(loanApp);
                }
            }
        }
        return loanApplications;

    }
    //endregion


}
