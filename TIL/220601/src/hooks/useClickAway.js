import { useEffect, useRef } from "react";

const events = ["mousedown", "touchstart"];

const useClickAway = (handler) => {
  const ref = useRef(null);
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleEvent = (e) => {
      !element.contains(e.target) && savedHandler.current(e); // 기존에는 handler(e)
    };

    for (const event of events) {
      document.addEventListener(event, handleEvent);
    }

    return () => {
      for (const event of events) {
        document.removeEventListener(event, handleEvent);
      }
    };
  }, []);

  return ref;
};

export default useClickAway;
