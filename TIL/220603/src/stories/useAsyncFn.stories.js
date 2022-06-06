import useAsyncFn from "../hooks/useAsyncFn";

export default {
  title: "Hook/useAsyncFn",
};

const asyncReturnValue = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success!!");
    }, 1000);
  });
};

const asyncReturnError = () => {
  return new Promise((_, rejetc) => {
    setTimeout(() => {
      rejetc("Error!!");
    }, 1000);
  });
};

export const Success = () => {
  const [state, callback] = useAsyncFn(async () => {
    return await asyncReturnValue();
  }, []);

  return (
    <>
      <div>
        <h2>useAsyncFn Value</h2>
        <div>{JSON.stringify(state)}</div>
        <button onClick={callback} disabled={state.isLoading}>
          비동기 부르기
        </button>
      </div>
    </>
  );
};

export const Error = () => {
  const [state, callback] = useAsyncFn(async () => {
    return await asyncReturnError();
  }, []);

  return (
    <>
      <div>
        <h2>useAsyncFn Error</h2>
        <div>{JSON.stringify(state)}</div>
        <button onClick={callback} disabled={state.isLoading}>
          비동기 부르기
        </button>
      </div>
    </>
  );
};
