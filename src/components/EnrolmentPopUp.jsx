'use client'
import Image from "next/image";
import { useState } from "react";
import './../styles/EnrolmentPopUp.css'

const EnrolmentPopUp = ({ showModal, setShowModal }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    city: '',
    phone: '',
    email: '',
    university: '',
    test: ''
  });
  const [error, setError] = useState('');

  if (!showModal) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        
        setFormData({
          fullName: '',
          city: '',
          phone: '',
          email: '',
          university: '',
          test: ''
        });
       
          setShowModal(false);
      
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="modal-content-popup">
        <div className="bg-FFFFFF relative border-radius-20" style={{ width: "658px" }}>
          <span
            className="absolute pointer"
            style={{ right: "0", padding: "20px" }}
            onClick={() => setShowModal(!showModal)}
          >
            <Image src="/Icons/cross.svg" width={27} height={27} alt="Cross Close Icon" />
          </span>
          
          <form onSubmit={handleSubmit} className="modal-padding">
            <div className="text-center mb-40">
              <p className="text-24 text-3980F3 mb-0">Enrolment</p>
              <span className="text-14">Enter details to get enrolled</span>
            </div>

            <div className="row mb-60">
              <div className="col-6 pr-0-imp">
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name*"
                  className="input-height-54 grey-placeholder full-width pxy-25-15 border-radius-6 border-D7D7D7"
                />
              </div>
              <div className="col-6 mb-10">
                <input
                  required
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City*"
                  className="input-height-54 grey-placeholder full-width pxy-25-15 border-radius-6 border-D7D7D7"
                />
              </div>
              <div className="col-6 mb-10 pr-0-imp">
                <input
                  required
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone number*"
                  className="input-height-54 grey-placeholder full-width pxy-25-15 border-radius-6 border-D7D7D7"
                />
              </div>
              <div className="col-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address (optional)"
                  className="input-height-54 full-width grey-placeholder pxy-25-15 border-radius-6 border-D7D7D7"
                />
              </div>
              <div className="col-12 mb-10 relative">
                <select
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className={`input-height-54 full-width pxy-25-15 border-radius-6 border-D7D7D7 select-custom ${
                    formData.university ? "selected" : ""
                  }`}
                  required
                >
                  <option value="" disabled>University*</option>
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
                  name="test"
                  value={formData.test}
                  onChange={handleInputChange}
                  className={`input-height-54 full-width pxy-25-15 border-radius-6 border-D7D7D7 select-custom ${
                    formData.test ? "selected" : ""
                  }`}
                  required
                >
                  <option value="" disabled>Test*</option>
                  <option value="test1">Test 1</option>
                  <option value="test2">Test 2</option>
                  <option value="test3">Test 3</option>
                  <option value="test4">Test 4</option>
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
              </div>
            </div>

            <div className="mt-28 pb-24">
              <button
                type="submit"
                className="bg-gradient-modal full-width pxy-16-10 text-FFFFFF border-none border-radius-8"
                disabled={!isChecked || isLoading}
              >
                {isLoading ? 'Processing...' : 'Done'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="modal-overlay" onClick={() => setShowModal(!showModal)}></div>
    </>
  );
};

export default EnrolmentPopUp;