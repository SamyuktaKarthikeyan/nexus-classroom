package com.example.nexus.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.nexus.demo.model.Payment;
import com.example.nexus.demo.model.AppUser;

import java.util.List;


public interface PaymentRepository extends JpaRepository<Payment,Long>{
    List<Payment> findByUser(AppUser user);
}
