package com.example.nexus.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.nexus.demo.model.AppUser;
import com.example.nexus.demo.model.Enquiry;
import java.util.List;


public interface EnquiryRepository extends JpaRepository<Enquiry,Long> {
    List<Enquiry> findByUser(AppUser user);
}
