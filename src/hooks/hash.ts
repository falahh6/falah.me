"use client";

import { useEffect, useState } from "react";

export const useHash = () => {
  const [hash, setHashSt] = useState<string | null>(null);

  const setHash = (hash: string) => {
    window.location.hash = hash;
    setHashSt(hash);
  };

  useEffect(() => {
    const updateHash = () => {
      setHashSt(window.location.hash);
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return { hash, setHash };
};
