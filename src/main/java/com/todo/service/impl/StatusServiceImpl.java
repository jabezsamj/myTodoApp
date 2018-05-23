package com.todo.service.impl;
import com.todo.persistence.StatusRepository;
import com.todo.domain.Status;
import com.todo.service.StatusService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("StatusService")
@Transactional
public class StatusServiceImpl implements StatusService {

    @Autowired
    private StatusRepository statusRepository;
    public StatusServiceImpl() {
    }

    @Transactional
    public Status findById(Integer id) {
        return statusRepository.findById(id);
    }

    @Transactional
    public List<Status> findAll() {
        return statusRepository.findAll();
    }
	 
    @Transactional
    public void saveStatus(Status status) {
        Status existingStatus = statusRepository.findById(status.getId());
        if (existingStatus != null) {
	    if (existingStatus != status) {	   
		existingStatus.setId(status.getId());
                existingStatus.setStatus(status.getStatus());
                existingStatus.setNext(status.getNext());
                existingStatus.setPrevious(status.getPrevious());
	    }
   	    status = statusRepository.save(existingStatus);
	}else{
	    status = statusRepository.save(status);
        }
        statusRepository.flush();
    }

    @Transactional
    public List<Status> findAllByNextId(Integer  nextId) {
        return new java.util.ArrayList<Status>(statusRepository.findAllByNextId(nextId));
    }

    @Transactional
    public List<Status> findAllByPreviousId(Integer  previousId) {
        return new java.util.ArrayList<Status>(statusRepository.findAllByPreviousId(previousId));
    }

    

}
