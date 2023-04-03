import Link from "next/link";
import React from "react";
import { urlFor } from "lib/client";

const HeroBnner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="inner-container">
        <div>
          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText}</h1>
          <img
            src={urlFor(heroBanner.image)}
            alt="headphone"
            className="hero-banner-image "
          />
          <Link href="#product">
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBnner;
