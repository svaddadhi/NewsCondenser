# News Summarizer Application

The News Summarizer Application leverages the power of Large Language Models (LLMs) to fetch and summarize news articles based on user queries. It provides a clean and simple interface for users to search for news topics they are interested in and read summarized versions of these articles to save time. This application is built using React for the frontend, Node.js and Express for the backend, and integrates with NewsAPI and OpenAI's GPT-3 for fetching news and generating summaries, respectively.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine (v14.x or later recommended).
- An API key from [NewsAPI](https://newsapi.org/) for fetching news articles.
- An API key from [OpenAI](https://openai.com/) for accessing GPT-3.

## Setting Up Your Environment

1. **Clone the repository**: First, clone this repository to your local machine using `git clone`, followed by the repository URL.

2. **Install dependencies**: Navigate to both the `client` and `backend` directories in separate terminal windows and run `npm install` to install the necessary dependencies listed in each `package.json`.

    ```bash
    cd backend
    npm install
    cd ../client
    npm install
    ```

3. **Environment variables**:
    - **Backend**: Create a `.env` file in the `backend` directory. You need to specify your NewsAPI and OpenAI API keys here.
    
        ```plaintext
        NEWSAPI_KEY=your_newsapi_key_here
        OPENAI_API_KEY=your_openai_key_here
        ```
    
    - **Frontend**: No environment variables are required for the frontend unless you have specific configurations or API endpoints defined.

## Running the Application

This project utilizes the `concurrently` package to run both the frontend and backend with a single command. This setup simplifies the development process and ensures both parts of the application are always in sync.

- **Start the application**: Navigate to the `backend` directory and run the following command:

    ```bash
    npm run dev
    ```

    This command executes `concurrently` to start both the frontend React application and the backend Express server. The frontend will be available at `http://localhost:3000`, and the backend will default to `http://localhost:6000`.

## Using the Application

- **Searching for News**: On the homepage, enter a keyword into the search input field and click the "Search" button. The application will display a list of news articles related to your query.
- **Reading Summaries**: Each news article is presented in a card format with a "Summarize" button. Clicking this button will fetch a concise summary of the article, displayed in a modal overlay.
- **Navigating Articles**: The application does not currently implement pagination. All articles fetched based on the search query will be displayed in a single view. For performance reasons, consider implementing pagination if scaling the application.

## Customizing OpenAI Integration

The application is configured with a set of defaults for interacting with OpenAI's API, which are defined in a constants file. These defaults help standardize the requests sent to OpenAI and can be adjusted according to the needs of your application or the specific behavior you wish to achieve from the model.

Here's an overview of the `OPENAI_DEFAULTS` object and how it can be adjusted:

```javascript
const OPENAI_DEFAULTS = {
  model: "gpt-3.5-turbo-instruct", // The model used for generating summaries.
  max_tokens: 150, // The maximum number of tokens to generate.
  // You can add more default properties here or adjust as needed based on OpenAI's documentation.
};
```

- **Additional Parameters**: Refer to OpenAI's API documentation to find other parameters you can control, such as temperature, top_p, frequency_penalty, and more. Add these to the OPENAI_DEFAULTS object as needed.

## Handling OpenAI API Errors

- **Error 429 (Too Many Requests)**: If you encounter a 429 error when attempting to summarize an article, this typically means you have exceeded the API rate limits. OpenAI allows for a certain number of free API calls; beyond that, you must fund your account to continue using the service. Ensure that you have sufficient credits in your OpenAI account to avoid disruption of service.

## Project Structure

- **Frontend (`/client`)**: Contains the React application setup, including components for displaying the search interface, article cards, and summary modal.
- **Backend (`/backend`)**: Consists of the Express server setup, routes for fetching news and generating summaries, and utility functions for integrating with external APIs.

## Acknowledgments

- News provided by NewsAPI.
- Summaries generated by OpenAI's GPT-3.
