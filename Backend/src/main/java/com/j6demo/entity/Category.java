package com.j6demo.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "Categories")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Category implements Serializable {
	@Id
	private String id;

	private String name;

	private String image;

	@JsonIgnore
	@OneToMany(mappedBy = "category")
	private List<Product> products;
	
}
