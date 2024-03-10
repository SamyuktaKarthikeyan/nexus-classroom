package com.example.nexus.demo.service.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.nexus.demo.dto.EnquiryDTO;
import com.example.nexus.demo.mapper.EnquiryMapper;
import com.example.nexus.demo.model.AppUser;
import com.example.nexus.demo.model.Enquiry;
import com.example.nexus.demo.repository.EnquiryRepository;
import com.example.nexus.demo.repository.UserRepository;
import com.example.nexus.demo.service.EnquiryServices;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EnquiryServiceImpl implements EnquiryServices {
    private EnquiryRepository er;
    private UserRepository ur;
   public EnquiryDTO addEnquiry(EnquiryDTO e){
        Enquiry q=EnquiryMapper.maptoEnquiry(e);
        q.setEnqStatus(false);
        q.setEnqReply("");
        q.setReplyDate(null);
        Enquiry t=er.save(q);
        return EnquiryMapper.maptoEnquiryDTO(t);
    }
    
    public EnquiryDTO replyEnquiry(EnquiryDTO e){
        Enquiry k=EnquiryMapper.maptoEnquiry(e);
        Enquiry answer=er.findById(k.getId()).orElse(null);
        answer.setEnqStatus(true);
        answer.setEnqDesc(answer.getEnqDesc());
        answer.setEnqDate(answer.getEnqDate());
        answer.setUser(answer.getUser());
        answer.setEnqReply(k.getEnqReply());
        answer.setReplyDate(k.getReplyDate());
        Enquiry t=er.save(answer);
        return EnquiryMapper.maptoEnquiryDTO(t);
    }

    public List<EnquiryDTO> allEnquiries(){
        List<Enquiry> a=er.findAll();
        List<EnquiryDTO> answer=new ArrayList<>();
        for(Enquiry t:a){
            answer.add(EnquiryMapper.maptoEnquiryDTO(t));
        }
        return answer;
    }

    public List<EnquiryDTO> pendingSelfEnquiries(Integer id){
        AppUser k=ur.findById(id).orElse(null);
        List<Enquiry> a=er.findByUser(k);
        List<EnquiryDTO> ans=new ArrayList<>();
        for(Enquiry l:a){
            if(l.getEnqStatus().equals(false)){
                ans.add(EnquiryMapper.maptoEnquiryDTO(l));
            }
        }
        return ans;
    }
    public List<EnquiryDTO> repliedSelfEnquiries(Integer id){
        AppUser k=ur.findById(id).orElse(null);
        List<Enquiry> a=er.findByUser(k);
        List<EnquiryDTO> ans=new ArrayList<>();
        for(Enquiry l:a){
            if(l.getEnqStatus().equals(true)){
                ans.add(EnquiryMapper.maptoEnquiryDTO(l));
            }
        }
        return ans;
    }
}
