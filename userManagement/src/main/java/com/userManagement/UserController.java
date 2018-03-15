package com.userManagement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/users")
public class UserController extends UserBuilder {
	
	private List<User> users = new ArrayList<>();
	
	public UserController() {
		this.users = buildUsers();
	}

	@RequestMapping(method = RequestMethod.GET)
	public List<User> getUsers(){
		return this.users;
	}
	
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public User getUser(@PathVariable("id") Long id) {
		return this.users.stream().filter(user->user.getId() == id).findFirst().orElse(null);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public User saveUser(@RequestBody User user) {
		Long nextId = 0L;
		if(this.users.size() > 0) {
			User lastUser = this.users.stream().skip(this.users.size() -1).findFirst().orElse(null);
			nextId = lastUser.getId() + 1;
		}
		user.setId(nextId);
		this.users.add(user);
		return user;
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public User updateUser(@RequestBody User user) {
		User modifiedUser = this.users.stream().
				filter(u->u.getId() == user.getId()).findFirst().orElse(null);
		modifiedUser.setFirstName(user.getFirstName());
		modifiedUser.setLastName(user.getLastName());
		modifiedUser.setEmail(user.getEmail());
		return modifiedUser;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public boolean deleteUser(@PathVariable Long id) {
		User deleteUser = this.users.stream().filter(user->user.getId() == id).findFirst().orElse(null);
		if(deleteUser != null ) {
			this.users.remove(deleteUser);
			return true;
		}else {
			return false;
		}
	}
	
	
	
	

}
