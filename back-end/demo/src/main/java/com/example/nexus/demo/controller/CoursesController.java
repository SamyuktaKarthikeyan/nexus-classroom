package com.example.nexus.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.nexus.demo.dto.CoursesDTO;
import com.example.nexus.demo.service.CoursesServices;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/courses/")
@CrossOrigin(origins = "http://localhost:5173")
public class CoursesController {
    
    @Autowired
    private final CoursesServices cs;

    public CoursesController(CoursesServices cs){
        this.cs=cs;
    }

    @PostMapping("/addCourse")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<CoursesDTO> addCourse(@RequestBody CoursesDTO course) {
        CoursesDTO c=cs.createCourse(course);
        return new ResponseEntity<>(c, HttpStatus.CREATED);
    }

    @GetMapping("/getAllCourses")
    public ResponseEntity<List<CoursesDTO>> getAllCourses(){
        List<CoursesDTO> courses=cs.getAllCourses();
        return ResponseEntity.ok(courses);
    }
    

    @GetMapping("/{id}")
    public ResponseEntity<CoursesDTO> getCourseById(@PathVariable Long id){
        CoursesDTO ans=cs.getCourseById(id);
        return ResponseEntity.ok(ans);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CoursesDTO> editCourseById(@PathVariable Long id, @RequestBody CoursesDTO courses){
        CoursesDTO m=cs.editCourseById(id, courses);
        return ResponseEntity.ok(m);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public void deleteCourseById(@PathVariable Long id){
        cs.deleteCourseById(id);
    }
    
    
}
