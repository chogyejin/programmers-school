import { useState, useCallback, useRef } from "react";

const useAsyncFn = (fn, deps) => {
  const lastCallId = useRef(0); // 최종 state만 반영하기 위한 callback id 담은 변수
  const [state, setState] = useState({ isLoading: false }); // state : value, error, isLoading

  const callback = useCallback((...args) => {
    const callId = ++lastCallId.current;

    if (!state.isLoading) {
      setState({ ...state, isLoading: true });
    }

    return fn(...args).then(
      (value) => {
        // setState({ value, isLoading: false });
        callId === lastCallId.current && setState({ value, isLoading: false }); // 마지막만 반영
        return value;
      },
      (error) => {
        // setState({ error, isLoading: false });
        callId === lastCallId.current && setState({ error, isLoading: false });
        return error;
      }
    );
    // eslint-disable-next-line
  }, deps);

  return [state, callback];
};

export default useAsyncFn;
