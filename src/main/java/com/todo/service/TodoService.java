package com.todo.service;
import java.util.List;

import com.todo.domain.Todo;

public interface TodoService {
    public Todo findById(Integer id);
    public void saveTodo(Todo todo_1);
    public List<Todo> findAll();
    public Boolean deleteTodoById(Integer id);
}
