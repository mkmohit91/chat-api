package com.mohit.chatapi.entity;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class Message {
    private String id;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String content;

    public Message(String email, String content) {
        this.email = email;
        this.content = content;
    }

    public Message(String id, String email, String content) {
        this.id = id;
        this.email = email;
        this.content = content;
    }

    public Message() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "Message{" +
                "id='" + id + '\'' +
                ", email='" + email + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
