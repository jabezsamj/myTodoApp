package com.todo.web.rest; 
import com.todo.domain.Person;
import com.todo.persistence.PersonRepository;
import com.todo.service.PersonService;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller("PersonRestController")
public class PersonRestController {

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private PersonService personService;

    @RequestMapping(value = "/Person", method = RequestMethod.PUT)
    @ResponseBody
    public Person savePerson(@RequestBody Person person) {
    personService.savePerson(person);
        return personRepository.findById(person.getId());
    }

    @RequestMapping(value = "/Person", method = RequestMethod.POST)
    @ResponseBody
    public Person newPerson(@RequestBody Person person) {
    personService.savePerson(person);
        return personRepository.findById(person.getId());
    }

    @RequestMapping(value = "/Person", method = RequestMethod.GET)
    @ResponseBody
    public List<Person> listPersons() {
        return new java.util.ArrayList<Person>(personService.findAll());
    }

    @RequestMapping(value = "/Person/{person_id}", method = RequestMethod.GET)
    @ResponseBody
    public Person loadPerson(@PathVariable Integer person_id) {
        return personService.findById(person_id);
    }


}