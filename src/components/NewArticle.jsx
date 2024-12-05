import React, { useState } from 'react';
import axios from 'axios';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import news from '../images/news.png';
import { motion } from 'framer-motion';

const NewsArticle = () => {
  const [isArticlesExpanded, setIsArticlesExpanded] = useState(false);
  const [articles, setArticles] = useState([]); // Ensuring it's initialized as an array
  const [loading, setLoading] = useState(false); // Loading state for API call
  const [error, setError] = useState(null); // Error state for handling any errors

  const toggleArticlesExpand = async () => {
    if (!isArticlesExpanded) {
      // Fetch articles when expanding
      try {
        setLoading(true); // Start loading
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=9739340a28a74b57988ec33d87fb8a09'
        ); // Replace with your API URL
        console.log(response.data, 'response'); // Log the full response for debugging

        setArticles(response.data.articles);
      } catch (err) {
        console.error('Error fetching articles:', err); // Log the error for debugging
        setError('Failed to load articles');
      } finally {
        setLoading(false); // Stop loading after request completes
      }
    }

    setIsArticlesExpanded(!isArticlesExpanded); // Toggle expand/collapse
  };

  return (
    <div
      className={`fixed left-0 bottom-1/4 transition-all duration-300 z-50 ${
        isArticlesExpanded
          ? 'w-80 h-72 bg-white shadow-lg rounded-md'
          : 'w-44 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 drop-shadow-lg rounded-md'
      } flex flex-col items-center pt-2`}
    >
      {/* Toggle Button */}
      <button
        className={`absolute ${
          isArticlesExpanded ? 'top-2 left-2' : 'right-8 top-6'
        } bg-transparent text-white font-semibold`}
        onClick={toggleArticlesExpand}
      >
        {isArticlesExpanded ? (
          <IoCloseCircleOutline color="black" size={25} />
        ) : (
          <FaExpandArrowsAlt color="black" />
        )}
      </button>

      {/* Title for Minimized State */}
      {!isArticlesExpanded && (
        <div className="flex items-center ">
          <p className="text-black font-semibold text-sm">
            <span className="flex gap-2 block text-shadow">
              <img src={news} alt="" className="w-5 animate-ping" />
              Business News{' '}
            </span>
            <span className="block text-xs text-black">Click to expand</span>
          </p>
        </div>
      )}

      {/* Articles Content */}
      {isArticlesExpanded && (
        <motion.div
          className="overflow-y-auto mt-4 w-full custom-scrollbar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {loading && <p>Loading articles...</p>} {/* Loading state */}
          {error && <p>{error}</p>} {/* Error state */}

          {/* Rendering the fetched articles */}
          {!loading && !error && articles.length === 0 && (
            <p>No articles found.</p>
          )}

          {Array.isArray(articles) && articles.length > 0 && articles.map((article, index) => (
            <div key={index} className="p-4 border-b last:border-none hover:bg-gray-100">
              {/* Display Image */}
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt="Article Image"
                  className="w-full h-32 object-cover rounded-md"
                />
              )}
              <h2 className="text-lg font-semibold text-gray-900 mt-2">
                {article.title}
              </h2>

              {/* Display Author */}
              {article.author && (
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Author:</strong> {article.author}
                </p>
              )}

              {/* Display Published At */}
              {article.publishedAt && (
                <p className="text-xs text-gray-500 mt-1">
                  <strong>Published:</strong> {new Date(article.publishedAt).toLocaleDateString()}
                </p>
              )}

              {/* Display Summary */}
              {article.description && (
                <p className="mt-2 text-sm text-gray-600">{article.description}</p>
              )}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NewsArticle;
