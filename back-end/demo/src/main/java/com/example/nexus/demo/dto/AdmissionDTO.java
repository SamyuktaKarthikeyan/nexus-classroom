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
public class AdmissionDTO {
    private Long id;
    private Date adminDate;
    private Integer userId;
    private Long courseId;
    private String courseName;
    private String courseDescription;
    private String courseImgUrl;
    private Integer coursePrice;
}
