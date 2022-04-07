const API_ENDPOINT = "https://kdt.roto.codes";

export const request = (url) => {
  return fetch(`${API_ENDPOINT}${url}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Status code ${res.status}, 에러 발생`);
    })
    .catch((e) => console.log(e.messgae));
};
