import Upload from "../components/Upload";

export default {
  title: "Component/Upload",
  component: Upload,
};

export const Default = () => {
  return (
    <Upload>
      <button>클릭</button>
    </Upload>
  );
};

export const AccessFile = () => {
  return (
    <Upload>{(file) => <button>{file ? file.name : "클릮!"}</button>}</Upload>
  );
};
