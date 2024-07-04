package com.j6demo.repository;

import com.j6demo.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AccountRepository extends JpaRepository <Account, String> {

}
