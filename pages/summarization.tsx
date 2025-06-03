import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'

const Summarization = () => {
  return (
    <>
      <Head>
        <title>YouTube Video Summarization Tool | Veezyb</title>
        <meta name="description" content="Generate comprehensive text summaries from YouTube videos. Save time and extract key insights from any video content." />
        <meta name="keywords" content="youtube summary, video summarization, content creator tools, video to text" />
        <meta property="og:title" content="YouTube Video Summarization Tool | Veezyb" />
        <meta property="og:description" content="Convert YouTube videos into comprehensive text summaries instantly." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouTube Video Summarization Tool | Veezyb" />
        <meta name="twitter:description" content="Generate text summaries from YouTube videos effortlessly." />
      </Head>
      
      <Layout>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-500 text-transparent bg-clip-text">Video Summarization</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Convert any YouTube video into a comprehensive text summary</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Transform Video to Text</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Get comprehensive .txt summaries</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Extract key points from long videos</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Save hours of watching and note-taking</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Repurpose video content for blogs or articles</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="#try-now" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Summarize a Video
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <div className="bg-gray-900 rounded-md p-4 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400">summary.txt</div>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-700 h-3 w-full rounded"></div>
                  <div className="bg-gray-700 h-3 w-11/12 rounded"></div>
                  <div className="bg-gray-700 h-3 w-full rounded"></div>
                  <div className="bg-gray-700 h-3 w-10/12 rounded"></div>
                  <div className="bg-gray-700 h-3 w-full rounded"></div>
                  <div className="bg-gray-700 h-3 w-9/12 rounded"></div>
                  <div className="bg-gray-700 h-3 w-full rounded"></div>
                  <div className="bg-gray-700 h-3 w-11/12 rounded"></div>
                  <div className="bg-gray-700 h-3 w-full rounded"></div>
                  <div className="bg-gray-700 h-3 w-10/12 rounded"></div>
                </div>
              </div>
              <div className="bg-blue-900/20 text-blue-300 rounded-md p-3 text-sm">
                <p>Summary generated and ready for download</p>
              </div>
            </div>
          </div>
          
          <div id="try-now" className="bg-gray-900 rounded-xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Enter YouTube URL</h3>
                <p className="text-gray-400">Paste the link to any YouTube video</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Process Content</h3>
                <p className="text-gray-400">Our AI extracts and analyzes the video content</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Download Summary</h3>
                <p className="text-gray-400">Get a downloadable text file with your video summary</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Summarization
