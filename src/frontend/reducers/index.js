import { combineReducers } from 'redux';
import chats, * as chatsSels from './chatsReducer';
import questions from './questionsReducer';

const currentQuestionPage = (state = 0, action) => {
  switch (action.type) {
    case 'NEXT_QUESTION_PAGE':
      return state + 1;
    case 'PREVIOUS_QUESTION_PAGE':
      return state - 1;
    case 'FIRST_QUESTION_PAGE':
      return 0;
    default:
      return state;
  }
};

const emptyYourQuestion = { ready: false, question: null };
const yourQuestion = (state = emptyYourQuestion, action) => {
  switch (action.type) {
    case 'NEW_QUESTION':
      return Object.assign({}, emptyYourQuestion, { question: action.question });
    case 'ANSWERER_FOUND':
      return Object.assign({}, state, { ready: true });
    case 'CLEAR_YOUR_QUESTION':
      return emptyYourQuestion;
    default:
      return state;
  }
};

const newUser = (state = null, action) => {
  switch (action.type) {
    case 'NEW_USER':
      return action.user;
    default:
      return state;
  }
};

const newArchives = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ARCHIVES':
      return action.archives;
    default:
      return state;
  }
};
const loading = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return true;
    case 'DONE_LOADING':
      return false;
    default:
      return state;
  }
};

const newRankings = (state = [], action) => {
  switch (action.type) {
    case 'NEW_RANKINGS':
      return action.rankings;
    default:
      return state;
  }
};

const pageNumber = (state = 0, action) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return state + 1;
    case 'PREVIOUS_PAGE':
      return state - 1;
    case 'PAGE_ZERO':
      return 0;
    default:
      return state;
  }
};

// TODO this in in the models and the reducers. Import from 1 location?
const topics = () => ['Academics', 'Travel', 'Entertainment', 'Advice'];

const EMPTY = 'empty-0';
const ARCHIVES = 'archives-0';
const RANKINGS = 'rankings-0';
const chat = id => `chat-${id}`;
const UIState = (state = EMPTY, action) => {
  switch (action.type) {
    case 'FULL_ARCHIVES':
      return ARCHIVES;
    case 'CLOSE_ARCHIVES':
      return state === ARCHIVES ? EMPTY : state;
    case 'OPEN_CHAT':
      return chat(action.chatIndex);
    case 'MINIMIZE_CHAT':
    case 'END_CHAT':
      return state === chat(action.chatIndex) ? EMPTY : state;
    case 'FULL_RANKINGS':
      return RANKINGS;
    case 'CLOSE_RANKINGS':
      return state === RANKINGS ? EMPTY : state;
    default:
      return state;
  }
};

export default combineReducers({
  chats,
  questions,
  currentQuestionPage,
  yourQuestion,
  newArchives,
  UIState,
  newRankings,
  topics,
  newUser,
  pageNumber,
  loading
});

// selectors
export const getQuestions = state => state.questions;
export const getYourQuestion = state => state.yourQuestion.question;
export const getYourQuestionReady = state => state.yourQuestion.ready;
export const getCurrentQuestionPage = state => state.currentQuestionPage;
export const getUser = state => state.newUser;
export const getChats = state => state.chats;
export const getLoading = state => state.loading;
export const getChat = (state, index) => chatsSels.getChat(state.chats, index);
export const getMessages = (state, index) => chatsSels.getMessages(state.chats, index);
export const getChattingPartner = (state, idx) => chatsSels.getChattingPartner(state.chats, idx);
export const getRoom = (state, index) => chatsSels.getRoom(state.chats, index);
export const getMyHandle = (state, index) => chatsSels.getMyHandle(state.chats, index);
export const getQuestion = (state, index) => chatsSels.getQuestion(state.chats, index);
// export const getChatOpen = (state, index) => chatsSels.getChatOpen(state.chats, index);
export const getArchives = state => state.newArchives;
export const areArchivesOpen = state => state.UIState === ARCHIVES;
export const areRankingsOpen = state => state.UIState === RANKINGS;
export const getRankings = state => state.newRankings;
export const getUIstate = state => state.UIState;
export const getPageNumber = state => state.pageNumber;
export const getVisibleChatIndex = (state) => {
  const [type, index] = getUIstate(state).split('-');
  return type === 'chat' ? index : null;
};
export const getVisibleChat = (state) => {
  const [type, index] = getUIstate(state).split('-');
  return type === 'chat' ? Object.assign({}, getChat(state, index), { chatIndex: index }) : null;
};
export const isQMine = (state, id) => getYourQuestion(state) && getYourQuestion(state).id === id;
export const getTopics = state => state.topics;
