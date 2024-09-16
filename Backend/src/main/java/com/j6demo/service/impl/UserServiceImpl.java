package com.j6demo.service.impl;

import com.j6demo.dto.InfoResponse;
import com.j6demo.dto.UserRequest;
import com.j6demo.entity.Account;
import com.j6demo.entity.Authority;
import com.j6demo.entity.Role;
import com.j6demo.repository.AccountRepository;
import com.j6demo.repository.AuthorityRepository;
import com.j6demo.repository.RoleRepository;
import com.j6demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    AuthorityRepository authorityRepository;

    @Override
    public InfoResponse createAccount(UserRequest userRequest) {
        Role empRole = roleRepository.findByName("EMP");
        Authority empAuthority = Authority.builder()
                .role(empRole)
                .build();

        Account newAccount = Account.builder()
                .username(userRequest.getUsername())
                .password(userRequest.getPassword())
                .email(userRequest.getEmail())
                .fullName(userRequest.getFullName())
                .photo(userRequest.getImage())
                .authorities(List.of(empAuthority))
                .build();

        empAuthority.setAccount(newAccount);

        accountRepository.save(newAccount);
        authorityRepository.save(empAuthority);

        return null;
    }
}
