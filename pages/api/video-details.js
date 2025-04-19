import axios from 'axios';

export default async function handler(req, res) {
  const { videoId } = req.query;
  
  if (!videoId) {
    return res.status(400).json({ error: 'Missing videoId parameter' });
  }
  
  try {
    // Get video details from YouTube Data API
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails&key=${process.env.YOUTUBE_API_KEY}`
    );
    
    if (!response.data.items || response.data.items.length === 0) {
      return res.status(404).json({ error: 'Video not found' });
    }
    
    const videoData = response.data.items[0];
    const title = videoData.snippet.title;
    
    // Parse ISO 8601 duration format (PT1H30M15S)
    const duration = videoData.contentDetails.duration;
    const durationInSeconds = parseDuration(duration);
    
    return res.status(200).json({
      title,
      description: videoData.snippet.description || '',
      duration: durationInSeconds,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    });
  } catch (error) {
    console.error('Error fetching video details:', error);
    return res.status(500).json({ error: 'Failed to fetch video details' });
  }
}

// Helper function to parse ISO 8601 duration format
function parseDuration(duration) {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  
  const hours = parseInt(match[1] || 0, 10);
  const minutes = parseInt(match[2] || 0, 10);
  const seconds = parseInt(match[3] || 0, 10);
  
  return hours * 3600 + minutes * 60 + seconds;
} 