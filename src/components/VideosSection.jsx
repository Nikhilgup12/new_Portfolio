import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPlay, FaTrophy, FaCode, FaYoutube } from 'react-icons/fa';

const videosData = [
  {
    id: 1,
    title: "My Coding Journey",
    description: "Watch my journey of becoming a developer - the challenges, learning experiences, and accomplishments.",
    thumbnail: "/assets/videos/journey image.jpg", // Add your thumbnail image
    videoUrl: "/assets/videos/coding journey.mp4", // Local video file
    youtubeUrl: "https://youtube.com/watch?v=your-youtube-id", // Backup YouTube link
    type: "journey"
  },
  {
    id: 2,
    title: "300-Day Coding Streak",
    description: "Consistency is key! Here's my journey of coding for 300 consecutive days and what I learned.",
    thumbnail: "/assets/videos/coding streak.jpg", // Add your thumbnail image
    videoUrl: "/assets/videos/coding-streak.mp4", // Local video file
    youtubeUrl: "https://youtube.com/watch?v=your-youtube-id", // Backup YouTube link
    type: "achievement"
  }
  // You can add more videos here
];

const VideosSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const openVideo = (video) => {
    setActiveVideo(video);
  };
  
  const closeVideo = () => {
    setActiveVideo(null);
  };
  
  return (
    <section id="videos" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          My Coding Journey
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Watch my coding journey and achievements
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videosData.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.3 + video.id * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative aspect-video bg-gray-200 dark:bg-gray-700">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/640x360?text=Video+Thumbnail";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <button
                    onClick={() => openVideo(video)}
                    className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white transition-transform transform hover:scale-110"
                  >
                    <FaPlay size={24} />
                  </button>
                </div>
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs uppercase font-semibold flex items-center gap-1">
                  {video.type === "journey" ? (
                    <>
                      <FaCode size={12} />
                      <span>Journey</span>
                    </>
                  ) : (
                    <>
                      <FaTrophy size={12} />
                      <span>Achievement</span>
                    </>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{video.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{video.description}</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => openVideo(video)}
                    className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2"
                  >
                    <FaPlay size={14} />
                    <span>Watch Now</span>
                  </button>
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 dark:text-red-400 font-medium flex items-center gap-2"
                  >
                    <FaYoutube size={16} />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90" onClick={closeVideo}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white p-2"
              onClick={closeVideo}
            >
              Close
            </button>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <video
                className="absolute top-0 left-0 w-full h-full"
                controls
                autoPlay
                src={activeVideo.videoUrl}
                onError={(e) => {
                  // If local video fails, set up an iframe to YouTube as fallback
                  const iframe = document.createElement('iframe');
                  iframe.src = activeVideo.youtubeUrl.replace('watch?v=', 'embed/');
                  iframe.width = '100%';
                  iframe.height = '100%';
                  iframe.frameBorder = '0';
                  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                  iframe.allowFullScreen = true;
                  iframe.className = 'absolute top-0 left-0 w-full h-full';
                  e.target.parentNode.replaceChild(iframe, e.target);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideosSection; 