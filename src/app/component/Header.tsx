import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return( 
    <header className="h-[72px] w-[1280px] flex flex-col">
        <div className="px-[62px] mr-[64x] flex sm:flex-row flex-col bg-[#F7F7F7] h-[54x] sm:justify-between justify-center items-center mb-[16px] md:flex">
      <div className="text-[14px] flex font-roboto py-[12px] font-normal ">
          <p className="tracking-tighter border-solid border-[#676767] border-r-[1px] w-[205px] text-[14px] py-[4.5px] pr-[16px] leading-[21px]">Phone Number: 956 742 455 678</p>
          <p className="leading-[21px] py-[4.5px] w-[149px] ml-[16px]">Email:info@ddsgnr.com</p>
      </div>
      <div className="flex w-[132px] h-[24px] ml-[652px] mr-[64px] my-[15px] items-center">
        <div className="flex justify-between h-[24px] w-[24px] items-center mr-[12px]"><Image src={'/icon4.png'} alt="Facebook icon" width={24} height={24}/></div>
        <div className="flex justify-center h-[24px] w-[24px] items-center mr-[12px]"><Image src={'/icon3.png'} alt="Instagram icon" width={24} height={24}/></div>
        <div className="flex justify-center h-[24px] w-[24px] items-center mr-[12px]"><Image src={'/icon2.png'} alt="Twitter icon" width={24} height={24}/></div>
        <div className="flex justify-center h-[24px] w-[24px] items-center mr-[12px]"><Image src={'/icon1.png'} alt="Linkedin icon" width={24} height={24}/></div>
      </div>
      </div>
      {/* For Navbar */}

      <div className="w-full h-[72px] bg-[#f7f7f7] py-[14px]">
         <div className="w-[1152px] h[44px]  mx-[64px]  flex xl:flex-row flex-col items-center justify-between gap-2"><div className="w-[130.6px] h-[41px] py-[6.81px]">
          <Image src={'/nav.png'} alt="header logo" width={1152} height={44}/>
         </div>
         <div className="lg:w-[910px] md:w-[750px] h[44px] ml[111.4px] flex bg-white lg:gap-[32px] gap-[8px] md:flex-row flex-col items-center'"><nav className="flex font-roboto text-[16px] lg:gap-[32px] sm:gap-[5px]"><li className="border-solid border-black border-b-[1px] py-[10px] sm:px-[10px] px-[0px] w-[64px] h-[44px] list-none  flex justify-center "><Link href='/home'>Home</Link></li>
         <li className="border-solid border-black border-b-[1px] py-[10px] sm:px-[10px] px-[0px] w-[64px] h-[44px] list-none  flex justify-center "><Link href="/courses">Courses</Link></li>
         <li className="border-solid border-black border-b-[1px] py-[10px] sm:px-[10px] px-[0px] w-[64px] h-[44px] list-none  flex justify-center "><Link href='/services'>Services</Link></li>
         <li className="border-solid border-black border-b-[1px] py-[10px] sm:px-[10px] px-[0px] w-[64px] h-[44px] list-none  flex justify-center "><Link href="/achievement">Achievement</Link></li>
         <li className="border-solid border-black border-b-[1px] py-[10px] sm:px-[10px] px-[0px] w-[64px] h-[44px] list-none  flex justify-center "><Link href="/aboutUs">AboutUs</Link></li>
         <li className="border-solid border-black border-b-[1px] py-[10px] sm:px-[10px] px-[0px] w-[64px] h-[44px] list-none  flex justify-center "><Link href="testimonial">Testimonial</Link></li>
         </nav>
         <div className="h-[40px] w-[191px] flex py-[1px]">
          <button className="w-[80px] h-[40px] rounded-[5px] border-solid border-black border-[1px]">
           Login
          </button>
          <button className="w-[95px] h-[40px] rounded-[5px] bg-black text-white ml-[16px]">Sign Up</button>
         </div>
         </div>
         </div>
      </div>
    </header>
  )
}
export default Header;