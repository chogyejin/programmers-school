import useSessionStorage from "../../hooks/useSessionStorage";

export default {
  title: "Hook/useSessionStorage",
};

export const Default = () => {
  const [status, setStatus] = useSessionStorage("status", "404 not found");

  return (
    <>
      <button onClick={() => setStatus("200 OK")}>갱신</button>
      <div>{status}</div>
    </>
  );
};
