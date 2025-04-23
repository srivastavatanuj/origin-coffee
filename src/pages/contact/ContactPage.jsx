import * as React from "react";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import img1 from "../../assets/contact-img1.jpeg";
import img2 from "../../assets/contact-img2.jpeg";
import img3 from "../../assets/contact-img3.jpeg";
import img4 from "../../assets/contact-img4.jpeg";

export default function ContactPage() {
  const images = [
    { src: img1, link: "https://www.instagram.com/p/CvK_HP-vjO1/" },
    { src: img2, link: "https://www.instagram.com/p/CvGMaqwP0Ty/" },
    { src: img3, link: "https://www.instagram.com/p/CKVTvImMjez/" },
    { src: img4, link: "https://www.instagram.com/p/BVaGLr4FdBn/" },
  ];
  return (
    <div className="flex pt-[120px] bg-[var(--theme-color)] items-center px-[10vw] flex-col lg:flex-row gap-10">
      <div className="text-white my-28">
        {" "}
        <ContactInfo />
        <ContactForm />
      </div>
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto h-min">
        {images.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-all"
          >
            <img
              src={item.src}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-[300px] object-cover  shadow-md"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
