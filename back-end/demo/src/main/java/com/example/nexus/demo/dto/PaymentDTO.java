package com.example.nexus.demo.dto;

import java.sql.Date;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDTO {
    private Long id;
    private Boolean paystatus;
    private Date adminDate;
    private Date paydate;
    private Integer userId;
    private Integer amtPaid;
    private Long courseId;
}
