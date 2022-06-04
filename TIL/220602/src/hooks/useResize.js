import { useEffect, useRef } from "react";

const useResize = (handler) => {
  const saveHandler = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    saveHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      saveHandler.current(entries[0].contentRect);
    });

    observer.observe(element); // element 크기 변화(resize) 감지

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return ref;
};

export default useResize;
