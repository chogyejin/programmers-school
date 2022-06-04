import useLocalStorage from "../../hooks/useLocalStorage";

export default {
  title: "Hook/useLocalStorage",
};

export const Default = () => {
  const [status, setStatus] = useLocalStorage("status", "404 not found");

  return (
    <>
      <button onClick={() => setStatus("200 OK")}>갱신</button>
      <div>{status}</div>
    </>
  );
};
