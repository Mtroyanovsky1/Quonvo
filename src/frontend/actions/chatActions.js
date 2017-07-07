// import { sendMessage as apiSendMessage } from 'api';
import io from 'socket.io-client';
import {
   updateQuestion as apiUpdateQuestion,
   endChat as apiEndChat,
   getQuestion as apiGetQuestion
   } from 'api';
// actions affecting an individual chat
const socket = io(DOMAIN);

let nextid = 0; // TODO make a thunk that hits API and uses id from response
                // or make it take an id and let whoever calls it do the saving
const newMessage = (content, user, chatIndex) => ({
  type: 'NEW_MESSAGE',
  chatIndex,
  message: {
    content,
    user,
    id: nextid++
  }
});

export const sendMessage = (content, chatIndex) => newMessage(content, 'YOU', chatIndex);
export const receiveMessage = (content, chatIndex) => newMessage(content, 'THEM', chatIndex);
export const notifyMessage = chatIndex => ({ type: 'NOTIFY_MESSAGE', chatIndex });

export const openChat = chatIndex => ({ type: 'OPEN_CHAT', chatIndex });
export const minimizeChat = chatIndex => ({ type: 'MINIMIZE_CHAT', chatIndex });
export const endChat = chatIndex => ({ type: 'END_CHAT', chatIndex });
export const newChattingPartner = (partner, chatIndex) => ({ type: 'NEW_PARTNER', partner, chatIndex });
export const joinRoom = (room, chatIndex) => ({ type: 'JOIN_ROOM', room, chatIndex });
export const setHandle = (handle, chatIndex) => ({ type: 'SET_HANDLE', handle, chatIndex });
export const setQuestion = (question, chatIndex) => ({ type: 'SET_QUESTION', question, chatIndex });
export const questionReady = () => ({ type: 'ANSWERER_FOUND' });
export const clearYourQuestion = () => ({ type: 'CLEAR_YOUR_QUESTION' });
export const removeQuestion = questionId => ({ type: 'REMOVE_QUESTION', questionId });

export const questionThunk = questionId => (dispatch) => {
  apiGetQuestion(questionId)
  .then((questionContent) => {
    dispatch(setQuestion(questionContent, questionId));
  });
};

export const endChatThunk = (
  messages,
  questionId,
  askerHandle,
  rating,
  questionAnswered,
  wantAnotherAnswer
) => (dispatch) => {
  dispatch(endChat(questionId));
  if(!wantAnotherAnswer) {
  dispatch(clearYourQuestion());
}
  if(wantAnotherAnswer) {

  }
  apiEndChat(messages, questionId, askerHandle, rating, questionAnswered);
};

export const onQuestionClick = (questionId, theirHandle, yourHandle, questionContent) =>
(dispatch) => {
  dispatch(removeQuestion(questionId));
  dispatch(joinRoom(questionId, questionId));
  dispatch(setQuestion(questionContent, questionId));
  dispatch(setHandle(yourHandle, questionId));
  dispatch(newChattingPartner(theirHandle, questionId));
  dispatch(openChat(questionId));

  socket.emit('questionClicked', { questionId });
  apiUpdateQuestion(questionId);
};

export const onQuestionCreate = (questionId, handle) => (dispatch) => {
  dispatch(joinRoom(questionId, questionId));
  dispatch(setHandle(handle, questionId));
};
