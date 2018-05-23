package com.todo.persistence;  
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.todo.domain.Todo;
import com.todo.domain.User;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer> {	 
    Todo findById(Integer id);
    List<Todo> findAll();
    List<Todo> findByStatusId(Integer status_id);
    List<Todo> findAllByPersonId(Integer person_id);
    List<Todo> findAllByPersonIdAndStatusId(Integer person_id, Integer status_id);
}