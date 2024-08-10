package com.j6demo.rest.controller;


import com.j6demo.entity.Product;
import com.j6demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
@CrossOrigin("*")
public class ProductRestController {

    @Autowired
    ProductService productService;

    @GetMapping("")
    public List<Product> getProducts() {
        return productService.findAll();
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable int id) {
        return productService.findById(id);
    }

    @GetMapping("/filter/{caId}")
    public List<Product> getProductCategory(@PathVariable String caId){
        return productService.findByCategory(caId);
    }
}
