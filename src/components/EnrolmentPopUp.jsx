"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import "./../styles/EnrolmentPopUp.css";
// import { universitiesName } from "@/helper/constants";

const EnrolmentPopUp = ({ showModal, setShowModal, setPopup }) => {

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [missingFields, setMissingFields] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    phone: "",
    email: "",
    // university: "",
    // test: "",
  });

  // const [showUniversityDropdown, setShowUniversityDropdown] = useState(false);

  if (!showModal) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "phone") {
      setPhoneError(false)
      let formattedValue = value.replace(/\D/g, "");
  
      if (value.endsWith("-")) {
        formattedValue = formattedValue.slice(0, -1);
      }
      // Format as 03XX-XXXXXXX
      if (formattedValue.startsWith("03") ) {
        if (formattedValue.length >= 4 && formattedValue.length <= 7) {
          formattedValue = `${formattedValue.slice(0, 4)}-${formattedValue.slice(4)}`;
        } else if (formattedValue.length > 4) {
          formattedValue = `${formattedValue.slice(0, 4)}-${formattedValue.slice(4, 11)}`;
        }
      }
      
      const isValidPhone = /^(03\d{2})-\d{7}$/.test(formattedValue);
      setPhoneError(!isValidPhone);
  
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
  
      return;
    }
  
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  
    setMissingFields((prev) => prev.filter((field) => field !== name));
  };
  
  

  const handleShowModal = () => {
    setShowModal(!showModal); 
    // setIsChecked(false);
    setPhoneError(false);
    setMissingFields([]);
    setFormData({
      fullName: "",
      city: "",
      phone: "",
      email: "",
      // university: "",
    });
    // setShowUniversityDropdown(false);
  };

  // const handleDropdownSelect = (field, value) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }));
  //   field === "university" && setShowUniversityDropdown(false);
  //   setMissingFields((prev) => prev.filter((f) => f !== field));
  // };

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ["fullName", "city", "phone",];
    const emptyFields = requiredFields.filter((field) => !formData[field]);
    
    if (emptyFields.length > 0 || phoneError) {
      setMissingFields(emptyFields);
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setPopup({
          show: true,
          type: "success",
          message: data.message,
          timeout: 3000,
        });
        setFormData({
          fullName: "",
          city: "",
          phone: "",
          email: "",
          // university: "",
          // test: "",
        });
        setShowModal(false);
      } else {
        throw new Error(data.message || "Failed to submit form");
      }
    } catch (err) {
      setPopup({
        show: true,
        type: "error",
        message: "Failed to submit, Try Later",
        timeout: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="modal-content-popup">
        <div className="bg-FFFFFF relative border-radius-20 w-658">
          <span
            className="absolute pointer"
            style={{ right: "0", padding: "20px" }}
            onClick={handleShowModal}
          >
            <Image
              src="/Icons/cross.svg"
              width={27}
              height={27}
              alt="Cross Close Icon"
            />
          </span>

          <form onSubmit={handleSubmit} className="modal-padding">
            <div className="text-center mb-40">
              <p className="text-24 text-3980F3 mb-0">Enrolment</p>
              <span className="text-14">Enter details to get enrolled</span>
            </div>

            <div className="row">
              <div className="col-12 col-sm-6 mobile-mb-10 pr-0-imp mobile-pr-0-imp">
                <input
                  // required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name*"
                  className={`input-height-54 grey-placeholder full-width pxy-25-15 border-radius-6  ${
                    missingFields.includes("fullName") ? "border-red" : "border-D7D7D7"
                  }`}
                />
              </div>
              <div className="col-12 col-sm-6 mb-10 ">
                <input
                  // required
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City*"
                  className={`input-height-54 grey-placeholder full-width pxy-25-15 border-radius-6 pr-0-imp ${
                    missingFields.includes("city") ? "border-red" : "border-D7D7D7"
                  }`}
                />
              </div>
              <div className="col-12 col-sm-6 mb-10 pr-0-imp mobile-pr-0-imp" >
                <input
                  // required
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number*"
                  className={`input-height-54 grey-placeholder full-width pxy-25-15 border-radius-6 ${
                    phoneError || missingFields.includes("phone") ? "border-red" : "border-D7D7D7"
                  }`}
                />
              </div>
              <div className="col-12 col-sm-6 mobile-mb-10 ">
                <input
                //  required
                 type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address (optional"
                  className={`input-height-54 full-width grey-placeholder pxy-25-15 border-radius-6 border-D7D7D7`}
                />
              </div>

              {/* <div className="col-12 mb-10 ">
                <div
                  className={`input-height-54 full-width pxy-25-15 border-radius-6 relative dropdown-field ${
                    missingFields.includes("university") ? "border-red" : "border-D7D7D7"
                  } ${formData.university ? "" : "text-999"}`}
                  onClick={() => setShowUniversityDropdown(!showUniversityDropdown)}
                >
                  {formData.university || "University*"}
                  <Image
                    src="/Icons/SelectCustomArrow.svg"
                    width={14}
                    height={14}
                    alt="Custom arrow"
                    className="custom-arrow"
                  />
               
                  {showUniversityDropdown && (
                    <div className="dropdown-options">
                      {universitiesName.map((university) => (
                        <div
                          key={university}
                          className="dropdown-option"
                          onClick={() => handleDropdownSelect("university", university)}
                        >
                          {university}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div> */}
            </div>

            {/* <div className="mt-20">
              <label className="custom-checkbox text-14 font-400">
                <input
                  type="checkbox"
                  className="mr-8"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                I agree to the&nbsp;
                <span className="text-0378A6">Terms of Services</span>
                &nbsp;and&nbsp;
                <span className="text-0378A6">Privacy Policy</span>.
              </label>
            </div> */}

            <div className="mt-28 pb-24">
              <button
                type="submit"
                className={`bg-gradient-modal full-width pxy-16-10 text-FFFFFF border-none border-radius-8 `}
                disabled={isLoading}
              >
                {isLoading ? "..." : "Done"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="modal-overlay" onClick={handleShowModal}></div>
    </>
  );
};

export default EnrolmentPopUp;
