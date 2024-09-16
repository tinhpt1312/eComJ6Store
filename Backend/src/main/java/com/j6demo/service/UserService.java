package com.j6demo.service;

import com.j6demo.dto.InfoResponse;
import com.j6demo.dto.UserRequest;

public interface UserService {

    InfoResponse createAccount(UserRequest userRequest);

}
