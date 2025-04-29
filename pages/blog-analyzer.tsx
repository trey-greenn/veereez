 import React from 'react';
 import BlogAnalyzer from '../components/BlogAnalyzer';

 
 const blogAnalyzer = () => {
   return (
     <div>
                      <section aria-labelledby="blog-tool-title" className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-gray-800/40 p-6 rounded-lg border border-gray-700">
                  <h3 id="blog-tool-title" className="text-2xl font-bold mb-4 text-blue-400">
                    Blog Image Finder
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Find the perfect images for your blog posts or articles by analyzing your content 
                    and suggesting relevant visuals that enhance your message.
                  </p>
                  <button 
                    aria-label="Try the Blog Image Finder Tool" 
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                    onClick={() => document.getElementById('blog-tool-component')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Try the Blog Image Finder Tool
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                
                <div id="blog-tool-component" className="mt-6">
                  <BlogAnalyzer />
                </div>
                </div>
              </section>
       
     </div>
   )
 }
 
 export default blogAnalyzer
 