package com.j6demo.service.impl;

import com.j6demo.entity.Product;
import com.j6demo.repository.ProductRepository;
import com.j6demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository productRepository;


	@Override
	public List<Product> findAll() {
		return productRepository.findAll();
	}

	@Override
	public Product findById(int id) {
		return productRepository.findById(id).get();
	}
}
