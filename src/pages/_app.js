import { Layout } from "components";
import React from "react";
import { Toaster } from "react-hot-toast";
import "../../src/app/globals.css";
import { StateContext } from "context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </div>
  );
}

export default MyApp;
