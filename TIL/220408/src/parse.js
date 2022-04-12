export const parse = (querystring) =>
  // username=chogyejin&age=19
  // "&"" 기준으로 나눠서 배열 만듦
  querystring.split("&").reduce((acc, keyAndValue) => {
    const [key, value] = keyAndValue.split("="); // "=" 기준으로 key-value 분리

    if (key && value) {
      acc[key] = value; // 누적 값인 acc에 담음, 초기값은 빈 object
    }

    return acc;
  }, {});
