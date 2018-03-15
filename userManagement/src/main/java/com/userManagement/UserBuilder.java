package com.userManagement;

import java.util.ArrayList;
import java.util.List;




public class UserBuilder {
	
	
	public List<User> buildUsers(){
		List<User> users = new ArrayList<>();
		
		User user1 = buildUser(1L, "Hari", "Don", "Hari.Don@usermanagement.com");
		User user2 = buildUser(2L, "Hareen", "Mal", "Hareen.Mal@usermanagement.com");
		User user3 = buildUser(3L, "Bhavya", "Don", "Bhavya.Don@usermanagement.com");
		User user4 = buildUser(4L, "Bindu", "Bha", "Bindu.Bha@usermanagement.com");
		users.add(user1);
		users.add(user2);
		users.add(user3);
		users.add(user4);
		return users;
	}

	
	private User buildUser(Long id, String fname, String lname, String email) {
		User user = new User();
		user.setId(id);
		user.setFirstName(fname);
		user.setLastName(lname);
		user.setEmail(email);
		return user;
	}
}
