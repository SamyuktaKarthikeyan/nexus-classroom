package com.example.nexus.demo.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.nexus.demo.dto.AdmissionDTO;
import com.example.nexus.demo.dto.PaymentDTO;
import com.example.nexus.demo.model.Courses;
import com.example.nexus.demo.repository.CoursesRepository;
import com.example.nexus.demo.repository.UserRepository;

@Component 
public class AdmissionsTableMapper {

    private static CoursesRepository coursesRepository; 
    private static UserRepository userRepository; 

    @Autowired 
    public AdmissionsTableMapper(CoursesRepository coursesRepository, UserRepository userRepository) {
        this.coursesRepository = coursesRepository;
        this.userRepository = userRepository;
    }

   

    public static AdmissionDTO mapToAdmissionsTable(PaymentDTO paymentDTO) {
        Courses k=coursesRepository.findById(paymentDTO.getCourseId()).orElse(null);
        return new AdmissionDTO(paymentDTO.getId(), paymentDTO.getAdminDate(), paymentDTO.getUserId(), paymentDTO.getCourseId(), k.getName(), k.getDescription(), k.getImgUrl(), k.getPrice());
    }
}
