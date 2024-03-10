package com.example.nexus.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// import com.webzy.jwt.entity.AppUser;
// import com.webzy.jwt.entity.JwtRequest;
// import com.webzy.jwt.entity.JwtResponse;
// import com.webzy.jwt.service.JwtService;
// import com.webzy.jwt.service.UserServiceImpl;
import com.example.nexus.demo.model.AppUser;
import com.example.nexus.demo.model.JwtRequest;
import com.example.nexus.demo.model.JwtResponse;
import com.example.nexus.demo.service.JwtServices;
import io.swagger.v3.oas.annotations.Operation;
import com.example.nexus.demo.service.serviceimpl.UserServiceImpl;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5713")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

	private final JwtServices jwtService;
	
	private final UserServiceImpl userService;

	@Operation(summary = "Authenticate user", description = "This API creates a JWT token for user authentication.")
	@PostMapping("/login")
	public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		return jwtService.createJwtToken(jwtRequest);
	}

	@Operation(summary = "Register new user", description = "This API registers a new user.")
	@PostMapping("/register")
	public ResponseEntity<?> registerNewUser(@RequestBody AppUser user) {
		return userService.registerNewUser(user);
	}
	@PostMapping("/registerStudent")
	public ResponseEntity<?> registerNewStudent(@RequestBody AppUser user) {
		return userService.registerNewStudent(user);
	}

}