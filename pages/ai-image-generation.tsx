import React from 'react';
import AutoThumbnailGenerator from '../components/AutoThumbnailGenerator';


const aiImageGeneration = () => {
  return (
    <div>
        <section aria-labelledby="thumbnail-generator-title" className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-gray-800/40 p-6 rounded-lg border border-gray-700">
                  <h3 id="thumbnail-generator-title" className="text-2xl font-bold mb-4 text-blue-400">
                    Auto Thumbnail Generator
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Create eye-catching YouTube thumbnails with AI. Simply enter your video title and description,
                    and our tool will generate a professional thumbnail optimized for higher click-through rates.
                  </p>
                  <button 
                    aria-label="Try the Auto Thumbnail Generator Tool" 
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                    onClick={() => document.getElementById('thumbnail-generator-component')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Try the Auto Thumbnail Generator
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                
                <div id="thumbnail-generator-component" className="mt-6">
                  <AutoThumbnailGenerator />
                </div>
                </div>
              </section>
      
    </div>
  )
}

export default aiImageGeneration
