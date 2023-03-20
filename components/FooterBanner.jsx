import React from "react";
import Link from "next/link";
import { urlFor } from "lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,

    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  },
}) => {
  return (
    <>
      <div className="footer-banner-container">
        <div className="banner-desc">
          <div className="left">
            <img src={urlFor(image)} className="footer-banner-image" alt="" />
          </div>
          <div className="right">
            <h1>{largeText1}</h1>
            <h3>{smallText}</h3>
            <p>{desc}</p>
            <Link href={`/product/${product}`}>
              <button type="button">{buttonText}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBanner;
