import React, { useState } from 'react';

interface ImageResult {
  id: string;
  urls: {
    regular: string;
    thumb: string;
  };
  alt_description: string;
}

const BlogAnalyzer: React.FC = () => {
  const [summary, setSummary] = useState<string>('');
  const [images, setImages] = useState<ImageResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
// ... existing code ...

const searchImages = async () => {
    if (!summary.trim()) {
      setError('Please enter a summary');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Extract meaningful keywords from the summary
      const keywords = summary
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        // Filter out common words, articles, and short words
        .filter(word => 
          word.length > 3 && 
          !['the', 'and', 'for', 'that', 'with', 'this', 'from', 'have', 'been', 'were', 'what', 'when', 'where', 'will'].includes(word)
        );

      // Get the most relevant keywords and join them with AND operator for more specific results
      const searchQuery = keywords
        .slice(0, 3)
        .join(' AND ');

      console.log('Search query:', searchQuery);

      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          searchQuery
        )}&per_page=10&order_by=relevant&content_filter=high`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
          },
        }
      );

      // ... existing code ...

      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const data = await response.json();
      setImages(data.results);
    } catch (err) {
      setError('Error searching for images. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

// ... existing code ...

  return (
    <div className="w-full max-w-4xl mx-auto p-6 mt-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Blog Image Finder</h1>
      
      <div className="mb-6">
        <label htmlFor="summary" className="block text-sm font-medium mb-2">
          Enter your article summary:
        </label>
        <textarea
          id="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Paste your article summary here..."
        />
      </div>

      <button
        onClick={searchImages}
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            Searching...
          </span>
        ) : 'Find Images'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-900 text-red-100 rounded-lg">
          {error}
        </div>
      )}

      {images.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Found Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <div key={image.id} className="border border-gray-700 bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                <img
                  src={image.urls.thumb}
                  alt={image.alt_description || "Blog image"}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <a
                    href={image.urls.regular}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm hover:underline"
                  >
                    View Full Image
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-900/30 border border-blue-800 rounded-lg">
            <h3 className="text-lg font-medium mb-2">About this feature:</h3>
            <p className="text-gray-300">
              This tool analyzes your article or blog post summary to find relevant images that match the content.
              The algorithm extracts key topics from your summary and searches for high-quality images that complement your writing.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogAnalyzer;