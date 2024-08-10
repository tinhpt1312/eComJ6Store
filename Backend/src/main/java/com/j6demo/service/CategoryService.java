package com.j6demo.service;


import com.j6demo.entity.Category;

import java.util.List;

public interface CategoryService {

	List<Category> findAll();
	
	Category findById(String id);

}
