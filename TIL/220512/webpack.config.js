const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".vue", ".js"], // 확장자 생략 가능
    alias: {
      "~": path.resolve(__dirname, "src"), // ~ : src부터 찾을 거다
    },
  },
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true, // dist 폴더에서 불필요한 파일 제거
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // .vue로 끝나는 파일들
        use: "vue-loader",
      },
      {
        test: /\.s?css$/, // scss, css 다 찾도록
        use: ["vue-style-loader", "css-loader", "sass-loader"], // 먼저 평가되어야 하는 아이템을 나중에 적기
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: "./src/index.html", // 기본적으로 path.resolve 적용돼있음
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }], // to 옵션 생략 => output의 path 참조함
    }),
  ],
  // devServer: {
  //   port: 1234, // 개발 서버 포트 수정
  // },
};
