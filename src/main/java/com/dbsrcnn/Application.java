package com.dbsrcnn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.*;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.orm.jpa.vendor.HibernateJpaSessionFactoryBean;
import org.springframework.boot.context.embedded.FilterRegistrationBean;

import javax.servlet.Filter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;




import com.dbsrcnn.security.*;

import org.springframework.scheduling.annotation.EnableAsync;



@EnableAsync
@SpringBootApplication

public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}



   	@Bean
    public FilterRegistrationBean myFilter() {	
        FilterRegistrationBean registration = new FilterRegistrationBean();
        Filter myFilter = new MyCorsFilter();
        registration.setFilter(myFilter);
        registration.addUrlPatterns("/*");
        registration.setOrder(-1000); 
        return registration;
    }
   	
}