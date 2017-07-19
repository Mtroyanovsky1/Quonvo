import React from 'react';

const AnswerQuestion = ({
  submit,
  user
}) => {
  const name = user.name;
  let handleField = name;
  return (
    <div className="answer_wrapper">
      <div className="answer_name">NAME</div>
      <select
        // maxLength="8"
        // type="text"
        className="searchbar_handle"
        defaultValue={name}
        onChange={(w) => { handleField = w.target.value; }}
      >
        <option value={'Anonymous'}> {'Anonymous'} </option>
        <option value={name}> {name} </option>
      </select>
      <button
        className="answer_button"
        onClick={() => submit(handleField)}
      >
        Answer Question
      </button>
    </div>
  );
};

export default AnswerQuestion;
