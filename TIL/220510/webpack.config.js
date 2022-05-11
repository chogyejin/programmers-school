const path = require("path");

module.exports = {
  entry: "./src/main.js", // entry point 설정, 나머지 옵션들은 path.resolve 사용
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "", // 번들 결과 파일명(optional)
  },
};
