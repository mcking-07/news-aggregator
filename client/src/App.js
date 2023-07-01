import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Navbar from './components/nav';
import CardList from './components/cards';
import ApiService from './services/api';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await ApiService.fetchArticles(category);
      setArticles(response);
    };
    fetchArticles();
  }, [category]);

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <div>
      <Header title="News Aggregator" />
      <Navbar onCategoryChange={handleCategoryChange} />
      <CardList articles={articles} />
    </div>
  );
};

export default App;
