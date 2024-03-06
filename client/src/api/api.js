import axios from "axios";

const baseUrl = "/api"; // Assuming your API endpoints have a common base URL

export const fetchArticles = async (query) => {
  try {
    const response = await axios.get(`${baseUrl}/news?query=${query}`);
    return response.data; // Returns articles data
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error; // Rethrowing error to handle it in the component
  }
};

export const summarizeArticle = async (content) => {
  try {
    const response = await axios.post(`${baseUrl}/summarize`, { content });
    return response.data.summary; // Returns summary data
  } catch (error) {
    console.error("Error summarizing article:", error);
    throw error; // Rethrowing error to handle it in the component
  }
};
