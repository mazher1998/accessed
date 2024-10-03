'use client'
import Image from "next/image";
import { useState } from "react";


const EnrolmentPopUp = ({ showModal, setShowModal }) => {
  const [isChecked, setIsChecked] = useState(false);
  if (!showModal) return null;

  return (<>
    
    <div className="modal-content-popup">
      <div
        className=" bg-FFFFFF relative border-radius-20 "
        style={{ width: "658px" }}
      >
        <span
          className="absolute pointer"
          style={{ right: "0", padding: "20px" }}
          onClick={() => setShowModal(!showModal)}
        >
          <Image
            src="/Icons/cross.svg"
            width={27}
            height={27}
            alt="Cross Close Icon"
          />
        </span>
        <div className="modal-padding">
          <div className="text-center mb-40">
            <p className="text-24 text-3980F3 mb-0">Enrolment</p>
            <span className="text-14">Enter details to get enrolled</span>
          </div>

          <div className="row mb-60">
            <div className="col-6 pr-0-imp">
              <input
                required
                type="text"
                placeholder="Full Name*"
                className="grey-placeholder full-width pxy-25-15 border-radius-6 border-D7D7D7"
              />
            </div>
            <div className="col-6 mb-10">
              <input
                required
                type="text"
                placeholder="City*"
                className="grey-placeholder full-width pxy-25-15 border-radius-6 border-D7D7D7"
              />
            </div>
            <div className="col-6 mb-10 pr-0-imp">
              <input
                required
                type="text"
                placeholder="Phone number*"
                className="grey-placeholder full-width pxy-25-15 border-radius-6 border-D7D7D7"
              />
            </div>
            <div className="col-6">
              <input
                type="email"
                placeholder="Email Addres (optional)"
                className="full-width grey-placeholder pxy-25-15 border-radius-6 border-D7D7D7"
              />
            </div>
            <div className="col-12 mb-10 relative">
              <select
                className="full-width pxy-25-15 border-radius-6 border-D7D7D7 select-custom"
                required
              >
                <option value="" disabled selected className="">
                  University*
                </option>
                <option value="university1">University 1</option>
                <option value="university2">University 2</option>
                <option value="university3">University 3</option>
                <option value="university4">University 4</option>
              </select>
              <Image
                src="/Icons/SelectCustomArrow.svg"
                width={14}
                height={14}
                alt="Custom arrow"
                className="custom-arrow"
              />
            </div>
            <div className="col-12 relative">
              <select
                className="full-width pxy-25-15 border-radius-6 border-D7D7D7 select-custom"
                required
              >
                <option value="" disabled selected className="">
                  Test*
                </option>
                <option value="university1">Test 1</option>
                <option value="university2">Test 2</option>
                <option value="university3">Test 3</option>
                <option value="university4">Test 4</option>
              </select>
              <Image
                src="/Icons/SelectCustomArrow.svg"
                width={14}
                height={14}
                alt="Custom arrow"
                className="custom-arrow"
              />
            </div>
          </div>
          <div>
            <div className="mt-20">
              <label className="custom-checkbox text-14 font-400">
                <input type="checkbox" className="mr-8" onClick={(e)=> setIsChecked(e.target.checked)} />I agree to the &nbsp;{" "}
                <span className="text-0378A6"> Terms of Services &nbsp;</span>{" "}
                and &nbsp;<span className="text-0378A6"> Privacy Policy</span>.
              </label>
            </div>
          </div>

          <div className="mt-28">
            <button className="bg-gradient-modal full-width pxy-16-10 text-FFFFFF border-none border-radius-8" submit disabled ={!isChecked}>
              Done
            </button>
          </div>
        </div>
      </div>
      </div>

      <div className="modal-overlay " onClick={() => setShowModal(!showModal)} > </div>
      </>
  );
};

export default EnrolmentPopUp;
