package  com.todo.persistence;  
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.todo.domain.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {	 
    Role findById(Integer id);
    List<Role> findAll();
}