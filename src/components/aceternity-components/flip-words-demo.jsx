import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = [
    "Full-Stack Developer and Cloud Computing Ethusiast.",
    // "I'm Mumbai's Underbelly Wanderer",
    // "I'm Team Project Leader",
    // "I'm School Topper - SSC",
  ];

  return (
    <div className="">
      <div className="">
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
