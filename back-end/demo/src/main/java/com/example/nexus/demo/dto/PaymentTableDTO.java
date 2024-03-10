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
public class PaymentTableDTO {
    private Long id;
    private Boolean paystatus;
    private Date adminDate;
    private Date paydate;
    private Integer userId;
    private Long courseId;
    private String courseName;
    private String courseImgUrl;
    private String courseDescription;
    private Integer coursePrice;
    private Integer amtPaid;

}
