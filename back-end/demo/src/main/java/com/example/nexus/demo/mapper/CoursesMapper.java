package com.example.nexus.demo.mapper;

import com.example.nexus.demo.dto.CoursesDTO;
import com.example.nexus.demo.model.Courses;


public class CoursesMapper {
    public static CoursesDTO maptoCoursesDTO(Courses c){
        return new CoursesDTO(
            c.getId(),
            c.getName(),
            c.getDescription(),
            c.getImgUrl(),
            c.getPrice()
        );
    }
    public static Courses maptCourses(CoursesDTO c){
        return new Courses(
            c.getId(),
            c.getName(),
            c.getDescription(),
            c.getImgUrl(),
            c.getPrice()
        );
    }
}
