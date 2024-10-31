"use client";
import Image from "next/image";
import React, { useState } from "react";
import PopUp from "./ToastPop";

function Footer() {
  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
    timeout: 0,
  });
  const currentyear = new Date().getFullYear();
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (e.target.email.value) {
      setPopup({
        show: true,
        type: "success",
        message: "Successfully Subscribed",
        timeout: 3000,
      });
    }
  };

  return (
    <div>
      <PopUp props={popup} />
      <div className="bg-04448E">
        <div className="footer-spacing">
          <div className="row d-flex">
            <div className="col-12 col-sm-5 d-flex justify-content-between mobile-mb-50">
              <Image
                src="/logo/FooterLogo.svg"
                width={350}
                height={200}
                alt=""
              />
              <div className="mobile-display-none vertical-separater"></div>
            </div>

            {/* <div className="col-4 pl-80-imp d-flex justify-content-between">
                <div>
                  <p className="text-F7F7F7 font-500 text-24 ">Follow us</p>

                  <div className="mt-20">
                    <div className=" mb-20">
                      <Image
                        src="/SocialMedia/LinkedIn.svg"
                        width={16}
                        height={16}
                        alt=""
                        className="mr-16"
                      />
                      <span className="text-C8D8FF">Linkedln</span>
                    </div>
                    <div className="mb-20">
                      <Image
                        src="/SocialMedia/Instagram.svg"
                        width={16}
                        height={16}
                        alt=""
                        className="mr-16"
                      />
                      <span className="text-C8D8FF">Instagram</span>
                    </div>
                    <div>
                      <Image
                        src="/SocialMedia/Twitter.svg"
                        width={16}
                        height={16}
                        alt=""
                        className="mr-16"
                      />
                      <span className="text-C8D8FF">Twitter</span>
                    </div>
                  </div>

                  <div className="mt-40">
                    <div className=" mb-20">
                      <Image
                        src="/SocialMedia/Email.svg"
                        width={16}
                        height={16}
                        alt=""
                        className="mr-16"
                      />
                      <span className="text-C8D8FF">accessEd@gmail.com</span>
                    </div>
                    <div className="">
                      <Image
                        src="/SocialMedia/Email.svg"
                        width={16}
                        height={16}
                        alt=""
                        className="mr-16"
                      />
                      <span className="text-C8D8FF">accessEd@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="vertical-separater"></div>
                </div>
              </div> */}

            <div className="col-12 col-sm-7">
              <div className="pl-80-imp mobile-pl-0-imp">
                <h3 className="text-24 text-F7F7F7 font-500 mb-10">
                  Stay in loop
                </h3>
                <p className="text-14 text-C8D8FF mb-20">
                  Subscribe to our newsletter for our latest news and resources.
                </p>

                <form onSubmit={handleSubmit} >
                  <div className="input-wrapper">
                    <div className="icon-wrapper">
                      <Image
                        src="/SubscribeEmailIcon.svg"
                        alt="Email Icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <input
                    required
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      className="custom-email-input"
                    />
                    <button
                      type="submit"
                      className="border-FFFFFF pxy-32-12 text-FFFFFF bg-04448E border-none border-radius-8"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-100 py-20 px-27">
        <div className="separator d-none d-sm-block"></div>
        <div className="d-flex justify-content-between ">
          <div>
            <span className="text-18 text-weight-400 text-394560">
              Copyright © {currentyear} Accessed
            </span>
          </div>
          <div className="flex">
            <span className="text-18 text-weight-400 text-394560">
              All Rights Reserved{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
