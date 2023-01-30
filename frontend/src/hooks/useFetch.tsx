/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export const useFetch = (url: string, setState: (value: { [key: string]: (number&string) } ) => void) => {
  useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch(`${url}`);
        const data = await res.json();
        setState(data)
      }
      fetchData()
    }
    , []
  )
}