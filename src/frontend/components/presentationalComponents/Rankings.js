import React from 'react';

const rankings = ({ topics, setTopic, listRankings, closeRankings, currentTopic }) => (
  <div className="RankingsContainer">
    <div className="Rankings_header">
      <span className="header_text"> Rankings </span>
      <div onClick={() => closeRankings()} className="rankings_arrow">
        <img alt="" src="assets/arrow-01.png" className="icon" />
      </div>
    </div>
    <div className="rankings_subjects">
      {topics.map((topic) => {
        if (currentTopic === topic) {
          return (<span
            style={{ opacity: 0.5 }}
            className="ranking_topic"
            onClick={() => setTopic(topic)}
          >
            { topic }
          </span>);
        }
        return (<span
          className="ranking_topic"
          onClick={() => setTopic(topic)}
        >
          { topic }
        </span>);
      })
    }
    </div>
    <div className="rankings_container">
      {listRankings.map(ranking =>
        <div className="ranking">
          <span className="ranking_name"> {ranking.name} </span>
        </div>)
      }
    </div>
  </div>
);

export default rankings;
