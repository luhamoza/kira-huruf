"use client";

import Text from "@/components/text";
import Header from "@/components/header";
import Stats from "@/components/stats";
import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const statInfo = {
    words: text.split(" ").filter((word) => word !== "").length,
    textLength: text.length,
    uppercase: text.replace(/[^A-Z]/g, "").length,
    lowercase: text.replace(/[^a-z]/g, "").length,
    special: text.replace(/[A-Za-z0-9\s]/g, "").length,
  };
  return (
    <main className="container mt-8 flex gap-4 flex-col w-96">
      <Header />
      <Text text={text} setText={setText} />
      <Stats
        textLength={statInfo.textLength}
        words={statInfo.words}
        uppercase={statInfo.uppercase}
        lowercase={statInfo.lowercase}
        special={statInfo.special}
      />
    </main>
  );
}
