package com.j6demo.service;


import com.j6demo.entity.Product;

import java.util.List;

public interface ProductService {

	List<Product> findAll();

	Product findById(int id);

}
