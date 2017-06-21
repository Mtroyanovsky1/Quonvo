import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArchivedQuestion from './ArchivedQuestion';
import ArchivedConversation from '../presentationalComponents/ArchivedConversation';

const numberPerPage = 10;

const Archives = ({
  archives,
  nextPage,
  newTopic,
  closeArchives,
  openMessages,
  areMessagesOpen,
  messages,
  backToArchives,
  previousPage,
  currentTopic,
  topics
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
    <div className="archives_display">
      {areMessagesOpen
      ?
        <ArchivedConversation messages={messages} backToArchives={() => backToArchives()} />
      :
        <InfiniteScroll
          next={nextPage(numberPerPage)}
          loader={<h4>Loading...</h4>}
          hasMore={false}
          height={500}
        >
          {archives.map(archive =>
            <ArchivedQuestion
              archive={archive}
              key={archive.id}
              onClick={() => openMessages(archive.messages)}
            />
          )}
        </InfiniteScroll>
      }
    </div>
    {areMessagesOpen ? <div /> :
    <div className="navigation_buttons">
      <div className="previous_archives" onClick={() => previousPage(numberPerPage)}>
        <img className="arrow_icon" alt="" src="assets/left-arrow.svg" />
      </div>
      <div className="next_archives" onClick={() => nextPage(numberPerPage)}>
        <img className="arrow_icon" alt="" src="assets/left-arrow.svg" />
      </div>
    </div>
  }
  </div>

);

export default Archives;
