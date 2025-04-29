import React, { useState } from 'react';

interface ThumbnailResult {
  url: string;
  prompt: string;
}

const AutoThumbnailGenerator: React.FC = () => {
  const [videoTitle, setVideoTitle] = useState<string>('');
  const [videoDescription, setVideoDescription] = useState<string>('');
  const [thumbnail, setThumbnail] = useState<ThumbnailResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const generateThumbnail = async () => {
    if (!videoTitle.trim()) {
      setError('Please enter a video title');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Create a prompt for DALL-E based on the video title and description
      const prompt = `Create a YouTube thumbnail for a video titled "${videoTitle}"${
        videoDescription ? ` about ${videoDescription}` : ''
      }. The thumbnail should be eye-catching, professional, and optimized for YouTube.`;

      const response = await fetch('/api/generate-thumbnail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate thumbnail');
      }

      const data = await response.json();
      setThumbnail({
        url: data.url,
        prompt: prompt,
      });
    } catch (err) {
      setError('Error generating thumbnail. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadImage = async () => {
    if (!thumbnail) return;
    
    setIsDownloading(true);
    setError(null);
    
    try {
      // Use our API endpoint to download the image
      const response = await fetch('/api/download-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl: thumbnail.url }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to download image');
      }
      
      // Get the blob from the response
      const blob = await response.blob();
      
      // Create a URL for the blob
      const blobUrl = URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `thumbnail-${Date.now()}.png`;
      
      // Append to the document, click it, and remove it
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      setError('Error downloading image. Please try again.');
      console.error('Error downloading:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 mt-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Auto Thumbnail Generator</h1>
      
      <div className="mb-6">
        <label htmlFor="videoTitle" className="block text-sm font-medium mb-2">
          Video Title:
        </label>
        <input
          id="videoTitle"
          type="text"
          value={videoTitle}
          onChange={(e) => setVideoTitle(e.target.value)}
          className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your video title..."
        />
      </div>

      <div className="mb-6">
        <label htmlFor="videoDescription" className="block text-sm font-medium mb-2">
          Video Description (optional):
        </label>
        <textarea
          id="videoDescription"
          value={videoDescription}
          onChange={(e) => setVideoDescription(e.target.value)}
          className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Briefly describe your video content..."
          rows={3}
        />
      </div>

      <button
        onClick={generateThumbnail}
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            Generating...
          </span>
        ) : 'Generate Thumbnail'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-900 text-red-100 rounded-lg">
          {error}
        </div>
      )}

      {thumbnail && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Generated Thumbnail</h2>
          <div className="border border-gray-700 bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={thumbnail.url}
              alt="Generated thumbnail"
              className="w-full max-h-96 object-contain"
              loading="lazy"
            />
            <div className="p-4 flex justify-between items-center">
              <p className="text-sm text-gray-400 max-w-md truncate">
                Prompt: {thumbnail.prompt}
              </p>
              <button
                onClick={downloadImage}
                disabled={isDownloading}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                {isDownloading ? (
                  <span className="flex items-center justify-center">
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Downloading...
                  </span>
                ) : 'Download Image'}
              </button>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-900/30 border border-blue-800 rounded-lg">
            <h3 className="text-lg font-medium mb-2">About this feature:</h3>
            <p className="text-gray-300">
              This tool uses AI to generate eye-catching YouTube thumbnails based on your video title and description.
              The generated thumbnails are optimized for YouTube and designed to increase click-through rates.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoThumbnailGenerator; 