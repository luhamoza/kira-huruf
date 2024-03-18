"use client";

import { Textarea } from "./ui/textarea";

export default function Text({
  text,
  setText,
}: {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}) {
  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }
  return (
    <div>
      <Textarea
        className="w-full h-64"
        value={text}
        spellCheck="false"
        onChange={handleChange}
        placeholder="Copy paste text anda disini..."
      />
    </div>
  );
}
