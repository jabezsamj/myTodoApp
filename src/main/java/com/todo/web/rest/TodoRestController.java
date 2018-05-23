package com.todo.web.rest; 
import com.todo.domain.Todo;
import com.todo.persistence.TodoRepository;
import com.todo.service.TodoService;

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

@Controller("TodoRestController")
public class TodoRestController {

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private TodoService todoService;

    @RequestMapping(value = "/Todo", method = RequestMethod.PUT)
    @ResponseBody
    public Todo saveTodo(@RequestBody Todo todo) {
    todoService.saveTodo(todo);
        return todoRepository.findById(todo.getId());
    }

    @RequestMapping(value = "/Todo", method = RequestMethod.POST)
    @ResponseBody
    public Todo newTodo(@RequestBody Todo todo) {
    todoService.saveTodo(todo);
        return todoRepository.findById(todo.getId());
    }

    @RequestMapping(value = "/Todo", method = RequestMethod.GET)
    @ResponseBody
    public List<Todo> listTodos() {
        return new java.util.ArrayList<Todo>(todoService.findAll());
    }

    @RequestMapping(value = "/Todo/{todo_id}", method = RequestMethod.GET)
    @ResponseBody
    public Todo loadTodo(@PathVariable Integer todo_id) {
        return todoService.findById(todo_id);
    }
    
    @RequestMapping(value = "/Todo/Delete/{todo_id}", method = RequestMethod.GET)
    @ResponseBody
    public Boolean deleteComment(@PathVariable("todo_id") Integer todo_id) {
    	return(todoService.deleteTodoById(todo_id));
    }

}