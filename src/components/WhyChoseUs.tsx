"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: "Live Feedback Sessions:",
      description:
        "Receive personalized guidance and constructive feedback from our team of expert instructors during live feedback sessions. Whether you're perfecting a difficult passage or refining your technique, our instructors are dedicated to helping you reach your full potential in real-time.",
    },
    {
      title: "Flexible Learning Options:",
      description:
        "Tailor your learning experience to fit your schedule and preferences with our flexible learning options. Choose from in-person classes, virtual lessons, or a hybrid approach to suit your individual needs and lifestyle.",
    },
    {
      title: "State-of-the-Art Practice Facilities:",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
  ];
  
function WhyChoseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChoseUs