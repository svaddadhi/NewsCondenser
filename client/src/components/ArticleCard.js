import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ article, onSummarize }) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <button onClick={() => onSummarize(article.content)} className="btn btn-primary">Summarize</button>
      </div>
    </div>
  );
};

export default ArticleCard;
