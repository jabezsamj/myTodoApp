package com.todo.persistence;  
import com.todo.domain.Status;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

@Repository
public interface StatusRepository extends JpaRepository<Status, Integer> {	 
    Status findById(Integer id);
    List<Status> findAll();
    public List<Status> findAllByNextId(Integer nextId);
    public List<Status> findAllByPreviousId(Integer previousId);  
}