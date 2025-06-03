import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'

const Timestamps = () => {
  return (
    <>
      <Head>
        <title>YouTube Video Timestamps Generator | Veezyb</title>
        <meta name="description" content="Generate timestamped sections with explanations for your YouTube videos. Boost viewer engagement and make your content more accessible." />
        <meta name="keywords" content="youtube timestamps, video chapters, content creation, youtube tools" />
        <meta property="og:title" content="YouTube Video Timestamps Generator | Veezyb" />
        <meta property="og:description" content="Create professional YouTube timestamped sections with explanations in seconds." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouTube Video Timestamps Generator | Veezyb" />
        <meta name="twitter:description" content="Generate timestamped sections with explanations for your YouTube videos." />
      </Head>
      
      <Layout>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">YouTube Timestamps Generator</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Create professional timestamped sections with summaries to improve your viewer experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Enhance Your YouTube Content</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automatically generate timestamped sections</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Create concise explanations for each section</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Improve viewer navigation and engagement</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Boost viewer retention and satisfaction</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="#get-started" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Generate Timestamps
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <div className="border border-gray-700 rounded-md p-4 mb-4">
                <div className="flex items-center mb-2">
                  <div className="bg-gray-700 h-3 w-12 rounded mr-2"></div>
                  <div className="bg-gray-700 h-3 w-24 rounded"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex">
                    <div className="bg-purple-900/50 text-purple-400 rounded px-2 py-1 text-sm mr-3 whitespace-nowrap">0:00</div>
                    <div className="bg-gray-700 h-4 w-full rounded"></div>
                  </div>
                  <div className="flex">
                    <div className="bg-purple-900/50 text-purple-400 rounded px-2 py-1 text-sm mr-3 whitespace-nowrap">2:15</div>
                    <div className="bg-gray-700 h-4 w-full rounded"></div>
                  </div>
                  <div className="flex">
                    <div className="bg-purple-900/50 text-purple-400 rounded px-2 py-1 text-sm mr-3 whitespace-nowrap">5:42</div>
                    <div className="bg-gray-700 h-4 w-full rounded"></div>
                  </div>
                  <div className="flex">
                    <div className="bg-purple-900/50 text-purple-400 rounded px-2 py-1 text-sm mr-3 whitespace-nowrap">8:30</div>
                    <div className="bg-gray-700 h-4 w-full rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div id="get-started" className="bg-gray-900 rounded-xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Paste YouTube URL</h3>
                <p className="text-gray-400">Enter your YouTube video link to get started</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">AI Analysis</h3>
                <p className="text-gray-400">Our AI analyzes your video content</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Get Results</h3>
                <p className="text-gray-400">Receive timestamped sections with summaries</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Timestamps
