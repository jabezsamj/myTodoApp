package  com.todo.service.impl;
import com.todo.domain.Person;
import com.todo.domain.Role;
import com.todo.domain.User;
import com.todo.persistence.PersonRepository;
import com.todo.persistence.RoleRepository;
import com.todo.persistence.UserRepository;
import com.todo.service.UserService;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Service("UserService")
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private RoleRepository roleRepository;
    
    
    @Autowired
    private PersonRepository personRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    
    private Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    
    public UserServiceImpl() {
    }

    @Transactional
    public User findById(Integer id) {
        return userRepository.findById(id);
    }
    
    @Transactional
    public User findByLogin(String login) {
        return userRepository.findByLogin(login);
    }
    


    @Transactional
    public List<User> findAll() {
        return userRepository.findAll();
    }
     
    @Transactional
    public User saveUser(User user) {
        
        passwordEncoder = new BCryptPasswordEncoder();

        
        User existingUser = userRepository.findById(user.getId());
        if (existingUser != null) {
        	//Update existing user
        if (existingUser != user) {    
            existingUser.setId(user.getId());
            existingUser.setLogin(user.getLogin());
            existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
            existingUser.setPerson(user.getPerson());
         }
        user = userRepository.save(existingUser);
       }else{
    	// New Person creation
        Person person = user.getPerson();
        person = personRepository.save(person);
        
        //Saving the person to the user
        user.setPerson(person); 
        
        //Hashing the password
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user = userRepository.save(user);
        
        
        
        //Adding role to the User
        Role role = roleRepository.findById(1);
        Set<Role> roles = user.getRoles();
        roles.add(role);
        user.setRoles(roles);
        

        userRepository.save(user);
     
        }
        userRepository.flush();
        personRepository.flush();
        return user;
    }
    

    public Person getPerson(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getName());
        return userRepository.findByLogin(auth.getName()).getPerson();
    }
    
 
}