package com.example.nexus.demo.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.nexus.demo.dto.EnquiryDTO;
import com.example.nexus.demo.model.Enquiry;
import com.example.nexus.demo.repository.UserRepository;

@Component 
public class EnquiryMapper {
    private static UserRepository ur;
    @Autowired
    public EnquiryMapper(UserRepository ur){
        this.ur=ur;
    }
    public static EnquiryDTO maptoEnquiryDTO(Enquiry e){
        return new EnquiryDTO(e.getId(), e.getEnqDate(), e.getReplyDate(), e.getEnqDesc(), e.getEnqReply(), e.getEnqStatus(), e.getUser().getId());
    }
    public static Enquiry maptoEnquiry(EnquiryDTO e){
        return new Enquiry(e.getId(), e.getEnqDate(), e.getReplyDate(), e.getEnqDesc(), e.getEnqReply(), e.getEnqStatus(), ur.findById(e.getUserid()).orElse(null));
    }
}