const API_END_POINT = "https://kdt.roto.codes";

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`);

    if (res.ok) {
      return await res.json();
    }

    throw new Error("요청 실패");
  } catch (error) {
    console.log(error);
  }
};
