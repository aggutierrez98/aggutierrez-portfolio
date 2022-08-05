import { useState } from "react";
// import copy from "copy-to-clipboard"
import copy from "copy-text-to-clipboard";

export default function useCopyToClipboard() {
  const [value, setValue] = useState("");
  const [success, setSuccess] = useState<boolean>();

  const copyToClipboard = (text: string, options: any) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  };

  return [copyToClipboard, { value, success }];
}
