const API_END_POINT =
  "https://kdt-frontend.cat-search-api.programmers.co.kr/api/cats";

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`);

    if (res.ok) {
      return await res.json();
    }

    throw new Error("API 호출 에러");
  } catch (error) {
    console.log(error.message);
  }
};
