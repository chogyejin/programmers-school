import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = (context: AppContext) => {
  console.log(context);
  return {
    pageProps: {
      test: 100,
    },
  };
};

export default MyApp;
