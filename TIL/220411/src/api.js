const API_END_POINT = "https://kdt.roto.codes";

export const request = async (url, option = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      return await res.json();
    }

    throw new Error("API 호출 에러");
  } catch (e) {
    console.log(e.message);
  }
};
