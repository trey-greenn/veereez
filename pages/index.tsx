import { Inter } from "next/font/google";
import YoutubeTimestampSummary from '../components/YoutubeTimestampSummary';
import BlogAnalyzer from '../components/BlogAnalyzer';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`min-h-screen flex flex-col items-center justify-center ${inter.className} bg-black py-8`}>
      <YoutubeTimestampSummary/>

      <BlogAnalyzer />
    </main>
  );
}