"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CountdownTimer from "./CountDownTimer";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${isScrolled && "navbar-shadow"}`}
      style={{
        position: "sticky",
        top: "0",
        zIndex: "10",
        backgroundColor: "white",
      }}
    >
      <div className={` px-100 py-12 px-27   `}>
        <div className="d-flex justify-content-between">
          <Link className="navbar-brand" href="#">
            <Image
              src="/logo/accessedlogo.svg"
              width={168}
              height={42}
              alt="Accessed Logo"
              className="d-none d-sm-block"
            />
            <Image
              src="/logo/mobilelogo.svg"
              width={61}
              height={42}
              alt="Accessed Logo"
              className="d-block d-sm-none"
            />
          </Link>
          <div className="d-flex align-items-center ">
            {/* <p className="d-none d-sm-block text-3980F3 text-12 font-400 mb-0 mr-20" >Launching our Study Portal in </p>
            <CountdownTimer targetDate={"2024-11-16T23:59:59"} /> */}
            <Link style={{textDecoration:"none"}} className="mr-16  bg-FFFFFF border-none text-3980F3 text-16 btn-auth-hover" href="https://app.accessed.pk/login" target="_blank" rel="noopener noreferrer">Login</Link>
            <Link style={{textDecoration:"none"}} className="bg-FFFFFF border-none text-3980F3 text-16 btn-auth-hover" href="https://app.accessed.pk/signup"   target="_blank" rel="noopener noreferrer">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
