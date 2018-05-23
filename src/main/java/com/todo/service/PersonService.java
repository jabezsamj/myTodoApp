package com.todo.service;
import java.util.List;

import com.todo.domain.Person;

public interface PersonService {
    public Person findById(Integer id);
    public void savePerson(Person person_1);
    public List<Person> findAll();
}
