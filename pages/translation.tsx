import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Link from 'next/link'
// 
// - Translation, we will use a LLM model to translate youtube vidos and allow user to download and watch them. Or upload and translate it.
// - Users will be able to upload a youtube video and the ai will translate it to the language of their choice.


const Translation = () => {
  return (
    <>
      <Head>
        <title>YouTube Video Translation Tool | Veezyb</title>
        <meta name="description" content="Translate YouTube videos into any language. Download translated MP3s or watch videos with translations to reach a global audience." />
        <meta name="keywords" content="video translation, youtube translator, language translation, content localization" />
        <meta property="og:title" content="YouTube Video Translation Tool | Veezyb" />
        <meta property="og:description" content="Translate YouTube videos into multiple languages with AI technology." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YouTube Video Translation Tool | Veezyb" />
        <meta name="twitter:description" content="Reach a global audience by translating your YouTube videos." />
      </Head>
      
      <Layout>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">AI Video Translation</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Break language barriers by translating YouTube videos into any language</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Global Content, Local Language</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Translate YouTube videos to multiple languages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Download translated audio as MP3</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Watch videos with translations directly</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Upload your own videos for translation</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="#translate-now" className="px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                  Translate a Video
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <div className="relative">
                <div className="aspect-video bg-gray-900 rounded-md overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-16 w-16 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-gray-800/90 text-white py-1 px-3 rounded-full text-sm flex items-center">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span>Español</span>
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-sm py-2 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span>Download MP3</span>
                </button>
                <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-sm py-2 rounded flex items-center justify-center">
                  <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Watch Now</span>
                </button>
              </div>
            </div>
          </div>
          
          <div id="translate-now" className="bg-gray-900 rounded-xl p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Upload</h3>
                <p className="text-gray-400">Add YouTube URL or upload your video</p>
              </div>
              <div className="text-center">
                <div className="bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Select Language</h3>
                <p className="text-gray-400">Choose your target translation language</p>
              </div>
              <div className="text-center">
                <div className="bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Process</h3>
                <p className="text-gray-400">Our AI translates your video content</p>
              </div>
              <div className="text-center">
                <div className="bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">4</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Download/Watch</h3>
                <p className="text-gray-400">Get MP3 or watch translated video</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Supported Languages</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-800/50 p-3 rounded text-center">English</div>
              <div className="bg-gray-800/50 p-3 rounded text-center">Spanish</div>
              <div className="bg-gray-800/50 p-3 rounded text-center">French</div>
              <div className="bg-gray-800/50 p-3 rounded text-center">German</div>
              <div className="bg-gray-800/50 p-3 rounded text-center">Chinese</div>
              <div className="bg-gray-800/50 p-3 rounded text-center">Japanese</div>
              <div className="bg-gray-800/50 p-3 rounded text-center">Korean</div>
              <div className="bg-gray-800/50 p-3 rounded text-center">Portuguese</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Translation
