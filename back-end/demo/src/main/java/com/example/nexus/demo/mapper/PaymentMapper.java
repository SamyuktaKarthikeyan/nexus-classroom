package com.example.nexus.demo.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.nexus.demo.dto.AdmissionDTO;
import com.example.nexus.demo.dto.PaymentDTO;
import com.example.nexus.demo.dto.PaymentTableDTO;
import com.example.nexus.demo.model.Courses;
import com.example.nexus.demo.model.Payment;
import com.example.nexus.demo.repository.CoursesRepository;
import com.example.nexus.demo.repository.UserRepository;

@Component 
public class PaymentMapper {

    private static CoursesRepository coursesRepository; 
    private static UserRepository userRepository; 

    @Autowired 
    public PaymentMapper(CoursesRepository coursesRepository, UserRepository userRepository) {
        this.coursesRepository = coursesRepository;
        this.userRepository = userRepository;
    }

    public static PaymentDTO mapToPaymentDTO(Payment payment) {
        return new PaymentDTO(payment.getId(), payment.getPaystatus(), payment.getAdminDate(), payment.getPaydate(), payment.getUser().getId(), payment.getAmtPaid(), payment.getCourse().getId());
    }

    public static Payment mapToPayment(PaymentDTO paymentDTO) {
        return new Payment(
            paymentDTO.getId(),
            paymentDTO.getPaystatus(),
            paymentDTO.getAdminDate(),
            paymentDTO.getPaydate(),
            paymentDTO.getAmtPaid(),
            userRepository.findById(paymentDTO.getUserId()).orElse(null),
            coursesRepository.findById(paymentDTO.getCourseId()).orElse(null)
        );
    }
    public static PaymentTableDTO mapToPaymentDisplay(PaymentDTO ans){
        Courses k=coursesRepository.findById(ans.getCourseId()).orElse(null);
        return new PaymentTableDTO(ans.getId(), ans.getPaystatus(), ans.getAdminDate(), ans.getPaydate(), ans.getUserId(), ans.getCourseId(), k.getName(),k.getImgUrl(),k.getDescription(), k.getPrice(), ans.getAmtPaid());
    }
}
