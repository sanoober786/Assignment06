import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return(
        <footer className="w-[1280px] h-[684px] flex flex-col gap-[80px] p-[80px]">
                <div className="w-[1120px] h-[524px] items-center gap-[80px] flex flex-col">
                    <div className="w-[1120px] h-[82px] items-start justify-between flex flex-row">
                        <div className="w-[500px] h-[51px]">
                            <p className="h-[27px] font-semibold text-[18px] leading-[27px]">Subscribe to our newsletter</p>
                            <p className="leading-[24px] text-[16px] h-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="w-[400px] h-[82px] flex flex-col gap-[16px]">
                            <div className="h-[48px] flex w-[400px] gap-[16px]">
                                <input type="text" placeholder="Enter your email" className="w-[256px] h-[48px] leading-[24px] border-solid border-black border-[1px] rounded-[5px] p-3 placeholder-[#505050]" />
                                <button className="h-[48px] w-[119px] text-[16px] leading-[24px] border-solid border-black border-[1px] rounded-[5px]">Subscribe</button>
                            </div>
                            <p className="leading-[18px] text-[12px]">By subscribing you agree to with our <Link href={'/#'} className="underline">Privacy Policy</Link></p>
                        </div>
                    </div>
                    <div className="h-[225px] w-[1120px] justify-between flex gap-2">
                        <div className="w-[250px] h-[40px]"><Image src={'/nav.png'} alt="logo" width={130.6} height={30.38}/></div>
                        <div className="w-[250px] h-[225px] flex flex-col gap-[16px]">
                            <p className="text-[16px] leading-[24px] font-semibold">Courses</p>
                            <p className="text-[14px] leading-[21px]">Business</p>
                            <p className="text-[14px] leading-[21px]">Development</p>
                            <p className="text-[14px] leading-[21px]">Technology</p>
                            <p className="text-[14px] leading-[21px]">Design</p>
                            <p className="text-[14px] leading-[21px]">Programming</p>
                        </div>
                        <div className="w-[250px] h-[225px] flex flex-col gap-[16px]">
                            <p className="text-[16px] leading-[24px] font-semibold">Resources</p>
                            <p className="text-[14px] leading-[21px]">Career</p>
                            <p className="text-[14px] leading-[21px]">Resume</p>
                            <p className="text-[14px] leading-[21px]">Learning</p>
                            <p className="text-[14px] leading-[21px]">Interview Preparation</p>
                            <p className="text-[14px] leading-[21px]">Jobs</p>
                        </div>
                        <div className="w-[250px] h-[225px] flex flex-col gap-[16px]">
                            <p className="text-[16px] leading-[24px] font-semibold">About Us</p>
                            <p className="text-[14px] leading-[21px]">Contact</p>
                            <p className="text-[14px] leading-[21px]">Help/Support</p>
                            <p className="text-[14px] leading-[21px]">FAQ</p>
                            <p className="text-[14px] leading-[21px]">Terms and Conditions</p>
                            <p className="text-[14px] leading-[21px]">Partners</p>
                        </div>
                        </div>
                   <div className="w-[1120px] h-[57px] border-solid border-black border-t-[2px] pt-[33px] items-end  gap-[32px]">
                    <div className="w-[1120px] h-[24px] justify-between flex">
                        <div className="w-[564px] h-[21px] flex gap-[24px]">
                            <p className="leading-[21px] text-[14px]">2023 Ddsgnr. All right reserved.</p>
                            <Link href={'/'} className="leading-[21px] text-[14px] underline">Privacy Policy</Link>
                            <Link href={'/'} className="leading-[21px] text-[14px] underline">Terms of Services</Link>
                            <Link href={'/'} className="leading-[21px] text-[14px] underline">Cookies Settings</Link>
                        
                        </div>
                        <div className="w-[132px] h-[24px] items-center flex">
                            <div className="w-[24px] h-[24px] items-center flex justify-center mr-[12]"><Image src={'/icon4.png'} alt="1" width={24} height={24}/></div>
                            <div className="w-[24px] h-[24px] items-center flex justify-center mr-[12]"><Image src={'/icon3.png'} alt="2" width={24} height={24}/></div>
                            <div className="w-[24px] h-[24px] items-center flex justify-center mr-[12]"><Image src={'/icon2.png'} alt="3" width={24} height={24}/></div>
                            <div className="w-[24px] h-[24px] items-center flex justify-center mr-[12]"><Image src={'/icon1.png'} alt="4" width={24} height={24}/></div>
                            </div>
                            </div>
                   </div>
                 </div>
        </footer>
    )
}
export default Footer;