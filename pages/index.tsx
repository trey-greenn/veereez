import { Inter } from "next/font/google";
import YoutubeTimestampSummary from '../components/YoutubeTimestampSummary';
import BlogAnalyzer from '../components/BlogAnalyzer';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen flex flex-col items-center justify-between ${inter.className} bg-black py-8`}>
      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          <span className="text-blue-500">VERECCE</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Empowering content creators with AI-powered tools to streamline your workflow 
          and amplify your creative potential.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#tools" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Explore Our Tools
          </a>
          <a 
            href="#about" 
            className="bg-transparent text-blue-400 border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-900/20 transition-colors font-medium"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-5xl mx-auto px-6 py-16 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Who We Are</h2>
            <p className="text-gray-300 mb-4">
              VERECCE is a platform dedicated to helping YouTube creators and social media professionals 
              create better content with less effort.
            </p>
            <p className="text-gray-300 mb-4">
              Our suite of AI-powered tools handles the time-consuming aspects of content creation, 
              allowing you to focus on what matters most—your creative vision.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h3 className="font-medium text-lg mb-2">Time-Saving</h3>
                <p className="text-gray-400 text-sm">Reduce hours of manual work to minutes</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h3 className="font-medium text-lg mb-2">AI-Powered</h3>
                <p className="text-gray-400 text-sm">Leveraging cutting-edge AI for better results</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h3 className="font-medium text-lg mb-2">For Creators</h3>
                <p className="text-gray-400 text-sm">Built by creators, for creators</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h3 className="font-medium text-lg mb-2">Continuous Growth</h3>
                <p className="text-gray-400 text-sm">New tools and features added regularly</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75"></div>
            <div className="relative bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                We believe that everyone deserves access to powerful content creation tools, regardless of budget or technical expertise.
              </p>
              <p className="text-gray-300">
                VERECCE is committed to democratizing content creation by providing accessible, 
                affordable, and easy-to-use tools that deliver professional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="w-full max-w-5xl mx-auto px-6 py-16 text-white">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Tools</h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          A growing collection of specialized tools designed to transform your content creation process.
        </p>

        <div className="grid grid-cols-1 gap-16 mb-16">
          {/* YouTube Timestamp Generator */}
          <div>
            <section aria-labelledby="youtube-tool-title" className="bg-gray-800/40 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors mb-8">
              <h3 id="youtube-tool-title" className="text-2xl font-bold mb-4 text-blue-400">
                YouTube Timestamp Generator
              </h3>
              <p className="text-gray-300 mb-6">
                Automatically generate useful timestamps with descriptions for any YouTube video, 
                making your content more accessible and user-friendly.
              </p>
              <button 
                aria-label="Try the YouTube Timestamp Generator Tool" 
                className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                onClick={() => document.getElementById('youtube-tool-component')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Try the YouTube Timestamp Tool
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            
            
            <div id="youtube-tool-component" className="mt-6">
              <YoutubeTimestampSummary />
            </div>
            </section>
          </div>

          {/* Blog Image Finder */}
          <div>
            <section aria-labelledby="blog-tool-title" className="bg-gray-800/40 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors mb-8">
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
            </section>
          </div>

          {/* Video Summarization (Coming Soon) */}
          <section aria-labelledby="video-summarization-title" className="bg-gray-800/40 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <h3 id="video-summarization-title" className="text-2xl font-bold mb-4 text-blue-400">
              Video Summarization
            </h3>
            <p className="text-gray-300 mb-6">
              Convert lengthy videos into concise text summaries, making it easier to quickly understand 
              key points or decide if a video is worth watching in full.
            </p>
            <p className="text-sm text-gray-500">Coming soon</p>
          </section>

          {/* Video Translation (Coming Soon) */}
          <section aria-labelledby="video-translation-title" className="bg-gray-800/40 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <h3 id="video-translation-title" className="text-2xl font-bold mb-4 text-blue-400">
              Video Translation
            </h3>
            <p className="text-gray-300 mb-6">
              Translate YouTube videos into different languages with our audio translation tool,
              helping you reach global audiences with your content.
            </p>
            <p className="text-sm text-gray-500">Coming soon</p>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto px-6 py-8 text-center border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} VERECCE. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Empowering content creators with AI-powered tools.
        </p>
      </footer>
    </main>
  );
}