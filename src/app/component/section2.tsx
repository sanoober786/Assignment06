import React from "react";
import Image from "next/image";

const ExploreCourses = () => {
    return(
        <section className="w-[1280px] h-[1049px] md:p-8 lg:p-16 flex flex-col p-[112px] font-roboto justify-center items-center">
         <div className="w-[768px] md:w-[768px] h-[109px] hidden md:flex flex-col  mx-[256px] gap-[24px]">
            <h2 className="leading-[57.6px] text-[48px] font-bold">Explore Courses By Category</h2>
            <p className="leading-[27px] text-[18px] font-roboto md:text-lg">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
         </div>
         <div className="w-[1280] h-[636px] gap-[64px] mt-[80px] items-center flex flex-col">
            <div className="h-[132px] flex gap-[24px]">
                {/* ---01--- */}
                <div className="w-[410.67px] h-[132px] flex p-[16px] bg-[#F7F7F7] rounded-[5px] gap-[32px]">
                    <div className="w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[5px]">
                        <Image src={'/icon6.png'} alt="icon" width={100} height={100}/>
                    </div>
                    <div className="w-[246.67px] h-[57px] my-[21.5px]">
                        <p className="leading-[30px] text-[20px] font-semibold">Design & Development</p>
                        <p className="leading-[27px] text-[18px]">50+ Courses Available</p>
                    </div>
                </div>
                {/* ---02--- */}
                <div className="w-[410.67px] h-[132px] flex p-[16px] bg-[#F7F7F7] rounded-[5px] gap-[32px]">
                    <div className="w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[5px]">
                        <Image src={'/icon7.png'} alt="icon" width={100} height={100}/>
                    </div>
                    <div className="w-[246.67px] h-[57px] my-[21.5px]">
                        <p className="leading-[30px] text-[20px] font-semibold">Marketing</p>
                        <p className="leading-[27px] text-[18px]">50+ Courses Available</p>
                    </div>
                </div>
                {/* ---03--- */}
                <div className="w-[410.67px] h-[132px] flex p-[16px] bg-[#F7F7F7] rounded-[5px] gap-[32px]">
                    <div className="w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[5px]">
                        <Image src={'/icon8.png'} alt="icon" width={100} height={100}/>
                    </div>
                    <div className="w-[246.67px] h-[57px] my-[21.5px]">
                        <p className="leading-[30px] text-[20px] font-semibold">Development</p>
                        <p className="leading-[27px] text-[18px]">50+ Courses Available</p>
                    </div>
                </div>
                </div>
                <div className="h-[132px] flex gap-[24px]">
                {/* ---04--- */}
                <div className="w-[410.67px] h-[132px] flex p-[16px] bg-[#F7F7F7] rounded-[5px] gap-[32px]">
                    <div className="w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[5px]">
                        <Image src={'/icon9.png'} alt="icon" width={100} height={100}/>
                    </div>
                    <div className="w-[246.67px] h-[57px] my-[21.5px]">
                        <p className="leading-[30px] text-[20px] font-semibold">Communication</p>
                        <p className="leading-[27px] text-[18px]">50+ Courses Available</p>
                    </div>
                </div>
                {/* ---05--- */}
                <div className="w-[410.67px] h-[132px] flex p-[16px] bg-[#F7F7F7] rounded-[5px] gap-[32px]">
                    <div className="w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[5px]">
                        <Image src={'/icon10.png'} alt="icon" width={100} height={100}/>
                    </div>
                    <div className="w-[246.67px] h-[57px] my-[21.5px]">
                        <p className="leading-[30px] text-[20px] font-semibold">Digital Marketing</p>
                        <p className="leading-[27px] text-[18px]">50+ Courses Available</p>
                    </div>
                </div>
                {/* ---06--- */}
                <div className="w-[410.67px] h-[132px] flex p-[16px] bg-[#F7F7F7] rounded-[5px] gap-[32px]">
                    <div className="w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[5px]">
                        <Image src={'/icon11.png'} alt="icon" width={100} height={100}/>
                    </div>
                    <div className="w-[246.67px] h-[57px] my-[21.5px]">
                        <p className="leading-[30px] text-[20px] font-semibold">Self Development</p>
                        <p className="leading-[27px] text-[18px]">50+ Courses Available</p>
                    </div>
                </div>
                </div>
                <div className="h-[132px] flex gap-[24px]">
                {/* ---07--- */}
                <div className="w-[410.67px] h-[132px] flex p-[16px] bg-[#F7F7F7] rounded-[5px] gap-[32px]">
                    <div className="w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[5px]">
                        <Image src={'/icon12.png'} alt="icon" width={100} height={100}/>
                    </div>
                    <div className="w-[246.67px] h-[57px] my-[21.5px]">
                        <p className="leading-[30px] text-[20px] font-semibold">Business</p>
                        <p className="leading-[27px] text-[18px]">50+ Courses Available</p>
                    </div>
                </div>
                {/* ---08--- */}
                <div className="w-[410.67px] h-[132px] flex p-[16px] bg-[#F7F7F7] rounded-[5px] gap-[32px]">
                    <div className="w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[5px]">
                        <Image src={'/icon13.png'} alt="icon" width={100} height={100}/>
                    </div>
                    <div className="w-[246.67px] h-[57px] my-[21.5px]">
                        <p className="leading-[30px] text-[20px] font-semibold">Finance</p>
                        <p className="leading-[27px] text-[18px]">50+ Courses Available</p>
                    </div>
                </div>
                {/* ---09--- */}
                <div className="w-[410.67px] h-[132px] flex p-[16px] bg-[#F7F7F7] rounded-[5px] gap-[32px]">
                    <div className="w-[100px] h-[100px] bg-white flex justify-center items-center rounded-[5px]">
                        <Image src={'/icon14.png'} alt="icon" width={100} height={100}/>
                    </div>
                    <div className="w-[246.67px] h-[57px] my-[21.5px]">
                        <p className="leading-[30px] text-[20px] font-semibold">Consulting</p>
                        <p className="leading-[27px] text-[18px]">50+ Courses Available</p>
                    </div>
                </div>
            </div>
         </div>

        </section>
    )
}
export default ExploreCourses;