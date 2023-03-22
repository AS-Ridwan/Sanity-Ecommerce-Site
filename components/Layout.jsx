import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Subs from "./Subs";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <title>Best Shoping Store</title>
      </Head>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="">{children}</main>
      <section>
        <Subs></Subs>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
