package com.example.nexus.demo.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JwtRequest {
	
	private String userEmail;
	private String userPassword;
	
}