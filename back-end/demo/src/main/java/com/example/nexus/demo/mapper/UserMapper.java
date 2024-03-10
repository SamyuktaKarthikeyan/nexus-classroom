package com.example.nexus.demo.mapper;

import org.springframework.stereotype.Component;

import com.example.nexus.demo.dto.AppUserSusDTO;
import com.example.nexus.demo.dto.UserDTO;
import com.example.nexus.demo.model.AppUser;

@Component
public class UserMapper {
   
    public static UserDTO maptoUserDTO(AppUser u){
        return new UserDTO(u.getId(), u.getName(), u.getEmail(), u.getMobilenum(), u.getPassword(), u.getRoles());
    }
    public static AppUser maptoUser(UserDTO u){
        return new AppUser(u.getId(), u.getName(), u.getEmail(), u.getMobilenum(), u.getPassword(), u.getRoles());
    }
    public static AppUserSusDTO maptoAppUserSusDTO(AppUser u){
        return new AppUserSusDTO(u.getId(), u.getName(), u.getEmail(), u.getMobilenum(), u.getRoles());
    }
}
