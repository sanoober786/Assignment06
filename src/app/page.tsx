import React from "react";
import Header from "./component/Header";
import Section1 from "./component/section1";
import ExploreCourses from "./component/section2";
import Achievement from "./component/Achievement";
import Courses from "./component/Courses";
import AboutUs from "./component/AboutUs";
import Testimonial from "./component/Testimonial";
import Footer from "./component/Footer";

function Home () {
  return (
   <div>
        <Header/> 
        <Section1/>
        <ExploreCourses/>
        <Achievement/>
        <Courses/>
        <AboutUs/>
        <Testimonial/>
        <Footer/>
   </div>
  )
}
export default Home;
