package com.example.nexus.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CoursesDTO {
    private Long id;
    private String name;
    private String description;
    private String imgUrl;
    private Integer price;
}
