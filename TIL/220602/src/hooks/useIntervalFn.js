import { useCallback, useEffect, useRef } from "react";

const useIntervalFn = (fn, ms) => {
  const intervalId = useRef();
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn; // callback 최적화, callback에 담은 값을 사용하기 때문에 fn이 중간에 변해도 문제 안 생김
  }, [fn]);

  // delay 후에 fn 실행시키는 함수
  const run = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);

    intervalId.current = setInterval(() => {
      callback.current();
    }, [ms]);
  }, [ms]);

  // 컴포넌트 사라질 때 id clear
  const clear = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);
  }, []);

  useEffect(() => clear, [clear]);

  return [run, clear];
};

export default useIntervalFn;
