"use client";
import React, { useState } from "react";
import Image from "next/image";
import EnrolmentPopUp from "./EnrolmentPopUp";
import PopUp from "./ToastPop";

function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
    timeout: 0,
  });

  return (
    <div>
      <PopUp props={popup} />
      <EnrolmentPopUp
        showModal={showModal}
        setShowModal={setShowModal}
        setPopup={setPopup}
      />
      <div className="px-100 py-100 px-27 py-50">
        <div className="text-center">
          <h1 className="mb-20 font-500 text-50 mobile-text-36 font-lora">
            Ace Your
            <span className=" text-3980F3 relative">
              {" "}
              Entry Tests{" "}
              <Image
                src="/OnlineTextBelowImage.svg"
                alt="Decorative element"
                width={205}
                height={25}
                className="absolute mobile-W-150 text-decorative-position"
                // style={{ left: "-18px", bottom: "-4px" }}
              />
            </span>{" "}
            for<span className="text-3980F3 "> Top</span>
            <br className="mobile-display-none" />
            <span className="text-3980F3"> Universities </span> in Pakistan -{" "}
            <span className="text-3980F3">For Free</span>!
          </h1>
          <p className="text-7B7B7B mb-80 mobile-text-12">
            Prepare for aptitude exams and secure admissions in Computer Science
            and
            <br className="mobile-display-none" /> Business programs at leading
            institutions.
          </p>

          <div className="d-flex justify-content-center pointer">
            <div
              className="pxy-18-57 mobile-pxy-18-30 border-none border-radius-10 bg-000000 text-FFFFFF relative btn-hover"
              onClick={() => setShowModal(!showModal)}
            >
              <Image
                src="/BtnLeftImage.svg"
                width={38}
                height={38}
                alt="Decorative element"
                className="absolute"
                style={{ top: "-25px", left: "-35px" }}
              />

              <span>Join our waiting list</span>

              <Image
                src="/BtnRightImage.svg"
                width={38}
                height={38}
                alt="Decorative element"
                className="absolute"
                style={{ top: "-25px", right: "-35px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
