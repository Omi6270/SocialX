package com.socialweb.service;

import java.util.List;

import com.socialweb.models.Story;
import com.socialweb.models.User;

public interface StoryService {

	public Story createStory(Story story, User user);
	
	public List<Story> findStoryByUserId(Integer userId) throws Exception;
}
