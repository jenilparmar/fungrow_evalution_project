import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectCategory() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".trig div", {
      y: 20,
      scale: 0.8,
      duration: 1,
      stagger: 0.1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".trig",

        start: "top 70%",

      },
    });
  });
  return (
    <>
      <div className="trig bg-gray-900 w-screen  overflow-x-hidden relative  top-20 gap-2 flex flex-col">
        <div className="text-3xl text-white font-semibold self-center p-3">
          Project Categories
        </div>
        <div className="move flex w-fit self-center h-20 p-2 flex-row-reverse ">
          <div className="border-2 rounded-md w-24 self-center h-20 border-green-600 mx-2 flex justify-center flex-col">
            <div className="text-sm font-semibold text-center text-white text-nowrap p-1">
              Social media <br /> marketing
            </div>
          </div>
          <div className="border-2 rounded-md w-24 self-center h-20 border-green-600 mx-2 flex justify-center flex-col">
            <div className="text-sm font-semibold text-center text-white text-nowrap p-1">
              Video
              <br />
               Creation
            </div>
          </div>
          <div className="border-2 rounded-md w-24 self-center h-20 border-green-600 mx-2 flex justify-center flex-col">
            <div className="text-sm font-semibold text-center text-white text-nowrap p-1">
              Website
              <br />
               Design
            </div>
          </div>
        </div>
        <div className="move flex w-fit self-center h-20 justify-center p-2 flex-row-reverse ">
          <div className="border-2 rounded-md w-24 self-center h-20 border-green-600 mx-2 flex justify-center flex-col">
            <div className="text-sm font-semibold text-center text-white text-nowrap p-1">
             Influenser<br /> marketing
            </div>
          </div>
          <div className="border-2 rounded-md w-24 self-center h-20 border-green-600 mx-2 flex justify-center flex-col">
            <div className="text-sm font-semibold text-center text-white text-nowrap p-1">
             Mobile App <br />Design
            </div>
          </div>
          <div className="border-2 rounded-md w-24 self-center h-20 border-green-600 mx-2 flex justify-center flex-col">
            <div className="text-sm font-semibold text-center text-white text-nowrap p-1">
             Campus<br /> Ambassador
            </div>
          </div>
        </div>
        <div className="move flex w-fit self-center h-20 justify-center p-2 flex-row-reverse ">
          <div className="border-2 rounded-md w-24 self-center h-20 border-green-600 mx-2 flex justify-center flex-col">
            <div className="text-sm font-semibold text-center text-white text-nowrap p-1">
             Research<br /> Survey
            </div>
          </div>
          <div className="border-2 rounded-md w-24 self-center h-20 border-green-600 mx-2 flex justify-center flex-col">
            <div className="text-sm font-semibold text-center text-white text-nowrap p-1">
              Testing
            </div>
          </div>
          <div className="border-2 rounded-md w-24 self-center h-20 border-green-600 mx-2 flex justify-center flex-col">
            <div className="text-sm font-semibold text-center text-white text-nowrap p-1">
              Data <br /> Entry
            </div>
          </div>
        </div>
        <div className="move flex w-fit self-center h-20 justify-center p-2 flex-row-reverse ">
          <div className="border-2 rounded-md w-24 self-center h-20 border-green-600 mx-2 flex justify-center flex-col">
            <div className="text-sm font-semibold text-center text-white text-nowrap p-1">
            Voice <br /> Over
            </div>
          </div>
          <div className="border-2 rounded-md w-24 self-center h-20 border-green-600 mx-2 flex justify-center flex-col">
            <div className="text-sm font-semibold text-center text-white text-nowrap p-1">
             Content <br /> Writing
            </div>
          </div>
          <div className="border-2 rounded-md w-24 self-center h-20 border-green-600 mx-2 flex justify-center flex-col">
            <div className="text-sm font-semibold text-center text-white text-nowrap p-1">
              Graphic  <br /> Design
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
