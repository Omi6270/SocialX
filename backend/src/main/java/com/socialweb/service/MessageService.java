package com.socialweb.service;

import java.util.List;

import com.socialweb.models.Message;
import com.socialweb.models.User;

public interface MessageService {

	public Message createMessage(User user, Integer chatId, Message req) throws Exception;
	
	public List<Message> findChatsMessages(Integer chatId) throws Exception;
}
