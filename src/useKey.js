import { useEffect } from "react";

export function useKey(key, actionCallback) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase === key.toLowerCase) {
          actionCallback();
        }
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [actionCallback, key]
  );
}
