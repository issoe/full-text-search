package com.dacn.controller;

import java.io.IOException;
import java.security.GeneralSecurityException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dacn.service.GoogleDriveService;


//import com.audiobook.audiobook.services.GoogleDriveService;

@RestController
public class AudioBookController {
    @Autowired
    private GoogleDriveService service;
    
//    @Autowired
//    AudioBookController audioBookController;
    @GetMapping("/test") 
    public String test001() {
    	return "testing oke";
    }

    @GetMapping("/")
//    @CrossOrigin(origins = "http://127.0.0.1:5173/")
    public  String sample() throws IOException, GeneralSecurityException{
//        return audioBookController.getAllAudio();
        return service.getfiles();
    }

//    @PostMapping("/newaudio")
//    @CrossOrigin(origins = "http://127.0.0.1:5173/")
//    public  String upload(@RequestParam("audio") MultipartFile file) throws IOException, GeneralSecurityException{
//        return audioBookController.uploadAudio(file);
//    }
    

//    public String getAllAudio() throws IOException, GeneralSecurityException{
//        return service.getfiles();
//    }
//    
//    public String uploadAudio(MultipartFile file) throws IOException, GeneralSecurityException{
//        System.out.println(file.getOriginalFilename());
//
//        return service.uploadFile(file);
//    }
}
