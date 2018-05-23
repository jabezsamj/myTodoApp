package com.todo.service;
import com.todo.domain.Status;
import java.util.List;

public interface StatusService {
    public Status findById(Integer id);
    public void saveStatus(Status status_1);
    public List<Status> findAll();
    public List<Status> findAllByNextId(Integer  next);
    public List<Status> findAllByPreviousId(Integer  previous);
}
