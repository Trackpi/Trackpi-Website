import React, { useState } from "react";
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import live from '../images/live.png';
import { motion } from 'framer-motion';
import news from '../images/news.png';

const News = () => {

  const [activeTab, setActiveTab] = useState("live");
//   const [isArticlesExpanded, setIsArticlesExpanded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false); 
//   const [articles, setArticles] = useState([]); 
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null); 

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };
//   const toggleArticlesExpand = async () => {
//     if (!isArticlesExpanded) {
//       // Fetch articles when expanding
//       try {
//         setLoading(true); // Start loading
//         const response = await axios.get(
//           'https://newsapi.org/v2/top-headlines?country=us&apiKey=9739340a28a74b57988ec33d87fb8a09'
//         ); 
//         console.log(response.data, 'response'); // Log the full response for debugging

//         setArticles(response.data.articles);
//       } catch (err) {
//         console.error('Error fetching articles:', err); // Log the error for debugging
//         setError('Failed to load articles');
//       } finally {
//         setLoading(false); // Stop loading after request completes
//       }
//     }

//     setIsArticlesExpanded(!isArticlesExpanded); // Toggle expand/collapse
//   };

  return (
    <div className="dummy">
      {/* Sidebar Header */}
      {/* <div className="dummy-header">
        <h2>News Panel</h2>
        <button className="close-btn">×</button>
      </div> */}
              <div
      className={`fixed right-0 top-1/4 transition-all duration-300 ${
        isExpanded
          ? 'w-80 h-72 bg-transparent'
          : 'w-44 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 drop-shadow-lg rounded-md'
      } flex items-center pt-3`}
    >
        bnvnbvbnv
    </div>

      {/* Tab Navigation */}
      {/* <div className="tab-nav">
        <button
          className={`tab-btn ${activeTab === "live" ? "active" : ""}`}
          onClick={() => setActiveTab("live")}
        >
          Live Stream
        </button>
        <button
          className={`tab-btn ${activeTab === "articles" ? "active" : ""}`}
          onClick={() => setActiveTab("articles")}
        >
          Articles
        </button>
      </div> */}

    
    </div>
  );
};

export default News;
