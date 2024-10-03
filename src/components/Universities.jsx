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
        <div className="pxy-100">
          <div className="d-flex flex-wrap justify-content-center relative">
            {universities.map((uni, index) => (
              <div
                key={"university" + index}
                className="university-card relative mr-20"
                onMouseEnter={() => {
                  setHovered(" university-inside ");
                  setShowTests("tests-div");
                  setTestsDiv('display-block')
                  setUniversity(uni.name);
                }}
                onMouseLeave={() => {
                  setHovered("university-outside ");
                  setTestsDiv('display-none')
                  setShowTests("tests-div-first");
                }}
              >
                <div
                  key={"university" + index}
                  className={` pxy-15-12 bg-FFFFFF border-D2D5E2 border-radius-10 mb-30 ${university === uni.name ? hovered: ""} `}
                >
                  <Image
                    src={uni.src}
                    width={uni.width}
                    height={uni.height}
                    alt={uni.name}
                  />
                  {university === uni.name && (
                    <div className={` absolute  bg-FFFFFF  ${showTests}  `}>
                      <div className={`${testsDiv} text-appear pxy-15-12 `}>
                        <div className="d-flex justify-content-around">
                        <div>
                          <ul className="text-14 text-3980F3">
                            <li>NAT</li>
                            <li>GAT</li>
                          </ul>
                        </div>
                        <div>
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
