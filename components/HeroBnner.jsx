import Link from "next/link";
import React from "react";
import { urlFor } from "lib/client";

const HeroBnner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="hero-banner-inner">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphone"
          className="hero-banner-image"
        />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5></h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBnner;
