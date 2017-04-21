import React from 'react';
import { ChatContainer, QuestionBarContainer, SideBarContainer } from '../containerComponents';

const ParentPage = ({ chats }) => (
  <div className="page_container">
    <QuestionBarContainer />
    {chats.map(chat => (chat.chatRoom ?
      <ChatContainer key={chat.chatIndex} chatIndex={chat.chatIndex} startOpen={chat.chatopen} />
      : null))}
    <SideBarContainer />
  </div>
);

export default ParentPage;
