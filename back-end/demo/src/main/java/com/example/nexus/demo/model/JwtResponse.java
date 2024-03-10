package com.example.nexus.demo.model;

import com.example.nexus.demo.dto.AppUserSusDTO;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JwtResponse {

	public JwtResponse() {
	}

	public JwtResponse(AppUserSusDTO user, String jwtToken) {
		super();
		this.user = user;
		this.jwtToken = jwtToken;
	}

	public JwtResponse(String string) {
		this.jwtToken = "Error: " + string;
	}

	private AppUserSusDTO user;
	private String jwtToken;

	public AppUserSusDTO getUser() {
		return user;
	}

	public void setUser(AppUserSusDTO user) {
		this.user = user;
	}

	public String getJwtToken() {
		return jwtToken;
	}

	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}

}