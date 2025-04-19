import OpenAI from 'openai';

// Initialize OpenAI with the new SDK format
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { videoTitle, videoDescription, position, totalPositions } = req.body;
  
  if (!videoTitle) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  try {
    // Calculate approximate timestamp position
    let segment = '';
    if (position === 0) segment = 'beginning';
    else if (position === totalPositions - 1) segment = 'end';
    else if (position < totalPositions / 3) segment = 'early section';
    else if (position < (totalPositions * 2) / 3) segment = 'middle section';
    else segment = 'later section';
    
    // Craft a prompt for the AI
    const prompt = `
      Video Title: "${videoTitle}"
      Video Description: "${videoDescription || 'Not available'}"
      
      This is a YouTube video. Create a brief, specific summary (15-20 words) of what likely happens at the ${segment} 
      of this video (position ${position + 1} of ${totalPositions}). Be specific about potential content, 
      don't mention that this is a timestamp or section. Write in present tense as if describing the current scene.
    `;
    
    // Use the current OpenAI API format
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",  // Using a supported model
      prompt: prompt,
      max_tokens: 60,
      temperature: 0.7,
    });
    
    const summary = response.choices[0].text.trim();
    
    return res.status(200).json({ summary });
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    
    // Fallback summaries if OpenAI fails - make these specific to the video if possible
    const fallbackSummaries = [
      `Introduction to key concepts in ${videoTitle}`,
      `Overview of main topics and initial examples`,
      `Detailed explanation of core principles`,
      `Demonstration of practical techniques`,
      `Analysis of important components`,
      `In-depth discussion with examples`,
      `Advanced concepts and applications`,
      `Addressing common challenges and solutions`,
      `Review of key points covered`,
      `Final thoughts and recommendations`
    ];
    
    return res.status(200).json({ summary: fallbackSummaries[position % fallbackSummaries.length] });
  }
}