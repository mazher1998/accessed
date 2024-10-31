

import HeroSection from "@/components/HeroSection";
import JoinUsBtn from "@/components/JoinUsBtn";
import Universities from "@/components/Universities";

import Image from "next/image";
import Link from "next/link";


export default function Home() {

  return (
    <>

      <HeroSection/>
      <Universities/>

      {/* About Access Ed */}
      <div className="py-100 py-50">
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center pxy-12-6 mb-30 border-radius-20 box-shadow-accessEd bg-FFFFFF ">
            <Image
              src="/stars.svg"
              width={20}
              height={20}
              alt=""
              className="mr-8"
            />
            <span className="text-16 text-4B5162 opacity-75">
              About AccessEd
            </span>
          </div>
          <div className="text-center mb-123">
            <p className="text-34 mobile-text-24">
              A <span className="text-3980F3"> Supportive</span> & <span className="text-3980F3">Scaffolded</span> <br className="mobile-display-none" />
               assessment experience.
            </p>
            <p className="text-7B7B7B text-16 mobile-text-12">
              Evaluate Your Professors and Enhance the Academic Experience
            </p>
          </div>
          <div className="relative">
            <Image
              src="/BtnLeftImageBlue.svg"
              width={90}
              height={90}
              alt="Decorative element"
              className="absolute about-decorative-width about-decorative-posit-left"
              // style={{ top: "-65px", left: "-60px" }}
            />

            <Image
              src="/BtnRightImageBlue.svg"
              width={90}
              height={90}
              alt="Decorative element"
              className="absolute about-decorative-width about-decorative-posit-right"
              // style={{ top: "-65px", right: "-60px" }}
            />
            <div className="text-center ">
              <video className="demovideo"  autoPlay muted playsInline loop >
                <source src="./Videos/DemoVideo.mp4" type="video/mp4" />
              </video>
            </div>

          </div>
        </div>
      </div>

      <div className="">
        {/* Fast Ready */}
        <div className="centered-container">
          <div className=" py-100 py-50">
            <div className="row align-items-center mr-0-imp">
              <div className="col-12 col-sm-6 pxy-100 ">
                <p className="text-16 font-400 text-3980F3 opacity-08 mobile-text-12">FAST READY</p>
                <h2 className="text-34 mobile-text-24 font-poppins">
                <span className="text-3980F3"> Conquer </span> your admission test with Precision and Confidence.
                </h2>
                <p className="text-7B7B7B text-16 mobile-text-12 font-400 ">
                AccessEd provides a comprehensive approach to help you excel in your admission tests. With expertly designed courses and practice materials, we focus on building your speed and accuracy. Whether you&apos;re aiming for business or computer science programs, our platform ensures you&apos;re well-prepared for every aspect of the exam, so you can face test day with confidence.
                </p>
                <div className="line">
                    {/* <div className="dot"></div> */}
                  </div>
              </div>
              <div className="col-12 col-sm-6 pl-100-imp mobile-pl-0-imp pr-0-imp">
              <video className="width-600"  autoPlay muted playsInline loop >
                <source src="/Videos/FastReady.mp4" type="video/mp4" />
              </video>
              
              </div>
            </div>
          </div>
        </div>

        {/* Student Success */}
        <div className="bg-F5F9FD">
          <div className="centered-container">
          <div className=" py-100 py-50">
            <div className="row align-items-center mr-0-imp">
              <div className="col-12 col-sm-6 pl-100-imp mobile-pl-0-imp">
              <video className="width-600"  autoPlay muted playsInline loop>
                <source src="./Videos/OnlineAssessment.mp4" type="video/mp4" />
              </video>
              </div>
              <div className="col-12 col-sm-6 pxy-100">
                <p className="text-16 font-400 text-3980F3 opacity-08 mobile-text-12">Online Assessment</p>
                <h2 className="text-34 font-poppins mobile-text-24">
                <span className="text-3980F3"> Unlock</span> your Potential and Ace your admission tests.
                </h2>
                <p className="text-7B7B7B text-16 font-400 mobile-text-12">
                At AccessEd, we believe in nurturing your skills to not only succeed in admission tests but to thrive in your academic and professional journey. Our platform offers a well-rounded learning experience, equipping you with the knowledge, strategies, and confidence needed to overcome challenges. By mastering key concepts and building a strong foundation, you&apos;re not just preparing for a test—you&apos;re unlocking a future filled with endless opportunities.
                </p>
                <div className="line">
                    {/* <div className="dot"></div> */}
                  </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Student Success */}

        <div className="centered-container">
          <div className=" py-100 py-50">
            <div className="row align-items-center mr-0-imp">
              <div className="col-12 col-sm-6 pxy-100">
                <p className="text-16 font-400 text-3980F3 opacity-08 mobile-text-12">
                Student Success
                </p>
                <h2 className="text-34 font-poppins mobile-text-24">
                <span className="text-3980F3 ">Achieve </span> Excellence and take the next step toward your dreams.
                </h2>
                <p className="text-7B7B7B text-16 font-400 mobile-text-12">
                AccessEd is your trusted partner in navigating the challenges of admission tests. Our comprehensive learning resources are designed to sharpen your skills, boost your confidence, and help you achieve your academic goals. With targeted practice and expert guidance, you&apos;ll be ready to tackle the toughest questions and secure your spot in top business and computer science programs. Success is within your reach, and we&apos;re here to help you grasp it.
                </p>

                  <div className="line">
                    {/* <div className="dot"></div> */}
                  </div>

                <JoinUsBtn/>
              </div>
              <div className="col-12 col-sm-6 pl-100-imp mobile-pl-0-imp pr-0-imp">
              <video className="width-600"   autoPlay muted playsInline loop>
                <source src="./Videos/StudentSuccess.mp4" type="video/mp4" />
              </video>
              </div>
            </div>
          </div>
        </div>
       
      </div>

    
    </>
  );
}
