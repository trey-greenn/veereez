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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Image Finder</h1>
      
      <div className="mb-6">
        <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-2">
          Enter your article summary:
        </label>
        <textarea
          id="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full h-32 p-4 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Paste your article summary here..."
        />
      </div>

      <button
        onClick={searchImages}
        disabled={isLoading}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Searching...' : 'Find Images'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {images.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Found Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <div key={image.id} className="border rounded-lg overflow-hidden">
                <img
                  src={image.urls.thumb}
                  alt={image.alt_description}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <a
                    href={image.urls.regular}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 text-sm break-all"
                  >
                    {image.urls.regular}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogAnalyzer;