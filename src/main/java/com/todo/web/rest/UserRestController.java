package com.todo.web.rest; 
import com.todo.domain.Person;
import com.todo.domain.User;
import com.todo.persistence.UserRepository;
import com.todo.service.UserService;

import antlr.StringUtils;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.token.ConsumerTokenServices;
import org.springframework.security.oauth2.provider.token.store.JdbcTokenStore;


@CrossOrigin
@Controller("UserRestController")
public class UserRestController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    private JdbcTokenStore tokenstore;
    
    @Resource(name="tokenServices")
    ConsumerTokenServices tokenServices;
    
    

    @RequestMapping(value = "/TodoUser", method = RequestMethod.PUT)
    @ResponseBody
    public User saveUser(@RequestBody User user) {
    	userService.saveUser(user);
        return userService.findById(user.getId());
    }

    
    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    @ResponseBody
	 public int createNewUser(@RequestBody User user) {
        

        //Check if username already exists
        if(userService.findByLogin(user.getLogin()) != null)
        {
    	   return 0;
        }
	 userService.saveUser(user);
	 return HttpStatus.SC_OK;      
	}
    
    @RequestMapping(value = "/TodoUser/GetPerson" , method = RequestMethod.GET)
    @ResponseBody
    public Person getPerson() {
    	return userService.getPerson();
    }
    
    
    @RequestMapping(value = "/tokens/revoke/{token}", method = RequestMethod.POST)
    @ResponseBody
    public int revokeToken(@PathVariable String token) {
    	tokenServices.revokeToken(token);
        return HttpStatus.SC_OK;
    }
    
 
    
    /*
    @RequestMapping(value = "/User/Login", method = RequestMethod.POST)
    @ResponseBody
    public SameepUser  loadUserByUserName(@RequestBody SameepUser userDetails){
    	SameepUser user = new SameepUser();
    	try{  
  	      user = fetch(userDetails.getUserName(),userDetails.getPassword());  
  	      }catch(Exception m){
  	    	  System.out.println(m);
  	    	  if (m.getMessage() =="Invalid User"){
  	    		  user.setId(-999);
  	    	  }
  	    	  
  	    	 if (m.getMessage() =="Invalid Password"){
 	    		  user.setId(-9999);

 	    	  }
  	    	 
  	    	 if (m.getMessage() =="Not Enabled"){
	    		  user.setId(-99999);
	    		
	    	  }
  	      }  
  	      return user;  
    }
    
    private SameepUser fetch(String userName, String password)throws InvalidLoginException{  
    	SameepUser user = userRepository.findByUserName(userName);
    	System.out.println(userName);
    	if(user != null){  
    		System.out.println(password);
    		System.out.println(user.getPassword());
    		System.out.println(user.getPassword().equals(password));
    		if (user.getPassword().equals(password)==true)
    			if(user.getEnabled()==true)
    				return user;
    			else
    				throw new InvalidLoginException("Not Enabled");	
    		else
    			throw new InvalidLoginException("Invalid Password");	
    	}else        	
        	throw new InvalidLoginException("Invalid User");
         
      }  
    */
    }