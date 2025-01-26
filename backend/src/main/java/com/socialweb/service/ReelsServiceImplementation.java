package com.socialweb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.socialweb.models.Reels;
import com.socialweb.models.User;
import com.socialweb.repository.ReelsRepository;

@Service
public class ReelsServiceImplementation implements ReelsService {

	@Autowired
	ReelsRepository reelsRepository;
	
	@Autowired
	UserService userService;
	
	@Override
	public Reels createReel(Reels reels, User user) {
		
		Reels createReel = new Reels();
		createReel.setTitle(reels.getTitle());
		createReel.setUser(user);
		createReel.setVideo(reels.getVideo());
		
		return reelsRepository.save(createReel);
	}

	@Override
	public List<Reels> findAllReels() {
		
		return reelsRepository.findAll();
	}

	@Override
	public List<Reels> findUsersReel(Integer userId) throws Exception {
		userService.findUserById(userId);
		
		return reelsRepository.findByuserId(userId);
	}

}
