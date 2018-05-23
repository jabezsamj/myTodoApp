package com.todo.service.impl;
import com.todo.domain.Todo;
import com.todo.domain.User;
import com.todo.domain.Status;
import com.todo.persistence.TodoRepository;
import com.todo.persistence.StatusRepository;
import com.todo.service.TodoService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("TodoService")
@Transactional
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoRepository todoRepository;
    
    @Autowired
    private StatusRepository statusRepository;
    public TodoServiceImpl() {
    }

    @Transactional
    public Todo findById(Integer id) {
        return todoRepository.findById(id);
    }

    @Transactional
    public List<Todo> findAll() {
        return todoRepository.findAll();
    }
     
    @Transactional
    public void saveTodo(Todo todo) {
        Todo existingTodo = todoRepository.findById(todo.getId());
        if (existingTodo != null) {
        if (existingTodo != todo) {      
        	existingTodo.setId(todo.getId());
        	existingTodo.setTitle(todo.getTitle());
        	existingTodo.setDescription(todo.getDescription());
        	existingTodo.setStatus(todo.getStatus());
        	existingTodo.setPerson(todo.getPerson());
        }
        todo = todoRepository.save(existingTodo);
    }else{
    	User currentUser = (User)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    	Status status = statusRepository.findById(1);
    	todo.setPerson(currentUser.getPerson());
    	todo.setStatus(status);
    	todo = todoRepository.save(todo);
        }
        todoRepository.flush();
    }

    @Transactional
	public Boolean deleteTodoById(Integer id) {
        todoRepository.delete(id);
        return true;
	}

    
}