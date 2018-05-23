package  com.todo.service;
import java.util.List;

import com.todo.domain.Person;
import com.todo.domain.User;

public interface UserService {
    public User findById(Integer id);
    public User findByLogin(String login);
    public User saveUser(User user_1);
    public List<User> findAll();
    public Person getPerson();
}