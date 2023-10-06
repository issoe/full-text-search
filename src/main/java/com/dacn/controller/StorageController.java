package com.dacn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dacn.service.StorageService;

@RestController
@RequestMapping("/be")
public class StorageController {
	@Autowired
	StorageService storageService;
	
	@GetMapping("/test")
	public String testing() {
		return "Initial testing: Successful testing";
	}
	
	@GetMapping("/test2")
	public String testing2() {
		return "Testing first data: " + storageService.myTesting();
	}
	
	@GetMapping("/upload")
	public String uploadFile() {
		return "Upload successfull";
	}
	
	@GetMapping("/download")
	public String downloadFile() {
		return "Download successfully";
	}
	
}
