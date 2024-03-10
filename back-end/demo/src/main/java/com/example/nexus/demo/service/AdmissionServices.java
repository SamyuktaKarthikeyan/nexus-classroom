package com.example.nexus.demo.service;

import java.util.List;

import com.example.nexus.demo.dto.AdmissionDTO;
import com.example.nexus.demo.dto.PaymentDTO;
import com.example.nexus.demo.dto.PaymentTableDTO;

public interface AdmissionServices {
    PaymentDTO addAdmissionDetails(PaymentDTO p);
    PaymentDTO admissionDetails(Long id);
    void deleteAdmissionById(Long id);
    List<PaymentDTO> viewAllAdmissions();
    List<AdmissionDTO> coursesOfStudent(Integer id);
    List<PaymentTableDTO> paymentOfStudent(Integer id);
    public PaymentDTO editPayment(PaymentDTO p);
}
