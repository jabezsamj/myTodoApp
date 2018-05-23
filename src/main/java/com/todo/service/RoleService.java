package  com.todo.service;
import java.util.List;

import com.todo.domain.Role;

public interface RoleService {
    public Role findById(Integer id);
    public void saveRole(Role role);
    public List<Role> findAll();
  //  public List<User> findAllByPersonId(Integer  person);
}