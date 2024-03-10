package com.example.nexus.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.nexus.demo.dto.AdmissionDTO;
import com.example.nexus.demo.dto.PaymentTableDTO;
import com.example.nexus.demo.dto.UserDTO;
import com.example.nexus.demo.service.AdmissionServices;
import com.example.nexus.demo.service.UserServices;

@RestController
@RequestMapping("/api/student")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired
    private final UserServices a;
    private final AdmissionServices p;
    public UserController(UserServices a, AdmissionServices p){
        this.a=a;
        this.p=p;
    }

    @PostMapping("/addStudent")
    public ResponseEntity<UserDTO> addUserEntry(@RequestBody UserDTO p) {
        UserDTO c=a.addUser(p);
        return new ResponseEntity<>(c, HttpStatus.CREATED);
    }
    
    @GetMapping("/courses/{id}")
    public ResponseEntity<List<AdmissionDTO>> courseOfStudent(@PathVariable Integer id){
        List<AdmissionDTO> answer=p.coursesOfStudent(id);
        return new ResponseEntity<>(answer, HttpStatus.CREATED);
    }
    @GetMapping("/payments/{id}")
    public ResponseEntity<List<PaymentTableDTO>> paymentOfStudent(@PathVariable Integer id){
        List<PaymentTableDTO> answer=p.paymentOfStudent(id);
        return new ResponseEntity<>(answer, HttpStatus.CREATED);
    }


}
