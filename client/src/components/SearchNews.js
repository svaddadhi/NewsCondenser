import React, { useState } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard'; // Ensure this path is correct
import SummarizeModal from './SummarizeModal'; // Adjust path as necessary

const SearchNews = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [summary, setSummary] = useState(''); // State to hold the summary
  const [isSummarizing, setIsSummarizing] = useState(false); // State to manage summarization loading state
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`/api/news?query=${query}`);
      setArticles(response.data); // Set the fetched articles
      setSummary(''); // Clear previous summary if any
      setShowModal(false); // Ensure the modal is not shown
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const onSummarize = async (content) => {
    console.log('Summarizing content:', content); // Debug log
    setIsSummarizing(true); // Indicate the start of summarization process
    try {
      const response = await axios.post('/api/summarize', { content });
      setSummary(response.data.summary); // Set the fetched summary
      setIsSummarizing(false); // Summarization done
      setShowModal(true); // Show the modal with the summary
    } catch (error) {
      console.error('Error summarizing article:', error);
      setIsSummarizing(false); // Summarization done, handle error
      setShowModal(false); // Ensure modal is not shown on error
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter news topic"
      />
      <button onClick={fetchArticles}>Search</button>
      <div className="card-container">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} onSummarize={() => onSummarize(article.content)} />
        ))}
      </div>
      {isSummarizing && <p>Summarizing...</p>}
      <SummarizeModal show={showModal} onHide={() => setShowModal(false)} summary={summary} />
    </div>
  );
};

export default SearchNews;
