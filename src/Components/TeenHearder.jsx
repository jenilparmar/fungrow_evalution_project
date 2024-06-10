import React, { useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function TeenHearder() {
    gsap.registerPlugin(ScrollTrigger) 
    useGSAP(()=>{
        gsap.timeline().from('.nav > div',{
            y:20,
            duration:1,
            stagger:0.1
        })
        gsap.timeline().from(".c1 > strong",{
            y:20,
            opacity:0,
            duration:0.5,
            scale:0.8
        }).from(".c1 > article",{
            y:20,
            opacity:0,
            duration:0.5,
            scale:0.8,
            stagger:0.2
        }).from(".c1 > div",{
            y:20,
            opacity:0,
            duration:0.5,
            scale:0.8,
        })
    })
  return (
    <>
      <header >
        <nav className="nav flex flex-row bg-gray-900 sm:p-10 w-screen justify-between p-2 h-14">
          <div
            className="logo w-28 h-10 self-center  bg-transparent"
            style={{
              backgroundImage: "url(https://iili.io/Jy5HdiJ.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}></div>
          <div className="flex flex-row self-center font-semibold sm:gap-10 sm:text-xl sm:font-semibold text-green-600 gap-2 text-sm">
            <div>Teenager</div>
            <div>Company</div>
          </div>
        </nav>
        <div className="c1 w-screen  bg-gray-900 flex flex-col">
          <strong className="text-5xl relative top-20 p-3 mx-5 sm:relative sm:left-7 w-40 sm:text-6xl text-white">
            Online Earning
          </strong>
          <article className="text-xl w-11/12 sm:relative sm:left-11  font-semibold text-white p-5 relative top-24 left-4">
            Genuine companies, actual projects, tangible earnings, and real
            money
          </article>
          <article className="text-xl relative top-28 w-11/12 sm:relative sm:left-11  font-semibold text-white p-5  left-4">
            Intelligent opportunities for the smart generation
          </article>

          <div className="text-green-700 text-xl font-bold sm:left-16 relative flex flex-row top-32 left-9">
           <div className="self-center">
           Get App
           </div>
            <a href="https://play.google.com/store/apps/details?id=com.wishbanc.funngro&pli=1">
            <div className="w-24 h-10 self-center bg-transparent mx-1 " style={{
                backgroundImage:"url(https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80744c238bae49b47ff4_image%2027.png)",
                backgroundSize:"contain",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat"
            }}></div></a>
            <a href="https://apps.apple.com/in/app/funngro/id1579361075"><div className="w-24 h-10 self-center bg-transparent mx-1 " style={{
                backgroundImage:"url(https://cdn.prod.website-files.com/638b48215fd2fd34538fa6bc/638c80746a8a27189ca05fb9_image%2029.png)",
                backgroundSize:"contain",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat"
            }}></div></a>
            
          </div>
        </div>
       
      </header>
    </>
  );
}
