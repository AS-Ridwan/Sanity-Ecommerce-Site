// import { FooterBanner, HeroBnner } from "components";
import product from "ecommerce/schemas/product";
import React from "react";
import { client } from "../../lib/client";
import "../app/globals.css";
import {
  Product,
  FooterBanner,
  HeroBnner,
  Header,
} from "../../components/index";
import Subs from "components/Subs";

const Home = ({ products, bannerData, heroData }) => {
  return (
    <>
      <Header></Header>
      <HeroBnner heroBanner={heroData && heroData[0]} />

      <div className="products-heading">
        <h2>Sound You Can Believe In</h2>
        <p>QUALITY HEADPHONES</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
      <Subs></Subs>
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type== "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const heroQuery = '*[_type == "hero"]';
  const heroData = await client.fetch(heroQuery);

  return {
    props: { products, bannerData, heroData },
  };
};

export default Home;
