"use client";
import React, { useState } from "react";
import EnrolmentPopUp from "./EnrolmentPopUp";
import PopUp from "./ToastPop";
import Link from "next/link";



const JoinUsBtn = () => {
  const [showModal, setShowModal] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
    timeout: 0,
  });
  return (
    <>
     <PopUp props={popup} />
      <EnrolmentPopUp showModal={showModal} setShowModal={setShowModal} setPopup={setPopup} />
      
      <div className=" mt-48">
        <Link
        href="https://app.accessed.pk/signup"   target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}
          className=" pxy-18-66 text-16 border-000000 border-radius-10 bg-FFFFFF text-000000 btn-hover"
          // onClick={() => setShowModal(!showModal)}
        >
          Join us
        </Link>
      </div>

     
    </>
  );
};

export default JoinUsBtn;
