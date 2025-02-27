import React, { useState, useEffect } from 'react';

const Home = () => {
  
  const tabNames = ['All', 'Music', 'Comedy', 'Drawing'];
  const [videos, setVideos] = useState([]);

  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
        const data = await response.json();
        if (data.status) {
          setVideos(data.data); 
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter the videos based on the active tab
  const filteredVideos = activeTab === 'All'
    ? videos
    : videos.filter((video) => {
      // Match based on category_id
      if (activeTab === 'Music') {
        return video.category_id === '1001';
      } else if (activeTab === 'Comedy') {
        return video.category_id === '1003';
      } else if (activeTab === 'Drawi') {
        return video.category_id === '1002';
      }
      return false;
    });

  return (
    <div className="">
      <div className="container mx-auto px-16 mt-16">
        <div role="tablist" className="tabs tabs-boxed">
          {tabNames.map((tabName, index) => (
            <a
              key={index}
              role="tab"
              className={`tab ${activeTab === tabName ? 'bg-red-600 text-white' : ''}`}
              onClick={() => setActiveTab(tabName)}
            >
              {tabName}
            </a>
          ))}
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-4 gap-5">
            {filteredVideos.map((video, index) => (
              <div key={index} className="card card-compact bg-base-100 w-auto shadow-xl">
                <figure>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className='object-cover h-36'
                  />
                </figure>
                <div className="card-body">
                
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={video.authors[0]?.profile_picture || "https://i.pravatar.cc/150?img=3"}
                      alt="Avatar"
                    />
                    <div>
                      <h3 className="font-semibold">{video.title || 'Unknown Author'}</h3>

                    </div>
                  </div>

                  <div className="mt-2 text-sm text-gray-500 ">
                    <span>{video.authors[0]?.profile_name}</span>

                    {video.authors[0]?.verified && (
                      <span className="text-blue-600 text-xl">&#x2714;</span>
                    )}
                  </div>
                  <div className="mt-1 text-xs text-gray-400">
                    <span>{video.others.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;