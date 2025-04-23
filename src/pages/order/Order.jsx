import React from "react";
import orderBanner from "../../assets/orderBanner.png";

function Order() {
  return (
    <div>
      <div
        className="h-[70vh] flex justify-center items-center pt-[120px] brightness-75"
        style={{
          backgroundImage: `url(${orderBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="text-white text-center leading-[8vw] "
          style={{ fontFamily: "Rubik One" }}
        >
          <p style={{ fontSize: "clamp(2rem, 5vw, 6rem)" }}>
            ORDER HOUSE BLENDS
          </p>
        </div>
      </div>

      <div className="bg-[var(--theme-color)]">
        <h1>House Blends</h1>
        <div></div>
      </div>
    </div>
  );
}

export default Order;
