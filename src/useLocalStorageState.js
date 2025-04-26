import { useEffect, useState } from "react";
export function useLocalStorageState() {
  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  }); //lazy initialization of state

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );
  return { watched, setWatched };
}
