'use client'
import React, { useState } from 'react'
import Image from "next/image";
import EnrolmentPopUp from './EnrolmentPopUp';


function HeroSection() {
    const [showModal, setShowModal] = useState(false);

  return (
    <div>
          <div className="px-100 py-100">
        <div className="text-center">
          <h1 className="mb-20 font-500 text-50 font-lora">
            Best{" "}
            <span className="text-3980F3 relative">
              Online
              <Image
                src="/OnlineTextBelowImage.svg"
                alt="Decorative element"
                width={205}
                height={25}
                className="absolute"
                style={{ left: "-34px", bottom: "-4px" }}
              />
            </span>{" "}
            Platform to Learn
            <br />
            Everything<span className="text-3980F3">.</span>
          </h1>
          <p className="text-7B7B7B mb-80">
            Evaluate Your Professors and Enhance the Academic Experience
          </p>

          <div className="d-flex justify-content-center">
            <div className="pxy-18-57 border-none border-radius-10 bg-000000 text-FFFFFF relative btn-hover" onClick={()=>setShowModal(!showModal)} >
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
      <EnrolmentPopUp showModal={showModal} setShowModal={setShowModal} />

    </div>
  )
}

export default HeroSection