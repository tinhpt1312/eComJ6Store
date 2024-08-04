package com.j6demo.rest.controller;

import com.j6demo.entity.Category;
import com.j6demo.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/category")
public class CategoryRestController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("")
    public List<Category> getAllCategory() {
        return categoryService.findAll();
    }

}
