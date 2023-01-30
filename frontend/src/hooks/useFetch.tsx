import { useEffect } from "react";

export const useFetch = (url: string, setState: => void) => {
  useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch(`${url}`);
        const data = await res.json();
        setState(data)
      }
      fetchData()
    }
    ,[]
  )
}