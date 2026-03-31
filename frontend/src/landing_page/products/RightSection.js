

import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* TEXT */}
        <div className="col-lg-6 px-lg-5 mb-4 mb-lg-0">
          <h1 className="fw-semibold">{productName}</h1>

          <p className="text-muted" style={{ lineHeight: "1.7" }}>
            {productDesription}
          </p>

          <div className="mt-3">
            {learnMore && (
              <a href={learnMore} className="text-primary text-decoration-none">
                Learn More
              </a>
            )}
          </div>
        </div>

        {/* IMAGE */}
        <div className="col-lg-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
