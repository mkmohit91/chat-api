package com.mohit.chatapi.api;

import com.mohit.chatapi.entity.Message;
import com.mohit.chatapi.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessagesController {
    @Autowired
    private MessageRepository repository;

    @PostMapping("/messages")
    public String saveMessage(@RequestBody Message message){
        boolean isSuccessfull = repository.saveMessage(message);
        return isSuccessfull ? "OK" : "NOT_OK";
    }
}
