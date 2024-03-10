package com.example.nexus.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.nexus.demo.model.AppUser;
import java.util.Optional;


public interface UserRepository extends JpaRepository<AppUser,Integer> {
    Optional<AppUser> findByEmail(String email);
}
