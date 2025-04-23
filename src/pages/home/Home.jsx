import React from "react";
import homeBanner from "../../assets/homeBanner.jpeg";
import homeSection2Img1 from "../../assets/home-img1.jpeg";
import homeSection2Img2 from "../../assets/home-img2.jpeg";
import homeSection3banner from "../../assets/home-section3.jpeg";

function Home() {
  return (
    <div>
      {/* section1 */}
      <div className="relative h-screen flex justify-center items-center pt-[120px] overflow-hidden">
        <div
          className="absolute inset-0 brightness-50 bg-cover bg-center"
          style={{
            backgroundImage: `url(${homeBanner})`,
            zIndex: 0,
          }}
        ></div>

        <div
          className="relative z-10 text-white text-center md:leading-[8vw]"
          style={{ fontFamily: "Rubik One" }}
        >
          <p style={{ fontSize: "clamp(2rem, 5vw, 6rem)" }}>GET A TASTE OF</p>
          <p style={{ fontSize: "clamp(3rem, 10vw, 12rem)" }}>ORIGINS</p>
        </div>
      </div>

      {/* section 2 */}
      <div className="bg-[var(--theme-color)] text-white py-24 px-[5%] md:px-[15%]">
        <div className="flex gap-7 mb-40 flex-col sm:flex-row">
          <div className="flex flex-col gap-9 justify-center">
            <h2 className="heading">A LEGACY OF UNCOMPROMISING QUALITY</h2>
            <p>
              Origins Whole Coffee Roasters is a wholesale coffee company with
              over 35 years of roasting experience. We're located on Granville
              Island and we offer Artisan Roasted, Farmer Friendly coffee.
            </p>
            <span className="siteButton ">Get a Taste</span>
          </div>
          <div>
            <img src={homeSection2Img1} alt="" className="min-h-[450px]" />
          </div>
        </div>

        <div className="flex gap-16 flex-col-reverse sm:flex-row">
          <div>
            <img src={homeSection2Img2} alt="" className="min-w-[200px]" />
          </div>
          <div className="flex flex-col gap-9 justify-center">
            <h2 className=" heading">
              DEVELOP YOUR PASSION, BROADEN YOUR PALATE, AND SHARPEN YOUR SKILLS
              AT THE ONLY SCA CERTIFIED PREMIER TRAINING CAMPUS IN VANCOUVER.
            </h2>
            <p>
              Vancouver Coffee Academy is brought to you by John Sanders, AST.
              John has over 35 years of experience in artisan roasting, brewing,
              sourcing fine green coffees, training professional baristas, and
              developing ones’ palate through sensory training.
            </p>
            <span className="siteButton">Vancouver Coffee Academy</span>
          </div>
        </div>
      </div>

      <div className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 brightness-75 bg-cover bg-center"
          style={{
            backgroundImage: `url(${homeSection3banner})`,
          }}
        ></div>
        <div className="w-2/3 text-center flex flex-col gap-5 z-10">
          <div
            className="md:leading-[4vw]"
            style={{
              fontFamily: "Rubik One",
              fontSize: "clamp(1.5rem, 5vw, 3.5rem)",
            }}
          >
            WE PROUDLY SUPPLY SOME OF THE FINEST CAFES AND BUSINESSES IN THE
            INDUSTRY
          </div>
          <span className="siteButton">Become One of Them</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
