package  com.todo.persistence;  
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.todo.domain.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {	 
    User findById(Integer id);
    User findByLogin(String login);
    User findByPersonId(Integer personId);
    List<User> findByPersonFirstName(String firstName);
    List<User> findAll();
    //public List<User> findAllByPersonId(Integer personId);
    //public User findByUserName(String userName);
}