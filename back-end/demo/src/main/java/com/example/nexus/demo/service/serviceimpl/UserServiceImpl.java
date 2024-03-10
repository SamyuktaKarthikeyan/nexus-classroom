package com.example.nexus.demo.service.serviceimpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.nexus.demo.dto.AppUserSusDTO;
import com.example.nexus.demo.dto.UserDTO;
import com.example.nexus.demo.mapper.UserMapper;
import com.example.nexus.demo.model.AppUser;
import com.example.nexus.demo.repository.UserRepository;
import com.example.nexus.demo.service.UserServices;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class UserServiceImpl implements UserServices {
    private UserRepository ur;
    private PasswordEncoder passwordEncoder;

    @Autowired
    UserServiceImpl(UserRepository ur, PasswordEncoder passwordEncoder){
        this.ur=ur;
        this.passwordEncoder=passwordEncoder;
    }

    
    public UserDTO addUser(UserDTO u){
        AppUser us=UserMapper.maptoUser(u);
        AppUser k=ur.save(us);
        return UserMapper.maptoUserDTO(k);
    }

    @Override
	public ResponseEntity<?> registerNewUser(AppUser user) {
		String email = user.getEmail();

		AppUser existingUserEmail = ur.findByEmail(email).orElse(null);


		if (existingUserEmail != null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("User already exists with this email or username");
		}
        user.setRoles(user.getRoles());
		
		user.setPassword(getEncodedPassword(user.getPassword()));
		user.setMobilenum(user.getMobilenum());
		AppUser savedUser = ur.save(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
	}

    public ResponseEntity<?> registerNewStudent(AppUser user) {
		String email = user.getEmail();

		AppUser existingUserEmail = ur.findByEmail(email).orElse(null);


		if (existingUserEmail != null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("User already exists with this email or username");
		}
        user.setRoles("STUDENT");
		
		user.setPassword(getEncodedPassword(user.getPassword()));
		user.setMobilenum(user.getMobilenum());
		AppUser savedUser = ur.save(user);
		AppUserSusDTO ans=UserMapper.maptoAppUserSusDTO(savedUser);
		return ResponseEntity.status(HttpStatus.CREATED).body(ans);
	}
    public String getEncodedPassword(String password) {
		return passwordEncoder.encode(password);
	}
}
