import { Inter } from "next/font/google";
import YoutubeTimestampSummary from '../components/YoutubeTimestampSummary';

const inter = Inter({ subsets: ["latin"] });

export default function YoutubeTimestampPage() {
  return (
    <main className={`min-h-screen ${inter.className} bg-gray-50 py-8`}>
      <YoutubeTimestampSummary />
    </main>
  );
}