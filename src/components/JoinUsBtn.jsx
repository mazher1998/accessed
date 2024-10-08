"use client";
import React, { useState } from "react";
import EnrolmentPopUp from "./EnrolmentPopUp";
import PopUp from "./ToastPop";


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
      
      <div className="pb-100 d-flex justify-content-center">
        <button
          className="pxy-18-110 text-16 border-none border-radius-10 bg-000000 text-FFFFFF btn-hover"
          onClick={() => setShowModal(!showModal)}
        >
          Join us
        </button>
      </div>

     
    </>
  );
};

export default JoinUsBtn;
