import { urlify } from "helpers";
import { useEffect, useRef } from "react";

export const useParagraphFromJSON = (text: string) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.innerHTML = `${urlify(text)}`;
  }, [text]);

  return ref;
};
