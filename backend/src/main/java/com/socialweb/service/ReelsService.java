package com.socialweb.service;

import java.util.List;

import com.socialweb.models.Reels;
import com.socialweb.models.User;

public interface ReelsService {

	public Reels createReel(Reels reels, User user);
	
	public List<Reels> findAllReels();
	
	public List<Reels> findUsersReel(Integer userId) throws Exception;
}
