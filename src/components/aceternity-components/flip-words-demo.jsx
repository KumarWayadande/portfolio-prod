import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = [
    "Full Stack Developer",
    "Mumbai's Underbelly Wanderer",
    "Team Project Leader",
    "School Topper - SSC",
  ];

  return (
    <div className="">
      <div className="">
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
