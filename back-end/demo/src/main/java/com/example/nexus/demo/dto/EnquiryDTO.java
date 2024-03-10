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

public class EnquiryDTO {
    private Long id;
    private Date enqDate;
    private Date replyDate;
    private String enqDesc;
    private String enqReply;
    private Boolean enqStatus;
    private Integer userid;
}
