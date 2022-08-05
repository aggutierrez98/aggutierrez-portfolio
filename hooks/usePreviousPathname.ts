import { useEffect, useState } from "react";

export const usePreviousPathname = (asPath: string) => {
  const [prevPath, setPrevPath] = useState("");

  useEffect(() => storePathValues, [asPath]);
  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    const prevPath = storage.getItem("currentPath");
    setPrevPath(prevPath || "");
    storage.setItem("prevPath", prevPath || "/");
    storage.setItem("currentPath", globalThis.location.pathname);
  }

  return prevPath;
};
