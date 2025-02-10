import React, { useRef } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Outlet } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

const layout = () => {
  // const box=useRef();
  // useGSAP(() => {
  //   if (!box.current) return;

  //   gsap.to(box.current, {
  //     scrollTrigger: {
  //       trigger: box.current, // Correct reference
  //       start: "top top",
  //       pin: true,
  //       pinSpacing: false,
  //     },
  //   });
  // }, []);
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default layout;
