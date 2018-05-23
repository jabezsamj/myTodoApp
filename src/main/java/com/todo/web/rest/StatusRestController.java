package com.todo.web.rest; 
import com.todo.domain.Status;
import com.todo.persistence.StatusRepository;
import com.todo.service.StatusService;
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

@Controller("StatusRestController")
public class StatusRestController {

    @Autowired
    private StatusRepository statusRepository;

    @Autowired
    private StatusService statusService;

    @RequestMapping(value = "/Status", method = RequestMethod.PUT)
    @ResponseBody
    public Status saveStatus(@RequestBody Status status) {
    statusService.saveStatus(status);
        return statusRepository.findById(status.getId());
    }

    @RequestMapping(value = "/Status", method = RequestMethod.POST)
    @ResponseBody
    public Status newStatus(@RequestBody Status status) {
    statusService.saveStatus(status);
        return statusRepository.findById(status.getId());
    }

    @RequestMapping(value = "/Status", method = RequestMethod.GET)
    @ResponseBody
    public List<Status> listStatuss() {
        return new java.util.ArrayList<Status>(statusService.findAll());
    }

    @RequestMapping(value = "/Status/{status_id}", method = RequestMethod.GET)
    @ResponseBody
    public Status loadStatus(@PathVariable Integer status_id) {
        return statusService.findById(status_id);
    }

    @RequestMapping(value = "/Status/Next/{next_id}", method = RequestMethod.GET)
    @ResponseBody
    public List<Status> getAllByNextId(@PathVariable("next_id") Integer nextId) {
        return new java.util.ArrayList<Status>(statusService.findAllByNextId(nextId));
    }

    @RequestMapping(value = "/Status/Previous/{previous_id}", method = RequestMethod.GET)
    @ResponseBody
    public List<Status> getAllByPreviousId(@PathVariable("previous_id") Integer previousId) {
        return new java.util.ArrayList<Status>(statusService.findAllByPreviousId(previousId));
    }

}

