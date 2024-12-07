import React, { useState } from 'react';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import live from '../images/live.png';
import { motion } from 'framer-motion';
import axios from 'axios';

const CustomStreamPlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('live');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const showNewsArticle = async () => {
    setActiveTab('articles');
    try {
      setLoading(true);
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=9739340a28a74b57988ec33d87fb8a09'
      );
      setArticles(response.data.articles);
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError('Failed to load articles');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed right-0 top-1/4 transition-all duration-300 ${
        isExpanded
          ? 'w-[336px] h-[288px] bg-white shadow-lg rounded-md px-2 pb-0 pt-3'
          : 'w-44 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 drop-shadow-lg rounded-md  px-2 py-2'
      } flex flex-col items-center`}
    >
      {/* Toggle Button */}
      <button
        className={`absolute ${
          isExpanded ? 'top-0 left-0' : 'right-8 top-6'
        } bg-transparent text-white font-semibold`}
        onClick={toggleExpand}
      >
        {isExpanded ? (
          <IoCloseCircleOutline color="black" size={25} />
        ) : (
          <FaExpandArrowsAlt color="black" />
        )}
      </button>

      {/* Tabs */}
      {isExpanded && (
        <div className="flex w-full bg-gray-200">
          <div
            className={`flex-1 text-center py-2 cursor-pointer ${
              activeTab === 'live'
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-200 text-black'
            }`}
            onClick={() => setActiveTab('live')}
          >
            <span className="inline-block w-full">Live Stream</span>
          </div>
          <div
            className={`flex-1 text-center py-2 cursor-pointer ${
              activeTab === 'articles'
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-200 text-black'
            }`}
            onClick={showNewsArticle}
          >
            <span className="inline-block w-full">Articles</span>
          </div>
        </div>
      )}

      {/* Minimized State */}
      {!isExpanded && (
        <div className="flex-grow ml-4">
          <p className="text-black font-semibold text-sm">
            <span className="flex gap-2 block text-shadow">
              <img src={live} alt="" className="w-5 animate-ping" />
              Live News Stream
            </span>
            <span className="text-xs text-gray-800">Click to expand</span>
          </p>
        </div>
      )}

      {/* Content for Tabs */}
      {isExpanded && (
        <motion.div
          className="flex justify-center bg-white mt-2 w-full h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {activeTab === 'live' ? (
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/iEpJwprxDdk?autoplay=1&mute=1&si=M1OPkGrXk0AWiNZ2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <motion.div
              className="overflow-y-auto mt-2 w-full h-[200px]  custom-scrollbar  shadow-lg rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {loading && 
              (
                <div className="flex justify-center items-center fixed inset-0 bg-opacity-50  z-50">
                <div className="spinner-border text-warning"></div> 
              </div>  
              )
              }
              {error && <p>{error}</p>}
              {!loading && !error && articles.length === 0 && (
                <p>No articles found.</p>
              )}
              {Array.isArray(articles) &&
                articles.length > 0 &&
                articles.map((article, index) => (
                  <div
                    key={index}
                    className=" flex flex-col gap-y-3 p-4 border-b last:border-none"
                  >
                    {article.urlToImage && (
                      <img
                        src={article.urlToImage}
                        alt="Article Image"
                        className="h-32 w-full object-cover rounded-md"
                      />
                    )}
                    <h2 className="text-lg font-semibold text-gray-900 mt-2">
                      {article.title}
                    </h2>

                    {article.author && (
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Author:</strong> {article.author}
                      </p>
                    )}

                    {article.publishedAt && (
                      <p className="text-xs text-gray-500 mt-1">
                        <strong>Published:</strong>{' '}
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </p>
                    )}

                    {article.description && (
                      <p className="mt-2 text-sm text-gray-600">
                        {article.description}
                      </p>
                    )}
                  </div>
                ))}
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default CustomStreamPlayer;
