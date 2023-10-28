package com.dacn.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity @Data
@Table(name="files")
public class FileEntity {
	@Id
	@Column(name="ids")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer ids;
	
	@Column(name="id_drive")
	private String id_drive;

	@Column(name="filename")
	private String filename;
	
	@Column(name="is_deleted")
	private Boolean is_deleted;
	
	@Column(name="upload_id")
	private Integer upload_id;

	@Column(name="upload_name")
	private String upload_name;

	@Column(name="intro")
	private String intro;
	
	@Column(name="title")
	private String title;
}
