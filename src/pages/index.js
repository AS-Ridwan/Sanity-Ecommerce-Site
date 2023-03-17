// import { FooterBanner, HeroBnner } from "components";
import product from "ecommerce/schemas/product";
import React from "react";
import { client } from "../../lib/client";
import "../app/globals.css";
import { Product, FooterBanner, HeroBnner } from "../../components/index";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBnner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type== "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
