package com.dacn.controller;

import java.io.IOException;
import java.security.GeneralSecurityException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dacn.response.EResponse;
import com.dacn.service.GoogleDriveService;

@RestController
public class DriveController {
    @Autowired
    private GoogleDriveService service;

    @GetMapping("/")
    public String getAllFiles() throws IOException, GeneralSecurityException {
        return service.getfiles();
    }
    
    @GetMapping("/page/{id}")
    public ResponseEntity<?> getFilesByPageId(@PathVariable Integer id) throws IOException, GeneralSecurityException {
    	return ResponseEntity.ok(service.getFileByPageId(id));
    }
    
    
    @PostMapping("/upload")
    @CrossOrigin(origins = "http://127.0.0.1:5173/")
    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file,
    								@RequestParam("upload_id") Integer upload_id,
    								@RequestParam("upload_name") String upload_name
    		) throws IOException, GeneralSecurityException {
    	if (service.uploadFile(file, upload_id, upload_name)) return EResponse.ok("Successfully uploaded");
    	else return EResponse.notFound("Impossible to upload file");
    }
    
    @PostMapping("/get")
    public String getFileById(@RequestParam String id) throws IOException, GeneralSecurityException {
    	return service.getFileById(id);
    }
    
    @PostMapping("/download")
    public ResponseEntity<?> downloadFileById(@RequestParam String id) throws IOException, GeneralSecurityException {
    	if (service.downloadFile(id)) return EResponse.ok("Successfully downloaded");
    	else return EResponse.notFound("Id drive not found");
    }
    
    @DeleteMapping("/file")
    public String deleteFileById(@RequestParam String id) throws GeneralSecurityException, IOException {
    	return service.deleteFileById(id);
    }
}