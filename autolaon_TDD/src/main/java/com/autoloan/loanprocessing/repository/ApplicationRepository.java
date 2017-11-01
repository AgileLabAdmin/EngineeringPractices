package com.autoloan.loanprocessing.repository;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.autoloan.loanprocessing.entities.Application;

@Repository
public interface ApplicationRepository extends MongoRepository<Application, String> {

	Application findTopByOrderByApplicationIdDesc();
	
	Application findByUserName(@Param("userName") String userName);
	
	ArrayList<Application> findAll();

}