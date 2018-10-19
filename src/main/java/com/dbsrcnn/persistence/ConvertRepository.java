package  com.dbsrcnn.persistence;  
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.dbsrcnn.domain.Convert;

@Repository
public interface ConvertRepository extends JpaRepository<Convert, Integer> {	 
    Convert findById(Integer id);
    Convert findByLogin(String login);
    Convert findByPersonId(Integer personId);
    List<Convert> findByPersonFirstName(String firstName);
    List<Convert> findAll();
    //public List<User> findAllByPersonId(Integer personId);
    //public User findByUserName(String userName);
}