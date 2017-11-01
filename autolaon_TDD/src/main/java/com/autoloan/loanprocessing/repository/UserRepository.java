package com.autoloan.loanprocessing.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.autoloan.loanprocessing.entities.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
	User findById(@Param("id") String id);
}