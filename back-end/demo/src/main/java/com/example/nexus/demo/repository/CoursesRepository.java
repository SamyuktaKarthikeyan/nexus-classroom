package com.example.nexus.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.nexus.demo.model.Courses;

public interface CoursesRepository extends JpaRepository<Courses,Long> {
    
}
