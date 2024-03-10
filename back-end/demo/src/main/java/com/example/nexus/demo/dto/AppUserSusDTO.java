package com.example.nexus.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppUserSusDTO {
    private Integer id;
    private String name;
    private String email;
    private String mobilenum;
    private String roles;
}
