import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../styles/ArticleCard.css";

const ArticleCard = ({ article, onSummarize }) => {
  return (
    <Card className="article-card">
      <Card.Body className="d-flex flex-column">
        <Card.Title className="article-title">{article.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {article.formattedDate}
        </Card.Subtitle>
        <Card.Text className="flex-grow-1">{article.description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => onSummarize(article.content)}
          className="mt-auto"
        >
          Summarize
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
