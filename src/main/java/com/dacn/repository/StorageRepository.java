package com.dacn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dacn.entity.Storage;

@Repository
public interface StorageRepository extends JpaRepository<Storage, Integer> {

}
