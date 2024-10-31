"use client";

import Image from "next/image";
import React, { useState } from "react";
import "./../styles/Universities.css";
import { universities } from "@/helper/constants";

const Universities = () => {
  const [hovered, setHovered] = useState("");
  const [showTests, setShowTests] = useState("");
  const [university, setUniversity] = useState("");
  const [testsDiv, setTestsDiv] = useState("");

  return (
    <div>
      <div className="bg-F5F9FD">
        <div className="py-100 px-300 px-27 py-50">
          <div className="d-flex justify-content-center">
            <div className="pxy-12-6 border-radius-20 box-shadow-accessEd bg-FFFFFF">
              <Image
                src="/stars.svg"
                width={20}
                height={20}
                alt=""
                className="mr-8"
              />
              <span className="text-16 text-4B5162 opacity-75">Universities</span>
            </div>
          </div>
          <div className="text-center mb-60">
            <p className="text-34 font-sora">
              <br />
              <span className="text-3980F3 mobile-text-24"> 12+ Universities and Tests</span>
            </p>
            <p className="text-7B7B7B text-16 mobile-text-12">
              Prepare for All Major University Entry Tests.
            </p>
          </div>
          <div className="d-flex flex-wrap justify-content-center relative">
            {universities.map((uni, index) => (
              <div
                key={"university" + index}
                className="university-card relative mr-20"
                onMouseEnter={() => {
                  setHovered(" university-inside ");
                  setShowTests("tests-div");
                  setTestsDiv("display-block");
                  setUniversity(uni.name);
                }}
                onMouseLeave={() => {
                  setHovered("university-outside ");
                  setTestsDiv("display-none");
                  setShowTests("tests-div-first");
                }}
              >
                <div
                  className={`pxy-15-12 bg-FFFFFF border-D2D5E2 border-radius-10 mb-30 ${
                    university === uni.name ? hovered : ""
                  }`}
                >
                  <Image
                    src={uni.src}
                    width={uni.width}
                    height={uni.height}
                    alt={uni.name}
                  />
                  {university === uni.name && (
                    <div className={`absolute bg-FFFFFF ${showTests}`}>
                      <div className={`${testsDiv} text-appear pxy-15-12`}>
                        <div className="row d-flex flex-wrap">
                          {uni.tests.map((test, testIndex) => (
                            <div className="col-6" key={`${uni.name}-test-${testIndex}`}>
                              <ul className="text-14 text-3980F3 ">
                                <li>{test}</li>
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universities;
