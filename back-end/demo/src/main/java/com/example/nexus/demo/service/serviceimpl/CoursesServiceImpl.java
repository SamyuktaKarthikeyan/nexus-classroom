package com.example.nexus.demo.service.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.nexus.demo.dto.CoursesDTO;
import com.example.nexus.demo.mapper.CoursesMapper;
import com.example.nexus.demo.model.Courses;
import com.example.nexus.demo.repository.CoursesRepository;
import com.example.nexus.demo.service.CoursesServices;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CoursesServiceImpl implements CoursesServices{
    private CoursesRepository cr;
    public CoursesDTO createCourse(CoursesDTO cd){
        Courses c=CoursesMapper.maptCourses(cd);
        Courses s=cr.save(c);
        return CoursesMapper.maptoCoursesDTO(s);
    }
    public List<CoursesDTO> getAllCourses(){
        List<Courses> courses=cr.findAll();
        List<CoursesDTO> cdtos=new ArrayList<>();
        for(Courses c:courses){
            cdtos.add(CoursesMapper.maptoCoursesDTO(c));
        }
        return cdtos;
    }
    public CoursesDTO getCourseById(Long id){
        Courses k=cr.findById(id).orElse(null);
        return CoursesMapper.maptoCoursesDTO(k);
    }
    public CoursesDTO editCourseById(Long id, CoursesDTO cd){
        Courses ans=CoursesMapper.maptCourses(cd);
        Courses k=cr.findById(ans.getId()).orElse(null);
        k.setId(ans.getId());
        k.setDescription(ans.getDescription());
        k.setImgUrl(ans.getImgUrl());
        k.setName(ans.getName());
        k.setPrice(ans.getPrice());
        Courses t=cr.save(k);
        return CoursesMapper.maptoCoursesDTO(t);
    }
    public void deleteCourseById(Long id){
        cr.deleteById(id);
    }
}
