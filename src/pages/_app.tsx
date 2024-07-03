import { AppProps } from "next/app";
import Navbar from "@/components/navbar/Navbar";
import styled from "styled-components";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import GlobalStyles from "@/styles/GlobalStyles";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  const Container = styled.main`
    max-width: 1920px;
    margin: 0 auto;
  `;

  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container className={roboto.className}>
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}

export default MyApp;
