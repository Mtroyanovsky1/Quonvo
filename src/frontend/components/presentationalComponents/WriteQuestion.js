import React from 'react';

const defaultHandle = 'Anonymous';

// WriteQuestion will be used in a few places, with different functionality
// when submit is clicked depending on the situation. Thus, we are writing
// it as a purely presentational component, and whatever renders it will be
// responsible for passing the onClick function in as a property
const WriteQuestion = ({ onSubmitQuestion, afterSubmit, topics }) => {
  let contentField;
  let genre = topics[0];
  let handleField;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const content = contentField.value.trim();
        const handle = handleField.value.trim() || defaultHandle;

        if (content) {
          onSubmitQuestion(genre, content, handle);
          if (afterSubmit) afterSubmit();
        }
      }}
    >
      <div className="container">
        <h2 className="genre_bold">QUESTION</h2>
        <textarea
          className="question"
          ref={(node) => { contentField = node; }}
          placeholder="Enter text here ..."
          maxLength="150"
        />
        <h2 className="genre_bold">HANDLE</h2>
        <input   maxLength="8" type="text" placeholder={defaultHandle} ref={(node) => { handleField = node; }} />
        <h4 className="genre_bold"> SUBJECT </h4>
        <div className="genre">
          <div className="subject">

            <select
              className="searchbar"
              defaultValue={topics[0]}
              onChange={(x) => { genre = x.target.value; }}
            >
              {topics.map(topic => <option key={topic} value={topic}>{topic}</option>)}
            </select>
          </div>
          <div className="button_container">
            <button className="answer_button" type="submit"> GET AN ANSWER </button>
          </div>
        </div>
      </div>

    </form>

  );
};

export default WriteQuestion;
