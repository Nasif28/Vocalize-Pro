// components/HeroSection.tsx
import Navbar from "./Navbar";
import { Button } from "./ui/Button";

export default function HeroSection() {
  return (
    <section
      style={{ background: "rgba(74, 43, 241, 1)" }}
      className="min-h-[886px] text-white"
    >
      <Navbar />
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
          Super easy to <span className="text-orange-400">transcribe</span>{" "}
          audio, video, or recordings into social media posts, blogs, summaries,
          and articles.
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg">
          AI that converts audio or video into transcripts, clips, show notes,
          articles, summaries, titles, newsletters, and much more.
        </p>

        {/* Call to Action */}
        <div className="mt-8">
          <Button variant="default">Free for 7 Days</Button>
        </div>
      </div>
    </section>
  );
}
