package com.example.nexus.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.nexus.demo.dto.PaymentDTO;
import com.example.nexus.demo.service.AdmissionServices;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/api/student/admission")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentAdmissionController {
    
    @Autowired
    private final AdmissionServices a;
    public StudentAdmissionController(AdmissionServices a){
        this.a=a;
    }

    @PostMapping("/addadmission")
    public ResponseEntity<PaymentDTO> addCourse(@RequestBody PaymentDTO p) {
        PaymentDTO c=a.addAdmissionDetails(p);
        return new ResponseEntity<>(c, HttpStatus.CREATED);
    }
    
    @GetMapping("/{id}")
    public PaymentDTO getMethodName(@PathVariable Long id) {
        return a.admissionDetails(id);
    }
    
    
    @PostMapping("/partialpayment")
    public ResponseEntity<PaymentDTO> partialPayment(@RequestBody PaymentDTO p) {
        PaymentDTO c=a.editPayment(p);
        return new ResponseEntity<>(c, HttpStatus.CREATED);
    }
    

}
