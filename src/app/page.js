

import HeroSection from "@/components/HeroSection";
import Universities from "@/components/Universities";
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  return (
    <>

      <HeroSection/>
      <Universities/>

      {/* About Access Ed */}
      <div className="py-100">
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex align-items-center pxy-10-6 mb-30 border-radius-20 box-shadow-accessEd bg-FFFFFF ">
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
            <p className="text-34">
              A supportive and scaffolded <br />
              <span className="text-3980F3"> assessment experience </span>.
            </p>
            <p className="text-7B7B7B text-16">
              Evaluate Your Professors and Enhance the Academic Experience
            </p>
          </div>
          <div className="relative">
            <Image
              src="/BtnLeftImage.svg"
              width={90}
              height={90}
              alt="Decorative element"
              className="absolute"
              style={{ top: "-65px", left: "-60px" }}
            />

            <Image
              src="/BtnRightImage.svg"
              width={90}
              height={90}
              alt="Decorative element"
              className="absolute"
              style={{ top: "-65px", right: "-60px" }}
            />
            <div className="about-image-width border-radius-10 opacity-75 ">
              <video className="full-width"  autoPlay muted playsInline>
                <source src="/DemoVideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Fast Ready */}
        <div>
          <div className=" py-100">
            <div className="row">
              <div className="col-6 pxy-100">
                <p className="text-16 font-600 text-3980F3">FAST READY</p>
                <h2 className="text-34 font-poppins">
                  Master your admission test with{" "}
                  <span className="text-3980F3">speed</span> and{" "}
                  <span className="text-3980F3">confidence</span>.
                </h2>
                <p className="text-7B7B7B text-16 font-400 ">
                  Lorem ipsum dolor sit amet consectetur. Duis odio id mauris
                  amet tempus at id. Sed ut amet viverra rhoncus sollicitudin
                  mauris. Amet egestas viverra sem iaculis. Accumsan eleifend
                  rhoncus semper tellus facilisi augue commodo turpis urna. Nunc
                  facilisis quam facilisi consequat lorem. Parturient a lacus
                  amet ullamcorper sed. Suspendisse fermentum semper congue
                  ornare. Dolor urna venenatis mattis mattis aliquam fermentum
                  vitae.
                </p>
              </div>
              <div className="col-6 pl-100-imp">
                <Image
                  src="/FastReadyImage.svg"
                  width={550}
                  height={500}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Student Success */}
        <div className="bg-F5F9FD">
          <div className=" py-100">
            <div className="row">
              <div className="col-6 pl-100-imp">
                <Image
                  src="/StudentSuccessImage.svg"
                  width={550}
                  height={500}
                  alt=""
                />
              </div>
              <div className="col-6 pxy-100">
                <p className="text-16 font-600 text-3980F3">STUDENT SUCCESS</p>
                <h2 className="text-34 font-poppins">
                  Empowering students for a future of{" "}
                  <span className="text-3980F3">limitless success</span>.
                </h2>
                <p className="text-7B7B7B text-16 font-400 ">
                  Lorem ipsum dolor sit amet consectetur. Duis odio id mauris
                  amet tempus at id. Sed ut amet viverra rhoncus sollicitudin
                  mauris. Amet egestas viverra sem iaculis. Accumsan eleifend
                  rhoncus semper tellus facilisi augue commodo turpis urna. Nunc
                  facilisis quam facilisi consequat lorem. Parturient a lacus
                  amet ullamcorper sed. Suspendisse fermentum semper congue
                  ornare. Dolor urna venenatis mattis mattis aliquam fermentum
                  vitae.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Online Assessment */}

        <div>
          <div className=" py-100">
            <div className="row">
              <div className="col-6 pxy-100">
                <p className="text-16 font-600 text-3980F3">
                  ONLINE ASSESSMENT
                </p>
                <h2 className="text-34 font-poppins">
                  Master your admission test with{" "}
                  <span className="text-3980F3">speed</span> and{" "}
                  <span className="text-3980F3">confidence</span>.
                </h2>
                <p className="text-7B7B7B text-16 font-400 ">
                  Lorem ipsum dolor sit amet consectetur. Duis odio id mauris
                  amet tempus at id. Sed ut amet viverra rhoncus sollicitudin
                  mauris. Amet egestas viverra sem iaculis. Accumsan eleifend
                  rhoncus semper tellus facilisi augue commodo turpis urna. Nunc
                  facilisis quam facilisi consequat lorem. Parturient a lacus
                  amet ullamcorper sed. Suspendisse fermentum semper congue
                  ornare. Dolor urna venenatis mattis mattis aliquam fermentum
                  vitae.
                </p>
              </div>
              <div className="col-6 pl-100-imp">
                <Image
                  src="/OnlineAssessmentImage.svg"
                  width={550}
                  height={500}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/*JOin us button  */}
        <div className="pb-100 d-flex justify-content-center">
          <button className="pxy-18-110 text-16 border-none border-radius-10 bg-000000 text-FFFFFF btn-hover">
            Join us
          </button>
        </div>
      </div>

    
    </>
  );
}
