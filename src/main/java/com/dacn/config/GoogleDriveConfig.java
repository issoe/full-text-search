//package com.dacn.config;
//
//import java.io.IOException;
//import java.io.InputStream;
//import java.io.InputStreamReader;
//import java.security.GeneralSecurityException;
//import java.util.Collections;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import com.dacn.service.GoogleDriveService;
//import com.google.api.client.auth.oauth2.Credential;
//import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
//import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
//import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
//import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
//import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
//import com.google.api.client.json.JsonFactory;
//import com.google.api.client.json.jackson2.JacksonFactory;
//import com.google.api.client.util.store.FileDataStoreFactory;
//import com.google.api.services.drive.Drive;
//import com.google.api.services.drive.DriveScopes;
//
//@Configuration
//public class GoogleDriveConfig {
//
//    private static final String APPLICATION_NAME = "SearchApp";
//    private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
//    private static final String TOKENS_DIRECTORY_PATH = "tokens";
//
//    @Bean
//    public Drive driveService() throws IOException, GeneralSecurityException {
//        // Load client secrets.
//        InputStream in = GoogleDriveConfig.class.getResourceAsStream("./credentials.json");
//        GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));
//
//        // Build flow and trigger user authorization request.
//        GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
//                GoogleNetHttpTransport.newTrustedTransport(), JSON_FACTORY, clientSecrets,
//                Collections.singletonList(DriveScopes.DRIVE_FILE))
//                .setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
//                .setAccessType("offline")
//                .build();
//        LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
//        return new Drive.Builder(GoogleNetHttpTransport.newTrustedTransport(), JSON_FACTORY, getCredentials(flow, receiver))
//                .setApplicationName(APPLICATION_NAME)
//                .build();
//    }
//
//    @Bean
//    public GoogleDriveService googleDriveService(Drive driveService) {
//        return new GoogleDriveService(driveService);
//    }
//
//    private Credential getCredentials(GoogleAuthorizationCodeFlow flow, LocalServerReceiver receiver) throws IOException {
//        return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
//    }
//}
