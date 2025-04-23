import React from "react";
import wholesaleBanner from "../../assets/wholesaleBanner.jpeg";

function Wholesale() {
  return (
    <div className="relative min-h-screen flex justify-center items-center pt-[15vw] px-10">
      <div
        className="absolute inset-0 brightness-75"
        style={{
          backgroundImage: `url(${wholesaleBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="text-white text-center w-[850px] py-40 z-10">
        <p
          style={{ fontFamily: "Rubik One" }}
          className="text-5xl lg:leading-[3vw] pb-16"
        >
          WE PROUDLY SUPPLY SOME OF THE FINEST CAFES AND BUSINESSES IN THE
          INDUSTRY
        </p>
        <p>
          At Origins Coffee Roasters, we share a passion for one simple thing:
          crafting the best coffee possible through bridging longstanding
          relationships with farmers and vendors across the globe. We believe
          that the best coffee is not just a beverage—it's an experience. It's
          the perfect balance of freshness, impeccable brewing, and elevating
          moments.
        </p>
        <br />

        <p>
          Quality is at the forefront of everything we do. When you choose
          Origins Coffee Roasters as your wholesale partner, you can expect a
          commitment to excellence that extends from sourcing to roasting and
          beyond. With over 35 years of experience under our belts, our team of
          experts meticulously selects coffees for our signature label based
          solely on their exceptional quality and distinctive character. These
          coffees are a true representation of our dedication to delivering an
          unparalleled experience to your customers.
        </p>
        <br />

        <p>
          We understand that serving the best coffee requires more than just the
          product itself. That's why we provide comprehensive support and
          guidance to help you excel in every aspect of your coffee program.
          From consulting and advice on design, layout, equipment, and menu
          development to educational resources and barista training, we are here
          to ensure your success.
        </p>
        <br />
        <p>
          Join us in the pursuit of crafting extraordinary coffee experiences.
          Choose Origins Coffee Roasters as your wholesale partner, and let us
          help you create memorable moments for your customers. Contact us today
          to explore our exceptional coffee offerings and the comprehensive
          support we provide.
        </p>
        <br />
        <div className="py-20">
          <span className="siteButton">Contact Us</span>
        </div>
      </div>
    </div>
  );
}

export default Wholesale;
