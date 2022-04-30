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

// const data = {
//   content: "ㅊㅊㅊㅊㅊㅊㅊㅊㅊㅊㅊㅊㅊㅊㅊㅊㅊ",
//   isCompleted: true,
// };

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
