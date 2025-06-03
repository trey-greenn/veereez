import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
// - Ai Video Generation will use a mix of ai image generation, b-roll and ai video genation. To create simple videos
// - Users will be able to upload images and videos and the ai will create a video with the images and videos.

const VideoGeneration = () => {
  return (
    <>
      <Head>
        <title>AI Video Generation Tool | Veezyb</title>
        <meta name="description" content="Create professional videos with AI technology. Combine AI-generated images, your own media, and b-roll footage to produce stunning videos effortlessly." />
        <meta name="keywords" content="ai video creation, video generator, content creation, ai videos" />
        <meta property="og:title" content="AI Video Generation Tool | Veezyb" />
        <meta property="og:description" content="Create professional videos using AI-powered technology in minutes." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Video Generation Tool | Veezyb" />
        <meta name="twitter:description" content="Generate professional videos with AI technology." />
      </Head>
      
      <Layout>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">AI Video Generation</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Create professional videos with AI image generation and your own media</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Video Creation Made Simple</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Combine AI-generated images with your content</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Incorporate high-quality b-roll footage</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Create professional videos in minutes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No advanced video editing skills required</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="#create-video" className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Create Video Now
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <div className="relative">
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square bg-orange-900/30 rounded-md"></div>
                  <div className="aspect-square bg-amber-900/30 rounded-md"></div>
                  <div className="aspect-square bg-orange-900/30 rounded-md"></div>
                  <div className="aspect-square bg-amber-900/30 rounded-md"></div>
                  <div className="col-span-1 row-span-1 aspect-square bg-orange-900/50 rounded-md flex items-center justify-center">
                    <svg className="h-8 w-8 text-orange-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="aspect-square bg-amber-900/30 rounded-md"></div>
                </div>
                <div className="mt-4">
                  <div className="h-2 bg-gray-700 rounded-full w-full mb-2"></div>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>0:00</span>
                    <span>1:30</span>
                  </div>
                </div>
                <div className="mt-4 bg-gray-900 p-3 rounded-md flex items-center">
                  <div className="h-10 w-10 bg-orange-900/50 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm">AI-generated video preview</span>
                </div>
              </div>
            </div>
          </div>
          
          <div id="create-video" className="bg-gray-900 rounded-xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-amber-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-400">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Upload Media</h3>
                <p className="text-gray-400">Add your images and videos</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-400">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">AI Enhancement</h3>
                <p className="text-gray-400">Our AI generates additional visuals</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-400">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">B-Roll Integration</h3>
                <p className="text-gray-400">Add complementary footage</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-400">4</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Export Video</h3>
                <p className="text-gray-400">Download your finished video</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="h-12 w-12 bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Social Media Videos</h3>
              <p className="text-gray-400">Create short-form videos optimized for TikTok, Instagram, and YouTube Shorts</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="h-12 w-12 bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Product Showcases</h3>
              <p className="text-gray-400">Highlight your products with professional promotional videos</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="h-12 w-12 bg-amber-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Educational Content</h3>
              <p className="text-gray-400">Transform your tutorials and courses into engaging video lessons</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default VideoGeneration
