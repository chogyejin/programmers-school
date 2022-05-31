import Upload from "../components/Upload";

export default {
  title: "Component/Upload",
  component: Upload,
};

export const Default = () => {
  return (
    <Upload name="인풋">
      <button>클릭</button>
    </Upload>
  );
};

export const AccessFile = () => {
  return (
    <Upload>{(file) => <button>{file ? file.name : "클릮!"}</button>}</Upload>
  );
};

export const Droppable = () => {
  return (
    <Upload droppable>
      {(file, dragging) => (
        <div
          style={{
            width: 300,
            height: 100,
            border: "4px dashed #aaa",
            borderColor: dragging ? "black" : "#aaa",
          }}
        >
          {file ? file.name : "여기로 끌어다놓으세요"}
        </div>
      )}
    </Upload>
  );
};
