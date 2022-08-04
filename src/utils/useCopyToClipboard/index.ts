import { useState } from "react";

function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState("");

  const copy = async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed:", error);
      setCopiedText("");
      return false;
    }
  };

  return [copiedText, copy];
}

export default useCopyToClipboard;
