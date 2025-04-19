import { useState, useEffect, useCallback } from 'react';

interface Timestamp {
  time: string; // Format: MM:SS or HH:MM:SS
  seconds: number;
  summary: string;
}

interface VideoDetails {
  title: string;
  description: string;
  duration: number; // Duration in seconds
  thumbnailUrl: string;
}

// Add this interface for AI-generated summaries
interface TimestampSummaryRequest {
  videoTitle: string;
  videoDescription: string;
  position: number; // 0-9 for 10 positions
  totalPositions: number; // 10
}

const YoutubeTimestampSummary = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
  const [timestamps, setTimestamps] = useState<Timestamp[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

    // Add these new state variables
    const [isCopied, setIsCopied] = useState(false);
    const [copyLoading, setCopyLoading] = useState(false);

      // Add this new function to format timestamps for copying
  const formatTimestampsForCopy = (): string => {
    if (!timestamps.length || !videoDetails) return '';
    
    let formattedText = `TIMESTAMPS FOR: ${videoDetails.title}\n\n`;
    
    timestamps.forEach(stamp => {
      formattedText += `${stamp.time} - ${stamp.summary}\n`;
    });
    
    formattedText += `\nVideo Link: https://www.youtube.com/watch?v=${videoId}`;
    
    return formattedText;
  };
  // Add this function to handle copying to clipboard
  const copyTimestampsToClipboard = async () => {
    if (!timestamps.length) return;
    
    setCopyLoading(true);
    try {
      const textToCopy = formatTimestampsForCopy();
      
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      
      // Reset "Copied" status after 3 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy timestamps:', err);
    } finally {
      setCopyLoading(false);
    }
  };
  // Extract YouTube video ID from URL
  const handleVideoUrlChange = (url: string) => {
    setVideoUrl(url);
    
    // Extract video ID using regex
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
      setVideoId(match[2]);
    } else {
      setVideoId('');
    }
  };

  // Format seconds to MM:SS or HH:MM:SS
  const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    
    if (h > 0) {
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Add this function to generate summaries with AI
  const generateAISummary = async (requestData: TimestampSummaryRequest): Promise<string> => {
    try {
      const response = await fetch('/api/generate-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate summary');
      }
      
      const data = await response.json();
      return data.summary;
    } catch (error) {
      console.error('Error generating summary:', error);
      // Fallback to position-based summaries if AI fails
      return generatePositionBasedSummary(requestData.position, requestData.videoTitle);
    }
  };

  // Update fetchVideoDetails to also get video description
  const fetchVideoDetails = useCallback(async (videoId: string) => {
    try {
      const response = await fetch(`/api/video-details?videoId=${videoId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch video details');
      }
      
      const data = await response.json();
      return {
        title: data.title,
        description: data.description, // Make sure your API returns this
        duration: data.duration,
        thumbnailUrl: data.thumbnailUrl,
      };
    } catch (error) {
      console.error('Error fetching video details:', error);
      throw error;
    }
  }, []);

  // Generate context-appropriate summary based on position in video
  const generatePositionBasedSummary = (position: number, title: string): string => {
    // Standard sections for video content
    const positionDescriptions = [
      `Introduction to ${title}`,
      `Overview and background information`,
      `First main topic or concept`,
      `Key points and examples`,
      `Detailed explanation continues`,
      `Main demonstration or core content`,
      `Additional points and insights`,
      `Discussion of results or findings`,
      `Summary of key takeaways`,
      `Conclusion and final thoughts`
    ];
    
    return positionDescriptions[position % positionDescriptions.length];
  };

  // Update processYoutubeVideo to use AI summaries
  const processYoutubeVideo = useCallback(async () => {
    if (!videoId) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      // Step 1: Get video details
      const videoInfo = await fetchVideoDetails(videoId);
      setVideoDetails(videoInfo);
      
      // Step 2: Generate timestamps at 1/10th intervals
      const interval = Math.floor(videoInfo.duration / 10);
      const newTimestamps: Timestamp[] = [];
      
      // First, create timestamps with loading placeholders
      for (let i = 0; i < 10; i++) {
        const timeInSeconds = i * interval;
        
        newTimestamps.push({
          time: formatTime(timeInSeconds),
          seconds: timeInSeconds,
          summary: `Generating summary...`, // Placeholder
        });
      }
      
      // Set initial timestamps with placeholders
      setTimestamps(newTimestamps);
      
      // Step 3: Generate AI summaries for each timestamp
      const updatedTimestamps = [...newTimestamps];
      
      // Generate all summaries in parallel
      const summaryPromises = newTimestamps.map((_, index) => 
        generateAISummary({
          videoTitle: videoInfo.title,
          videoDescription: videoInfo.description || '',
          position: index,
          totalPositions: 10
        })
      );
      
      // Wait for all summaries to complete
      const summaries = await Promise.all(summaryPromises);
      
      // Update timestamps with generated summaries
      for (let i = 0; i < updatedTimestamps.length; i++) {
        updatedTimestamps[i].summary = summaries[i];
      }
      
      setTimestamps(updatedTimestamps);
    } catch (err) {
      setError('Failed to analyze video. Please try a different URL.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [videoId, fetchVideoDetails]);

  // Process video automatically when videoId changes
  useEffect(() => {
    if (videoId) {
      processYoutubeVideo();
    } else {
      setVideoDetails(null);
      setTimestamps([]);
    }
  }, [videoId, processYoutubeVideo]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">YouTube Video Timestamp Generator</h1>
      
      {/* Video URL input */}
      <div className="mb-6">
        <label htmlFor="videoUrl" className="block text-sm font-medium mb-2">
          Enter YouTube Video URL:
        </label>
        <input
          type="text"
          id="videoUrl"
          value={videoUrl}
          onChange={(e) => handleVideoUrlChange(e.target.value)}
          className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="https://www.youtube.com/watch?v=..."
          disabled={isLoading}
        />
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center my-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-blue-400">Processing video and generating timestamps...</p>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="my-4 p-4 bg-red-900 text-red-100 rounded-lg">
          {error}
        </div>
      )}

      {/* Video details and embedded player */}
      {videoDetails && !isLoading && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{videoDetails.title}</h2>
          <p className="text-gray-300 mb-4">
            Total Duration: {formatTime(videoDetails.duration)}
          </p>
          
          <div className="aspect-video w-full mb-6">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

{timestamps.length > 0 && !isLoading && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Video Timestamps</h2>
            
            {/* Copy to clipboard button */}
            <button
              onClick={copyTimestampsToClipboard}
              disabled={copyLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              {copyLoading ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2" 
                  />
                </svg>
              )}
              {isCopied ? 'Copied!' : 'Copy All Timestamps'}
            </button>
          </div>
          
          <div className="space-y-3">
            {/* Existing timestamp mapping code... */}
            {timestamps.map((timestamp, index) => (
              <div key={index} className="border border-gray-700 bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <a 
                  href={`https://www.youtube.com/watch?v=${videoId}&t=${timestamp.seconds}s`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start"
                >
                  <span className="inline-block bg-blue-900 text-blue-100 font-medium px-3 py-1 rounded-lg mr-4 whitespace-nowrap">
                    {timestamp.time}
                  </span>
                  <p className="text-gray-200">{timestamp.summary}</p>
                </a>
              </div>
            ))}
          </div>
          
          {/* Copy success notification */}
          {isCopied && (
            <div className="mt-4 p-3 bg-green-900/50 border border-green-800 rounded-lg text-green-200 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Timestamps copied to clipboard!</span>
            </div>
          )}
          
          <div className="mt-8 p-4 bg-blue-900/30 border border-blue-800 rounded-lg">
            {/* Existing about section... */}
            <h3 className="text-lg font-medium mb-2">About this feature:</h3>
            <p className="text-gray-300">
              This tool automatically divides any YouTube video into 10 equal segments and generates 
              descriptive timestamps for each section. Click any timestamp to jump directly to that 
              point in the video, or use the "Copy All Timestamps" button to share them elsewhere.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default YoutubeTimestampSummary;