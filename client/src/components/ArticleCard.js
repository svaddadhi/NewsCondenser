import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ArticleCard = ({ article, onSummarize }) => {
  return (
    <Card
      style={{ width: "18rem", margin: "1rem" }}
      className="d-flex flex-column"
    >
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{ fontWeight: "bold" }}>{article.title}</Card.Title>
        {/* Displaying the formatted date */}
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
