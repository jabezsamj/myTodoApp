package com.todo.service.impl;
import com.todo.domain.GridDisplay;
import com.todo.service.GridDisplayService;
import com.todo.domain.User;
import com.todo.domain.Person;
import com.todo.persistence.PersonRepository;
import com.todo.domain.Todo;
import com.todo.persistence.TodoRepository;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("GridDisplayService")
@Transactional
public class GridDisplayServiceImpl implements GridDisplayService {

    public GridDisplayServiceImpl() {
    }
   
    @Autowired
	private PersonRepository personRepository;@Autowired
	private TodoRepository todoRepository;


    @Transactional
    public GridDisplay getListItems(String gridTag, Integer param1, Integer param2, Integer param3) {
       switch (gridTag){

             case "Person":{
				 List<Person> persons = personRepository.findAll();
				 GridDisplay gridDisplay = new GridDisplay(); 
			     gridDisplay.setContent(persons);
			     return gridDisplay;	
			}case "Todo":{
				List<Todo> todos = todoRepository.findAll();
				 GridDisplay gridDisplay = new GridDisplay(); 
			     gridDisplay.setContent(todos);
			     return gridDisplay;	
			}
            case "CurrentPerson":{
            	User currentUser = (User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		    	Person person = currentUser.getPerson();
			  	GridDisplay gridDisplay = new GridDisplay();
			  	gridDisplay.setContent(person);
			  	return gridDisplay;
			}
            case "TodoByCurrentUser":
            {
            	User currentUser = (User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            	//List<Todo> todos = todoRepository.findAllByPersonId(currentUser.getPerson().getId());
            	int currentPersonId = currentUser.getPerson().getId();
            	List<Todo> statusTodo = todoRepository.findAllByPersonIdAndStatusId(currentPersonId, 1);
            	List<Todo> statusInprogress = todoRepository.findAllByPersonIdAndStatusId(currentPersonId, 2);
            	List<Todo> statusCompleted = todoRepository.findAllByPersonIdAndStatusId(currentPersonId, 3);
            	List<List<Todo>> taskList = new ArrayList<List<Todo>>();
            	taskList.add(statusTodo);
            	taskList.add(statusInprogress);
            	taskList.add(statusCompleted);
				GridDisplay gridDisplay = new GridDisplay(); 
			    gridDisplay.setContent(taskList);
			    return gridDisplay;
            }
			/*case "SearchLendingByBookId":{
				 List<Lending> lendingByBookId = lendingRepository.findAllByBookId(param1);
				 GridDisplay gridDisplay = new GridDisplay();
				 if(lendingByBookId.isEmpty())
				 {
					 gridDisplay.setContent("free");
				     return gridDisplay;
				 }
				 else if(lendingByBookId.get(lendingByBookId.size()-1).getActualReturnDate() != null)
			     {
					 gridDisplay.setContent("free");
				     return gridDisplay;
			     }
				 else
			     {
					 
				   for(int i=0;i<lendingByBookId.size();i++)
				   {
					 if(lendingByBookId.get(i).getActualReturnDate() == null)
					 {
			           gridDisplay.setContent(lendingByBookId.get(i));
			           return gridDisplay;
					 }
					 
				   }
				   
				   // If no case matched in the loop, send the last element
				   gridDisplay.setContent(lendingByBookId.get(lendingByBookId.size()-1));
		           return gridDisplay; 
			     }	
			}*/

       }
      return null;
    }

}