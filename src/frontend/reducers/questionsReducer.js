const questionsReducer = (state = [], action) => {
  switch (action.type) {
    // case 'NEW_QUESTION':
    //   return state.concat(action.question);
    case 'LOAD_QUESTIONS':
      return [...state, ...action.questions];
    case 'REMOVE_QUESTION':
      return state.filter((question) => {
        if (question.id !== action.questionId && question._id !== action.questionId) {
          return true;
        }
        return false;
      });
    case 'ADD_QUESTION':
      if (action.user._id !== action.question.asker) {
        return state.concat(action.question);
      }
      return state;
    default:
      return state;
  }
};

export default questionsReducer;
