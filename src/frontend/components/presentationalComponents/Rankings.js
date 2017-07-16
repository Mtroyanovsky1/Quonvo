import React from 'react';

const rankings = ({ topics, setTopic, listRankings, closeRankings, currentTopic }) => {
  let counter = 0;
  return (
    <div className="RankingsContainer">
      <div className="Rankings_header">
        <span className="header_text"> Rankings </span>
        <div onClick={() => closeRankings()} className="rankings_arrow">
          <img alt="" src="assets/Blue Arrow.svg" className="icon_ranking_arrow" />
        </div>
      </div>
      <div className="row rankings_subjects">
        {topics.map((topic) => {
          if (currentTopic === topic) {
            return (<div
              style={{ opacity: 0.5 }}
              className="col-md-3 col-sm-6 col-xs-12 ranking_topic"
              onClick={() => setTopic(topic)}
            >
              { topic }
            </div>);
          }
          return (<div
            className="col-md-3 col-sm-6 col-xs-12 ranking_topic"
            onClick={() => setTopic(topic)}
          >
            { topic }
          </div>);
        })
      }
      </div>
      <div className="rankings_container">
        {listRankings.map((ranking) => {
          counter++;
          return (<div className="ranking">
            <span className="ranking_text ranking_number"> {counter}. </span>
            <span className="ranking_text ranking_name"> {ranking.name} </span>
          </div>);
        })
        }
      </div>
    </div>
  );
};

export default rankings;
