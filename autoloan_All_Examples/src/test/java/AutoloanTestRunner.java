package com.autoloan.loanprocessing;


import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;

public class AutoloanTestRunner {
   public static void main(String[] args) {
      Result result = JUnitCore.runClasses(com.autoloan.loanprocessing.AutoloanTestSuite.class);

      for (Failure failure : result.getFailures()) {
         System.out.println(failure.toString());
      }
		
      System.out.println("Tests Passed ==== >"+result.getRunCount());
   }
}  