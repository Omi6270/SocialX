package com.socialweb.controller;


import org.springframework.web.bind.annotation.RestController;

import com.socialweb.models.User;
import com.socialweb.repository.UserRepository;
import com.socialweb.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserService userService;
	
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		User savedUser = userService.userRegister(user);
		return savedUser;
	}

	@GetMapping("/api/users")
	public List<User> getUsers() {
		
		List<User> users = userRepository.findAll();
		
		return users;
	}
	
	@GetMapping("/api/users/{userid}")
	public User getUsersById(@PathVariable("userid") Integer id) throws Exception {
		
		User user = userService.findUserById(id);
		return user;
	}
	
	
	
	@PutMapping("/api/users")
	public User updateUser(@RequestHeader("Authorization") String jwt, @RequestBody User user) throws Exception{
		User reqUser = userService.findUserByJwt(jwt);
		
		User updatedUser = userService.updateUser(user, reqUser.getId());
		return updatedUser;
	}
	
	@PutMapping("/api/users/follow/{userid2}")
	public User followUserHandler(@RequestHeader("Authorization") String jwt, @PathVariable Integer userid2) throws Exception {
		User reqUser = userService.findUserByJwt(jwt);
		User user = userService.followUser(reqUser.getId(), userid2);
		return user;
	}
	
	@GetMapping("/api/users/search")
	public List<User> searchUser(@RequestParam("query") String query){
		List<User> users = userService.searchUser(query);
		return users;
	}
	
	@GetMapping("/api/users/profile")
	public User getUserFroemToken(@RequestHeader("Authorization") String jwt) {
		User user = userService.findUserByJwt(jwt);
		user.setPassword(null);
		return user;
	}
}
