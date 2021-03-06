import React from 'react';
// messages is an array that has each message content, an id, and whether it's yours
// The message array must have a key called user that is either THEM or YOU
// TODO the colors of the messages should probably be different

const MessagesBox = ({ messages }) => (
  <div className="wrapper2">
    <div
      className="chat_body"
      ref={((node) => {
        const myNode = node;
        return myNode && (myNode.scrollTop = myNode.scrollHeight);
      })}
    >
      {messages.map(message =>
        <div key={message.id} className={`chatmessage${message.user}`}>
          <div className="message_text"> {message.content} </div>
        </div>
      )}
    </div>
  </div>
);

export default MessagesBox;
