import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'

// - Social Media Scheduling tool that will allow users to schedule uploads to all social medias.
// - Users will be able to schedule posts to Facebook, Instagram, Twitter, LinkedIn, and TikTok.

const Scheduling = () => {
  return (
    <>
      <Head>
        <title>Social Media Post Scheduling Tool | Veezyb</title>
        <meta name="description" content="Schedule and manage your social media content across multiple platforms. Post to Facebook, Instagram, Twitter, LinkedIn, and TikTok from one dashboard." />
        <meta name="keywords" content="social media scheduler, content calendar, post scheduling, social media management" />
        <meta property="og:title" content="Social Media Post Scheduling Tool | Veezyb" />
        <meta property="og:description" content="Schedule and automate your social media posts across all platforms." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media Post Scheduling Tool | Veezyb" />
        <meta name="twitter:description" content="Manage all your social media content from one place." />
      </Head>
      
      <Layout>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-indigo-500 text-transparent bg-clip-text">Social Media Scheduling</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Schedule and manage your content across all major social platforms</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">One Dashboard For All Platforms</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Schedule posts to Facebook, Instagram, Twitter, LinkedIn, and TikTok</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Plan your content calendar visually</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Set it and forget it with auto-publishing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Track performance across all platforms</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="#schedule-now" className="px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Start Scheduling
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <div className="bg-violet-900/40 rounded-md py-2 px-3 text-sm flex items-center">
                    <span className="mr-2">Month</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="bg-violet-900/40 rounded-md py-2 px-3 text-sm flex items-center">
                    <span className="mr-2">All Platforms</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <button className="bg-violet-600 hover:bg-violet-700 rounded-md py-2 px-3 text-sm">+ New Post</button>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="text-center text-xs text-gray-400 py-1">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 31 }, (_, i) => (
                  <div key={i} className={`aspect-square border ${i % 2 === 0 ? 'border-gray-700' : 'border-gray-700'} rounded p-1 text-xs relative`}>
                    <span className="absolute top-1 left-1">{i + 1}</span>
                    {(i === 4 || i === 12 || i === 18 || i === 25) && (
                      <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-violet-500"></div>
                    )}
                    {(i === 7 || i === 15 || i === 22) && (
                      <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-blue-500"></div>
                    )}
                    {(i === 2 || i === 10 || i === 27) && (
                      <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-pink-500"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div id="schedule-now" className="bg-gray-900 rounded-xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-violet-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-400">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Connect Accounts</h3>
                <p className="text-gray-400">Link your social media profiles</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-400">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Create Content</h3>
                <p className="text-gray-400">Upload posts and schedule publishing times</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-400">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Analyze & Optimize</h3>
                <p className="text-gray-400">Track performance and refine your strategy</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-violet-900/30 to-indigo-900/30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Supported Platforms</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-blue-400">f</span>
                </div>
                <span>Facebook</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-pink-900/40 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-pink-400">Ig</span>
                </div>
                <span>Instagram</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-blue-400">X</span>
                </div>
                <span>Twitter</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-blue-400">in</span>
                </div>
                <span>LinkedIn</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-gray-900/40 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-white">TT</span>
                </div>
                <span>TikTok</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Scheduling
