package com.example.nexus.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.nexus.demo.dto.CoursesDTO;
import com.example.nexus.demo.dto.EnquiryDTO;
import com.example.nexus.demo.service.EnquiryServices;

@RestController
@RequestMapping("/api/enquiry/")
@CrossOrigin(origins = "http://localhost:5173")
public class EnquiryController {
    @Autowired
    private final EnquiryServices e;

    public EnquiryController(EnquiryServices e){
        this.e=e;
    }
    @PostMapping("/addEnquiry")
    @PreAuthorize("hasAuthority('ROLE_STUDENT')")
    public ResponseEntity<EnquiryDTO> addEnquiry(@RequestBody EnquiryDTO eq) {
        EnquiryDTO c=e.addEnquiry(eq);
        return new ResponseEntity<>(c, HttpStatus.CREATED);
    }
    
    @PutMapping("/replyEnquiry")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<EnquiryDTO> replyEnquiry(@RequestBody EnquiryDTO eq) {
        EnquiryDTO c=e.replyEnquiry(eq);
        return new ResponseEntity<>(c, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<EnquiryDTO>> allEnquiries(){
        List<EnquiryDTO> ans=e.allEnquiries();
        return new ResponseEntity<>(ans,HttpStatus.CREATED);
    }
    
    @GetMapping("/pendingSelf/{id}")
    public ResponseEntity<List<EnquiryDTO>> pendingSelfEnquiries(@PathVariable Integer id){
        List<EnquiryDTO> ans=e.pendingSelfEnquiries(id);
        return new ResponseEntity<>(ans,HttpStatus.CREATED); 
    }
    @GetMapping("/repliedSelf/{id}")
    public ResponseEntity<List<EnquiryDTO>> repliedSelfEnquiries(@PathVariable Integer id){
        List<EnquiryDTO> ans=e.repliedSelfEnquiries(id);
        return new ResponseEntity<>(ans,HttpStatus.CREATED); 
    }
}
