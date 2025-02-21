package com.socialweb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.socialweb.models.Post;

public interface PostRepository extends JpaRepository<Post, Integer>{
	
	
	@Query("Select p from Post p where p.user.id = :userid")
	List<Post> findPostByUserId(@Param("userid")Integer userid);
}
