package com.socialweb.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.socialweb.config.JwtProvider;
import com.socialweb.models.User;
import com.socialweb.repository.UserRepository;


@Service
public class UserServiceImplementation implements UserService{
	
	@Autowired
	UserRepository userRepository;

	@Override
	public User userRegister(User user) {
		User newUser = new User();
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setEmail(user.getEmail());
		newUser.setPassword(user.getPassword());
		newUser.setId(user.getId());
		
		User savedUser = userRepository.save(newUser);
		return savedUser;
	}

	@Override
	public User findUserById(Integer userid) throws Exception {
		Optional<User> user = userRepository.findById(userid);
		if(user.isPresent()) {
			return user.get();
		}
		throw new Exception("User does not exist with id : "+userid);
	}

	@Override
	public User findUserByEmail(String email) {
		User user = userRepository.findByEmail(email);
		return user;
	}

	@Override
	public User followUser(Integer reqUserId, Integer userid2) throws Exception {
		// user1 wants to follow user2
		
		User reqUser = findUserById(reqUserId);
		User user2 = findUserById(userid2);
		
		user2.getFollowers().add(reqUserId);
		reqUser.getFollowings().add(userid2);
		
		userRepository.save(reqUser);
		userRepository.save(user2); 
		
		// returning user1 because he wants to follow other user
		
		return reqUser;
	}

	@Override
	public User updateUser(User user, Integer userid) throws Exception {

		Optional<User> user1 = userRepository.findById(userid);
		
		if(user1.isEmpty()) {
			throw new Exception ("User does not exist with id : "+userid);
		}
		
		User oldUser = user1.get();
		
		if(user.getFirstName()!= null) {
			oldUser.setFirstName(user.getFirstName());
		}
		if(user.getLastName()!= null) {
			oldUser.setLastName(user.getLastName());
		}
		if(user.getEmail()!=null) {
			oldUser.setEmail(user.getEmail());
		}
		if(user.getGender()!=null) {
			oldUser.setGender(user.getGender());
		}
		
		User updatedUser = userRepository.save(oldUser);
		
		return updatedUser;
	}

	@Override
	public List<User> searchUser(String query) { 
		
		return userRepository.searchUser(query);
	}

	@Override
	public User findUserByJwt(String jwt) {
		
		String email = JwtProvider.getEmailFromJwtToken(jwt);
		User user = userRepository.findByEmail(email);
		
		return user;
	}

}
