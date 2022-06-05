import useIntervalFn from "./useIntervalFn";
import { useEffect } from "react";

const useInterval = (fn, ms) => {
  const [run, clear] = useIntervalFn(fn, ms);

  // useInterval은 컴포넌트가 만들어지고 바로 run
  useEffect(() => {
    run();
    return clear;
  }, [clear, run]);

  return clear;
};

export default useInterval;
