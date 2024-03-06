import React, { useState } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import SummarizeModal from "./SummarizeModal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/SearchNews.css";

const SearchNews = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [summary, setSummary] = useState("");
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(`/api/news?query=${query}`);
      setArticles(response.data);
      setSummary("");
      setShowModal(false);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const onSummarize = async (content) => {
    setIsSummarizing(true);
    try {
      const response = await axios.post("/api/summarize", { content });
      setSummary(response.data.summary);
      setIsSummarizing(false);
      setShowModal(true);
    } catch (error) {
      console.error("Error summarizing article:", error);
      setIsSummarizing(false);
      setShowModal(false);
    }
  };

  return (
    <div>
      <Form className="d-flex justify-content-center mb-4">
        <Form.Control
          type="text"
          placeholder="Enter news topic"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="me-2"
          style={{ width: "300px" }} // Adjust the width as necessary
        />
        <Button variant="primary" onClick={fetchArticles}>
          Search
        </Button>
      </Form>
      <div className="card-container">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            article={article}
            onSummarize={() => onSummarize(article.content)}
          />
        ))}
      </div>
      {isSummarizing && <p>Summarizing...</p>}
      <SummarizeModal
        show={showModal}
        onHide={() => setShowModal(false)}
        summary={summary}
      />
    </div>
  );
};

export default SearchNews;
