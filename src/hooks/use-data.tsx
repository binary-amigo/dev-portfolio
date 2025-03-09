import { useState, useEffect } from "react";
import data from "../data/data.json";

export const useData = () => {
  const [state, setState] = useState<{
    skills: any[];
    previousWork: { title: string; link: string }[];
    blog: { title: string; link: string }[];
  } | null>(null);

  useEffect(() => {
    setState(data);
  }, []);

  return state;
};
