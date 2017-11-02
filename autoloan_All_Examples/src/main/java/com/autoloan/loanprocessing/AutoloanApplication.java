package com.autoloan.loanprocessing;

import com.mongodb.MongoClient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.io.IOException;

@SpringBootApplication
@EnableMongoRepositories
public class AutoloanApplication {

	public static void main(String[] args) {
		SpringApplication.run(AutoloanApplication.class, args);

		ApplicationContext context =
				new ClassPathXmlApplicationContext(new String[] {"classpath:/application-context.xml"});
	}

	//@Bean
	public MongoTemplate mongoTemplate() throws IOException {

		MongoClient mongoClient = new MongoClient();
		MongoTemplate mongoTemplate = null;
		return mongoTemplate;
	}
}
