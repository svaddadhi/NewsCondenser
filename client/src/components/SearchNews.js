import React, { useState } from 'react';
import axios from 'axios';

const SearchNews = () => {
  const [query, setQuery] = useState('');
  const [summary, setSummary] = useState('');

  const fetchSummary = async () => {
    try {
      const response = await axios.get(`/api/news?query=${query}`);
      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error fetching summary:', error);
      setSummary('Failed to fetch summary.');
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter news topic" />
      <button onClick={fetchSummary}>Summarize</button>
      <div>
        <h2>Summary</h2>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default SearchNews;
