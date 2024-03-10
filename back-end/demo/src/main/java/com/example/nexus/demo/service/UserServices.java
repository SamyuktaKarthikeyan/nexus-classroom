package com.example.nexus.demo.service;

import org.springframework.http.ResponseEntity;

import com.example.nexus.demo.dto.UserDTO;
import com.example.nexus.demo.model.AppUser;

public interface UserServices {
    UserDTO addUser(UserDTO u);
    ResponseEntity<?> registerNewUser(AppUser user);
    ResponseEntity<?> registerNewStudent(AppUser user);

}
