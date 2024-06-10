import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCategory from "./ProjectCategory";
export default function TeenMain() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "main",
          scroller: "body",
          // markers: true,
          start: "top 80%",
        },
      })
      .to(".shadow1", {
        scale: 1.01,
        y: -20,
        duration: 2,
        opacity: 1,
      })

      .from(".head", {
        y: 20,
        duration: 0.5,
        scale: 0.7,
        opacity: 0,
      })
      .from(".c3 div", {
        y:20,
        stagger: 0.1,
        duration: 1,
        opacity: 0,
        scale: 0.8,

      });
  });
  return (
    <>
      <main className="bg-gray-900">
        <div className="c2 bg-gray-900 relative top-11/12 flex flex-col w-screen 0 h-h-screen">
          <strong className="text-2xl text-white p-3 relative left-1 sm:left-8 font-bold">
            We are with
          </strong>
          <div className="shadow1 opacity-0 rounded-lg border-white bg-gray-800 border-2 w-11/12 h-fit p-2 self-center  sm:gap-12 relative top-7 sm:h-40 flex flex-row justify-center gap-3">
            <div className="w-220  sm:h-40 sm:w-40 flex flex-col self-center">
              <div
                className="rounded-full w-10 h-10 self-center sm:w-24 sm:h-24 relative top-2"
                style={{
                  backgroundImage:
                    "url(https://static.vecteezy.com/system/resources/previews/005/482/442/original/illustration-graphic-cartoon-character-of-company-vector.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}></div>
              <div className="text-white font-semibold text-xs  sm:text-sm  relative top-3 text-center">
                3500+ <br />
                Companies
              </div>
            </div>
            <div className="w-20 h-20  sm:h-40 sm:w-40 flex flex-col self-center">
              <div
                className="rounded-full w-10 h-10 self-center sm:w-24 sm:h-24 relative top-2"
                style={{
                  backgroundImage:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXzifb4BtlzjnaZi09sk_kqUOPvDREx2g3A&s)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}></div>
              <div className="text-white font-semibold text-xs  sm:text-sm  relative top-3 text-center">
                2000000+ <br />
                Teenlancers
              </div>
            </div>
            <div className="w-20 h-20  sm:h-40 sm:w-40 flex flex-col self-center">
              <div
                className="rounded-full w-10 h-10 self-center sm:w-24 sm:h-24 relative top-2"
                style={{
                  backgroundImage:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYa9r37UH_O6lKOxvPjZPGPXY2y6CnB915g&s)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}></div>
              <div className="text-white text-nowrap font-semibold text-xs relative top-3 text-center">
                1000+ <br />
                Live projects
              </div>
            </div>
            <div className="w-20 h-20  sm:h-40 sm:w-40 flex flex-col self-center">
              <div
                className="rounded-full w-10 h-10 self-center sm:w-24 sm:h-24 relative top-2"
                style={{
                  backgroundImage:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cZlLoB6F1DZJK5bJSEdDJgdcUDqpZWnUPQGSSn8LQPaINhtKOzB1ax81lDnwBZQkOcs&usqp=CAU)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}></div>
              <div className="text-white font-semibold text-xs  sm:text-sm  relative top-3 text-center">
                12+ <br />
                Catagories
              </div>
            </div>
          </div>
          {/* ////////////// why to choose//////////////// */}
          <div className="head w-screen text-xl self-center text-center relative top-10 font-semibold text-nowrap text-green-600">
            Why Work During Your Teen Years?
          </div>
        </div>
        <div className="c3 w-screen h-fit flex flex-col gap-6">
          <div className="profits  w-screen h-40 bg-transparent flex justify-center gap-3 flex-row">
            <div
              className="rounded-full bg-white  w-28 self-center h-28"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLWwojab1X4CjpbU8EbmkjIk5gMzf7tlZmtLL544W6PV52mGmSwANsGWqJY6aVQkKtHI&usqp=CAU)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}></div>
            <div className="flex flex-col justify-center">
              <strong className="text-white text-3xl self-left">
                First Income
              </strong>
              <article className="text-green-600 font-medium text-wrap w-40 text-sm">
                Work with real companies and Earn money
              </article>
            </div>
          </div>
          <div className="profits  w-screen h-40 bg-transparent flex justify-center gap-3 flex-row">
            <div
              className="rounded-full bg-white  w-28 self-center h-28"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/premium-vector/work-passion-motivate-inspire-employee-achieve-career-success_566886-1302.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}></div>
            <div className="flex flex-col justify-center">
              <strong className="text-white text-3xl self-left">
               Passion
              </strong>
              <article className="text-green-600 font-medium text-wrap w-40 text-sm">
              Make your passion as your profession
              </article>
            </div>
          </div>

          <div className="profits  w-screen h-40 bg-transparent flex justify-center gap-3 flex-row">
            <div
              className="rounded-full bg-white  w-28 self-center h-28"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOrYqKxEga9Hr8lzZMEu5HSPCKu6b6DSzktg&s)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}></div>
            <div className="flex flex-col justify-center">
              <strong className="text-white text-3xl self-left">
              Learning
              </strong>
              <article className="text-green-600 font-medium text-wrap w-40 text-sm">
              Experiential Learning by working on real projects
              </article>
            </div>
          </div>
          <div className="profits  w-screen h-40 bg-transparent flex justify-center gap-3 flex-row">
            <div
              className="rounded-full bg-white  w-28 self-center h-28"
              style={{
                backgroundImage:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqqNurQCVcKSoy-TlcGRJak-_iXvmwTD9Sg&s)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}></div>
            <div className="flex flex-col justify-center">
              <strong className="text-white text-3xl self-left">
                Certification
              </strong>
              <article className="text-green-600 font-medium text-wrap w-40 text-sm">
              Build your profile by getting experience certificates
              </article>
            </div>
          </div>
        </div>
        <ProjectCategory/>
      </main>
    </>
  );
}
