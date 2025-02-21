package com.socialweb.service;

import java.util.List;

import com.socialweb.models.User;

public interface UserService {
	
	public User userRegister(User user);
	
	public User findUserById(Integer userid) throws Exception;
	
	public User findUserByEmail(String email);
	
	public User followUser(Integer userid1, Integer userid2) throws Exception;
	
	public User  updateUser(User user, Integer userid) throws Exception;
	
	public List<User> searchUser(String query);
	
	public User findUserByJwt(String jwt);
}
