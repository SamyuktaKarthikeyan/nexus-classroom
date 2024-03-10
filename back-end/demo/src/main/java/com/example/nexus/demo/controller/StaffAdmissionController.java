package com.example.nexus.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.nexus.demo.dto.PaymentDTO;
import com.example.nexus.demo.service.AdmissionServices;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class StaffAdmissionController {
    @Autowired
    private final AdmissionServices ad;

    public StaffAdmissionController(AdmissionServices ad){
        this.ad=ad;
    }

    @GetMapping("/admissions")
    public List<PaymentDTO> getAllAdmissions(){
        return ad.viewAllAdmissions();
    }
    
    @DeleteMapping("/admission/{id}")
    public void deleteAdmissionById(@PathVariable Long id){
        ad.deleteAdmissionById(id);
    }
}
