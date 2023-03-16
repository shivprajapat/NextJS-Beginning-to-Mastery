import { Fragment } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<main>
      <Component {...pageProps} />
    </main>)
  }
  return (
    <Fragment>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default MyApp;
