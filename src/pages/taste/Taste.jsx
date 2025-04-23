import React from "react";
import tasteBanner from "../../assets/tasteBanner.jpeg";

function Taste() {
  const ShopMap = () => (
    <div className="w-full h-[400px]">
      <iframe
        title="shop-location"
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.0682733077483!2d-122.08424908469287!3d37.42206597982515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb73245b1d137%3A0x4ec6d3c267b8d8e5!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614000000000!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );

  return (
    <div>
      <div className="relative h-screen flex justify-center items-center pt-[120px] overflow-hidden">
        <div
          className="absolute inset-0 brightness-50 bg-cover bg-center"
          style={{
            backgroundImage: `url(${tasteBanner})`,
            zIndex: 0,
          }}
        ></div>

        <div
          className="relative z-10 text-white text-center leading-[8vw]"
          style={{ fontFamily: "Rubik One" }}
        >
          <p style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>COFFEE ON US</p>
        </div>
      </div>

      <div className="flex px-[10vw] py-[5vw] bg-[#ebe7df] justify-between items-center gap-10 flex-col-reverse md:flex-row">
        <div className="text-3xl" style={{ fontFamily: "Rubik One" }}>
          <p>Join us in-store for free tastings during pop-up events.</p>
          <p className="my-10">
            Visit our{" "}
            <span className="underline cursor-pointer text-[#4f6744]">
              Instagram
            </span>{" "}
            for upcoming dates.
          </p>
        </div>
        <div className="w-[100%] max-w-[700px]">
          <ShopMap />
          <p>1245 Cartwright St, Vancouver, BC V6H 4B7</p>
        </div>
      </div>
    </div>
  );
}

export default Taste;
