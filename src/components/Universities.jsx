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
        <div className="py-100 px-300">
          <div className="d-flex justify-content-center">
            <div className=" pxy-12-6  border-radius-20 box-shadow-accessEd bg-FFFFFF ">
              <Image
                src="/stars.svg"
                width={20}
                height={20}
                alt=""
                className="mr-8"
              />
              <span className="text-16 text-4B5162 opacity-75 ">
                Universities
              </span>
            </div>
          </div>
          <div className="text-center mb-60">
            <p className="text-34 font-sora">
              <br />
              <span className="text-3980F3"> 50+</span> Universities
            </p>
            <p className="text-7B7B7B text-16">
              Evaluate Your Professors and Enhance the Academic Experience
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
                  key={"university" + index}
                  className={` pxy-15-12 bg-FFFFFF border-D2D5E2 border-radius-10 mb-30 ${
                    university === uni.name ? hovered : ""
                  } `}
                >
                  <Image
                    src={uni.src}
                    width={uni.width}
                    height={uni.height}
                    alt={uni.name}
                  />
                  {university !== "AIR" &&
                    university !== "GCU" &&
                    university === uni.name && (
                      <div className={`absolute bg-FFFFFF ${showTests}`}>
                        <div className={`${testsDiv} text-appear pxy-15-12`}>
                          <div className="row d-flex flex-wrap">
                            <div className="col-6">
                              <ul className="text-14 text-3980F3">
                                <li>NAT</li>
                                <li>GAT</li>
                              </ul>
                            </div>
                            <div className="col-6">
                              <ul className="text-14 text-3980F3">
                                <li>NAT</li>
                                <li>GAT</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                  {(university === "AIR" || university === "GCU") &&
                    university === uni.name && (
                      <div className={`absolute bg-FFFFFF ${showTests}`}>
                        <div className={`${testsDiv} text-appear pxy-15-12`}>
                          <div className="row d-flex flex-wrap">
                            <div className="col-6">
                              <ul className="text-14 text-3980F3">
                                <li>NAT</li>
                                <li>GAT</li>
                              </ul>
                            </div>
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
