package com.dacn.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dacn.entity.Storage;
import com.dacn.repository.StorageRepository;

@Service
public class StorageService {
	@Autowired
	StorageRepository storageRepository;

	public String myTesting () {
		Optional<Storage> storage = storageRepository.findById(1);
		if (storage.isPresent()) {
			return storage.get().getFilename() + " -> " + storage.get().getIdDrive();
		}
		else return "not oke";
	}
}
