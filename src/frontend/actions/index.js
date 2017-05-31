import {
   signIn as apiSignIn,
   signUp as apiSignUp,
   sendMessage as apiSendMessage,
   createQuestion as apiCreateQuestion,
   hotQuestions as apiHotQuestions,
   getArchives as apiGetArchives,
   getRankings as apiGetRankings,
   google as apiGoogle
   } from 'api';
import { onQuestionCreate } from './chatActions';

// thunk
export const signIn = (email, password) => (/* dispatch */) => {
  apiSignIn(email, password)
  .then((resp) => {
    if (!resp.success) {
      // success: false, message: message
      // TODO dispatch action -> 'incorrect email or password' (don't be more descriptive)
    } else {
      // success: true, user: mognoUserObject
      location.href = '/'; // this redirects you to '/'
    }
  })
  .catch((err) => {
    // console.log('error');
    throw err;
  });
};

export const signUp = (email, password, name, interests) => (/* dispatch */) => {
  apiSignUp(email, password, name, interests)
  .then((resp) => {
    if (!resp.success) {
      // success: false, message: message
      // TODO dispatch action -> 'incorrect email or password' (don't be more descriptive)
    } else {
      // success: true, user: mognoUserObject
      location.href = '/'; // this redirects you to '/'
    }
  })
  .catch((err) => {
    // console.log('error');
    throw err;
  });
};
// TODO make a thunk that hits API and uses id from response
// or make it take an id and let whoever calls it do the saving

export const google = () => (/* dispatch */) => {
  apiGoogle()
  .then((responseJson) => {
    console.log('responseJson', responseJson);
    if (!responseJson) {
      // TODO some error message
    } else {
      location.href = '/';
    }
    // TODO dispatch something to my state saying I'm logged in?
    // TODO otherwise remove from actions and possibly remove SigninBarContainer
  })
  .catch((err) => {
    // console.log('error');
    throw err;
  });
};

const newMessage = (content, id, user) => ({
  type: 'NEW_MESSAGE',
  message: {
    content,
    user,
    id
  }
});

export const nextQuestionPage = () => ({
  type: 'NEXT_QUESTION_PAGE'
});

export const previousQuestionPage = () => ({
  type: 'PREVIOUS_QUESTION_PAGE'
});

export const firstQuestionPage = () => ({
  type: 'FIRST_QUESTION_PAGE'
});

const newQuestion = (subject, content, id, handle) => ({

  type: 'NEW_QUESTION',
  question: {
    subject,
    content,
    id,
    handle
  }
});
const loadQuestions = questions => ({
  type: 'LOAD_QUESTIONS',
  questions,
});

export const closeRankings = () => ({
  type: 'CLOSE_RANKINGS'
});

export const fullRankings = () => ({
  type: 'FULL_RANKINGS'
});

const newRankings = rankings => ({
  type: 'NEW_RANKINGS',
  rankings
});

export const newRankingsThunk = topic => (dispatch) => {
  apiGetRankings(topic)
  .then((respJson) => {
    dispatch(newRankings(respJson.rankings));
  })
  .catch((err) => {
    throw err;
  });
};

export const fullArchives = () => ({
  type: 'FULL_ARCHIVES'
});

// May havE to wrap the above action in a function in order to call other dispatch's
// at the same time. With a promise so the order is right.

export const closeArchives = () => ({
  type: 'CLOSE_ARCHIVES'
});

const newArchives = archives => ({
  type: 'NEW_ARCHIVES',
  archives,
});

export const newArchivesThunk = (subject, pageNumber, limit) => (dispatch) => {
  console.log('i got here three');
  console.log(subject, pageNumber, limit);
  apiGetArchives(subject, pageNumber, limit)
  .then((respJson) => {
    console.log(respJson);
    dispatch(newArchives(respJson.archives));
    return respJson;
  })
  .catch((err) => {
    // console.log('error');
    throw err;
  });
};

export const loadMoreQuestionsThunk = (limit, date) => (dispatch) => {
  apiHotQuestions(limit, date)
  .then((responseJson) => {
    // console.log(responseJson);
    // select fields to keep, don't store whole mongo object
    const qs = responseJson.questions.map(({ id, content, subject, bounty, handle, createdTime }) =>
    ({ id, content, subject, bounty, handle, createdTime }));
    dispatch(loadQuestions(qs));
  })
  .catch((err) => {
    // console.log('error');
    throw err;
  });
};

export const newMessageThunk = (chatId, content, user) => (dispatch) => {
  apiSendMessage(chatId, content)
  .then((responseJson) => {
    const id = responseJson.message.id;
    dispatch(newMessage(content, id, user));
  })
  .catch((err) => {
    // console.log('error');
    throw err;
  });
};

export const newQuestionThunk = (subject, content, handle) => (dispatch) => {
  apiCreateQuestion(subject, content, handle)
  .then((responseJson) => {
    /*
  {
    newQuestion: {
      __v: 0
      _id: "58f94e261463e010512bd16e"
      asker: "58da98a8db5a941c5f02ca43"
      content: "make?"
      createdTime: "2017-04-21T00:11:18.564Z"
      handle: "me"
      live: true
      subject: "Academics"
      __proto__: Object
    }
    success: true
  }
    */
    // console.log('new Q response', responseJson);
    const id = responseJson.newQuestion._id;
    dispatch(newQuestion(subject, content, id, handle));
    dispatch(onQuestionCreate(id, handle));
  })
  .catch((err) => {
    // console.log('error');
    throw err;
  });
};
