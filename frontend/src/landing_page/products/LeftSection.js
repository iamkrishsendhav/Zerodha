

import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* IMAGE */}
        <div className="col-lg-6 text-center mb-4 mb-lg-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* TEXT */}
        <div className="col-lg-6 px-lg-5">
          <h1 className="fw-semibold">{productName}</h1>

          <p className="text-muted" style={{ lineHeight: "1.7" }}>
            {productDesription}
          </p>

          {/* LINKS */}
          <div className="mt-3 d-flex flex-wrap gap-4">
            {tryDemo && (
              <a href={tryDemo} className="text-primary text-decoration-none">
                Try Demo
              </a>
            )}

            {learnMore && (
              <a href={learnMore} className="text-primary text-decoration-none">
                Learn More
              </a>
            )}
          </div>

          {/* STORE BUTTONS */}
          <div className="mt-4 d-flex flex-wrap gap-3">
            {googlePlay && (
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  style={{ height: "40px" }}
                />
              </a>
            )}

            {appStore && (
              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="App Store"
                  style={{ height: "40px" }}
                />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;