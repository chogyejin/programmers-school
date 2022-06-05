import useTimeoutFn from "./useTimeoutFn";
import { useEffect } from "react";

const useTimeout = (fn, ms) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  // useTimeout은 컴포넌트가 만들어지고 바로 run
  useEffect(() => {
    run();
    return clear;
  }, [clear, run]);

  return clear;
};

export default useTimeout;
