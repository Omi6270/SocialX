package com.socialweb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.socialweb.models.Reels;

public interface ReelsRepository extends JpaRepository<Reels, Integer> {

	public List<Reels> findByuserId(Integer userId);
}
