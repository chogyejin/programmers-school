const API_END_POINT = "https://todo-api.roto.codes/chogyejin";

export const request = async (url, options) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, options);

    if (res.ok) {
      return await res.json();
    }

    throw new Error("API 호출 에러");
  } catch (error) {
    console.log(error.message);
  }
};

const data = {
  content: "ㅜㅜㅜㅜㅜㅜㅜㅜ",
  isCompleted: true,
};

// const a = () => {
//   fetch(`${API_END_POINT}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
// };
// a();

// const _id = "626c4c5accbcff0556e9f4f3";
// fetch(`${API_END_POINT}/${_id}`, {
//   method: "DELETE",
// });

// const _id = "626c4cd5ccbcff0556e9f4f7";
// fetch(`${API_END_POINT}/${_id}/toggle`, {
//   method: "PUT",
// });
