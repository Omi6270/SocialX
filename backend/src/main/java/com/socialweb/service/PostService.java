package com.socialweb.service;

import java.util.List;

import com.socialweb.models.Post;

public interface PostService {

	Post createdNewPost(Post post, Integer userid) throws Exception;
	
	String deletePost(Integer postid, Integer userid) throws Exception;
	
	List<Post> findPostByUserId(Integer userid);
	
	Post findPostById(Integer postid) throws Exception;
	
	List<Post> findAllPost();
	
	Post savedPost(Integer postid, Integer userid) throws Exception;
	
	Post likePost(Integer postid, Integer userid) throws Exception;
}
