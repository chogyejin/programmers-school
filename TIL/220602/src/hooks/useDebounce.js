import { useEffect } from "react";
import useTimeoutFn from "./useTimeoutFn";

const useDebounce = (fn, ms, deps) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  // deps를 변수로 넘기지 말라는 eslint 경고 제거
  // eslint-disable-next-line
  useEffect(run, deps);

  return clear;
};

export default useDebounce;
