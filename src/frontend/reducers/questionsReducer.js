const questionsReducer = (state = [], action) => {
  switch (action.type) {
    // case 'NEW_QUESTION':
    //   return state.concat(action.question);
    case 'LOAD_QUESTIONS':
      return [...state, ...action.questions];
    case 'REMOVE_QUESTION':
      return state.filter(question => question.id !== action.questionId);
    case 'ADD_QUESTION': {
      const arr = [action.question];
      return state.concat(arr);
    }
    default:
      return state;
  }
};

export default questionsReducer;
