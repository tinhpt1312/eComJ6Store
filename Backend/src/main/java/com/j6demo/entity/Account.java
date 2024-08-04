package com.j6demo.entity;




import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;


@Data
@Entity
@Table(name = "Accounts")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Account  implements Serializable {

	@Id
	private String username;
	private String password;
	private String fullName;
	private String email;
	private String photo;
	@JsonIgnore
	@OneToMany(mappedBy = "account")
	List<Order> orders;
	
	@JsonIgnore
	@OneToMany(mappedBy = "account", fetch = FetchType.EAGER)
	List<Authority> authorities;
}
