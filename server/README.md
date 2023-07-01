# news-aggregator-server

This is the server component of the news aggregator. It collects news stories from multiple sources on various topics in real-time and provides an API for accessing the news data.

## Installation

Navigate to the server directory:

```
cd news-aggregator/server
```

Install the dependencies:

```
npm install
```

Create a `.env` file and set the required environment variables. You can use the provided `sampleEnv.txt` file as a template.

Start the server:

```
npm start
```

The API will be available at `http://localhost:4000/news`

## Usage

The news-aggregator API allows you to retrieve the latest news articles in various categories.

To retrieve news articles, make a `GET` request to the desired API endpoint to access the corresponding articles using the following format:

```
http://localhost:4000/news/{category}
```

Replace `{category}` with one of the following options: `business`, `entertainment`, `general`, `health`, `science`, `sport` and `technology`.

The API automatically updates the news articles at the specified frequency (set in the `.env` file) using the `News-API`.
