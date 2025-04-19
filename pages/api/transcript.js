import { YoutubeTranscript } from 'youtube-transcript';

export default async function handler(req, res) {
  const { videoId } = req.query;
  
  if (!videoId) {
    return res.status(400).json({ error: 'Missing videoId parameter' });
  }
  
  try {
    // Using the youtube-transcript package to get captions
    const transcript = await YoutubeTranscript.fetchTranscript(videoId);
    
    // Format the data
    const formattedTranscript = transcript.map(item => ({
      text: item.text,
      start: item.offset / 1000, // Convert to seconds
      duration: item.duration / 1000, // Convert to seconds
    }));
    
    return res.status(200).json(formattedTranscript);
  } catch (error) {
    console.error('Error fetching transcript:', error);
    return res.status(500).json({ error: 'Failed to fetch transcript' });
  }
} 