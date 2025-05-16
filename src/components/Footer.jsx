import * as React from "react";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#333232] text-white p-10 md:p-20 flex justify-between gap-10">
      <div>
        <p className="baseFont">1245 Cartwright St, Vancouver, BC V6H 4B7 </p>
        <p className="text-sm" style={{ wordSpacing: "3px" }}>
          HOURS: By Appointment Only
        </p>
        <div className="mt-5 baseFont">
          <a
            className=" underline cursor-pointer"
            style={{ textUnderlineOffset: "4px" }}
            onClick={() => navigate("/contact")}
          >
            Contact
          </a>
        </div>
      </div>
      <div>
        <a className="cursor-pointer">
          <FaInstagram size={25} />
        </a>
      </div>
    </div>
  );
};
