import React from 'react';
import ReactLoading from 'react-loading';
import ArchivedQuestion from './ArchivedQuestion';
import ArchivedConversation from '../presentationalComponents/ArchivedConversation';

const numberPerPage = 10;

const Archives = ({
  archives,
  newTopic,
  closeArchives,
  openMessages,
  areMessagesOpen,
  messages,
  backToArchives,
  currentTopic,
  topics,
  loading
}) => (
  <div className="archive_fulldisplay" id="fadeAndScale">
    <div className="archive_question_header">
      <span className="bold_caslon">Archives </span>
      <div onClick={() => closeArchives()} className="right_arrow">
        <img alt="" src="assets/arrow-01.png" className="icon" />
      </div>
    </div>
    <div className="navigation_bar">
      {topics.map((topic) => {
        if (currentTopic === topic) {
          return (<span
            style={{ opacity: 0.5, fontSize: '1.6vw' }}
            className="nav"
            onClick={() => newTopic(topic, numberPerPage)}
          >
            { topic }
          </span>);
        }
        return (<span
          className="nav"
          onClick={() => newTopic(topic, numberPerPage)}
        >
          { topic }
        </span>);
      })
    }
    </div>
    <div
      className="archives_display"
      style={{ overflow: 'auto' }}
    >
      {areMessagesOpen
      ?
        <ArchivedConversation messages={messages} backToArchives={() => backToArchives()} />
      :
      loading
        ?
          <ReactLoading
            className="loader"
            type="spin"
            delay={500}
            color="lightblue"
            height="150px"
            width="150px"
          />
        :
          archives.map(archive =>
            <ArchivedQuestion
              archive={archive}
              key={archive.id}
              onClick={() => openMessages(archive.messages)}
            />
          )
      }
    </div>
    {
  //   {areMessagesOpen ? <div /> :
  //   <div className="navigation_buttons">
  //     <div className="previous_archives" onClick={() => previousPage(numberPerPage)}>
  //       <img className="arrow_icon" alt="" src="assets/left-arrow.svg" />
  //     </div>
  //     <div className="next_archives" onClick={() => nextPage(numberPerPage)}>
  //       <img className="arrow_icon" alt="" src="assets/left-arrow.svg" />
  //     </div>
  //   </div>
  // }
}
  </div>

);

export default Archives;
