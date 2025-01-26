package com.socialweb.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.socialweb.models.Chat;
import com.socialweb.models.User;
import com.socialweb.repository.ChatRepository;

@Service
public class ChatServiceImplementation implements ChatService{

	@Autowired
	private ChatRepository chatRepository;
	
	@Override
	public Chat createChat(User reqUser, User user2) {
		
		Chat isExist = chatRepository.findChatByUsersId(user2, reqUser);
		
		if(isExist!=null) {
			return isExist;
		}
		Chat chat = new Chat();
		
		chat.getUser().add(user2);
		chat.getUser().add(reqUser);
		chat.setTimestamp(LocalDateTime.now());
		
		return chatRepository.save(chat);
	}

	@Override
	public Chat findChatById(Integer chatId) throws Exception {
		Optional<Chat> opt = chatRepository.findById(chatId);
		
		if(opt.isEmpty()) {
			throw new Exception("Chat does not exist with id : "+ chatId);
		}
		return opt.get();
	}

	@Override
	public List<Chat> findUsersChat(Integer userId) {
		// TODO Auto-generated method stub
		return chatRepository.findByUserId(userId);
	}

}
