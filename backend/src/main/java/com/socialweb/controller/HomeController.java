package com.socialweb.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class HomeController {
	
	
	@GetMapping
	public String homeContollerHandller() {
		return "This is Home Controller";
	}
	
	@GetMapping("/home")
	public String homeContollerHandller2() {
		return "This is Home Controller 2";
	}
	
	@GetMapping("/test")
	public String homeContollerHandller3() {
		return "This is Test";
	}
}
