import { useEffect } from "react";

export const useFetching = (fetch, dependencies, callbacks) => {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(signal).then((data) => callbacks(data));

    return () => {
      controller.abort();
    };
  }, dependencies);
};
