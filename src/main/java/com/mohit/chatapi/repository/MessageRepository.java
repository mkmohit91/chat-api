package com.mohit.chatapi.repository;

import com.mohit.chatapi.entity.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class MessageRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public boolean saveMessage(Message message){
        if(message != null && (message.getContent() != null) && message.getEmail() != null){
            String insertMsgQry = "insert into messages (email,message) values (?,?)";
            return jdbcTemplate.update(insertMsgQry, message.getEmail(), message.getContent()) > 0;
        }
        return false;
    }

    public List<Message> getMessages(){
        String selectQuery = "SELECT * FROM MESSAGES order by id desc";

        return jdbcTemplate.query(
                selectQuery, (rs,rowNum) -> new Message(rs.getString("id"),
                       rs.getString("email"),
                       rs.getString("message")));
    }
}
