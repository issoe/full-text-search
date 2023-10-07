package com.dacn.controller;

import java.io.IOException;
import java.security.GeneralSecurityException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dacn.service.GoogleDriveService;

@RestController
public class AudioBookController {
    @Autowired
    private GoogleDriveService service;

    @GetMapping("/")
    public String getAllFiles() throws IOException, GeneralSecurityException {
        return service.getfiles();
    }
    
    @PostMapping("/upload")
    @CrossOrigin(origins = "http://127.0.0.1:5173/")
    public String upload(@RequestParam("file") MultipartFile file) throws IOException, GeneralSecurityException {
        System.out.println(file.getOriginalFilename());
        return service.uploadFile(file);
    }
    
    @PostMapping("/get")
    public String getFileById(@RequestParam String id) throws IOException, GeneralSecurityException {
    	return service.getFileById(id);
    }
    
    @PostMapping("/download")
    public String downloadFileById(@RequestParam String id) throws IOException, GeneralSecurityException {
    	Boolean success = service.downloadFile(id);
    	if (success) return "ok";
    	else return "not oke";
    }
    
    @DeleteMapping("/file")
    public String deleteFileById(@RequestParam String id) throws GeneralSecurityException, IOException {
    	return service.deleteFileById(id);
    }
}
