import React from "react";
import Image from "next/image";
const Section1 = () => {
    return(
    <section className="w-[1280px] h-[1028px] top-[141px] ">
        <main className="flex justify-between md:flex-row flex-col items-center w-[1280px] h-[900px] ">
          
            <div className="w-[640px] h-[300px] xl:pr-[60px] pl-[10px] md:w-1/2 flex flex-col gap-[24px] xl:my-[250px] xl:pl-[80px] lg:my-[170px] md:my-[14px] flex flex-row">
            <div className=" flex flex-col w-[500px] h-[212px]  gap-[24px]">
                <h1 className="text-[56px] font-bold leading-[67.2px] md:text-[48px]">Learn new skills online with ease</h1>
                <p className="text-[18px] md:text-[18px] leading-[27px] h-[54px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            </p>
            </div>
            <div className="w-[358px] h-[64px] pt-[16px] flex gap-[16px] md:justify-start">
                <button className="w-[178px] h-[48px] rounded-[5px] bg-black text-white">Start Learning Now</button>
                <button className="w-[164px] h-[48px] rounded-[5px] border-solid border-black border-[1px]">Explore Courses</button>
            </div>
            </div>
            <div className="w-[640px] h-[750px] ">
            <Image src={'/pic.png'} alt="picture" width={640} height={900} objectFit="cover" className="  rounded-md "  />
            </div>
          
           </main>
           <div className="bg-[#f7f7f7] h-[228px]  gap-[64px] justify-between w-[1280px] flex">
            <div className="w-[312px] h-[68px] py-[80px] ml-[8px]">
                <h5 className="font-bold text-[24px] leading-[33.6px] ">Trusted by 2000+ companies worldwide.</h5>
            </div>
            <div className="w-[880px] h-[56px] gap-[19.2px] xl:pl-[41.56px] flex my-[86px] py-[8.74px] justify-center">
                <Image src={'/logo1.png'} alt="1" width={880} height={56}/>
                <Image src={'/logo2.png'} alt="2" width={880} height={56}/>
                <Image src={'/logo3.png'} alt="3" width={880} height={56}/>
                <Image src={'/logo4.png'} alt="4" width={880} height={56} />
                <Image src={'/logo5.png'} alt="5" width={880} height={56} />
                <Image src={'/logo6.png'} alt="6" width={880} height={56} />
            </div>
           </div>
    </section>
   
    )
}
export default Section1;