import { useRef, useEffect } from "react";
import useRafState from "./useRafState";

const useScroll = (d) => {
  const [state, setState] = useRafState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      setState({
        x: element.scrollLeft,
        y: element.scrollTop,
      });
    };

    element.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [setState]);

  return [ref, state];
};

export default useScroll;
