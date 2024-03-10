package com.example.nexus.demo.service;

import java.util.List;

import com.example.nexus.demo.dto.CoursesDTO;

public interface CoursesServices {
    CoursesDTO createCourse(CoursesDTO cd);
    List<CoursesDTO> getAllCourses();
    CoursesDTO getCourseById(Long id);
    CoursesDTO editCourseById(Long id, CoursesDTO cd);
    void deleteCourseById(Long id);
}
