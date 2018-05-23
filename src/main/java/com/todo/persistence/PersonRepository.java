package com.todo.persistence;  
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.todo.domain.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer> {	 
    Person findById(Integer id);
    List<Person> findAll();
}