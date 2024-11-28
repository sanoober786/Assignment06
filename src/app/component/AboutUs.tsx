import React from "react";
import Image from "next/image";
const AboutUs =()=> {
   return(
    <section className="bg-[#f7f7f7] flex flex-col gap-[80px] w-[1280px] h-[895px] py-[112px] items-center text-center">
    <div className="flex flex-col w-full w-[768px] h-[109px] gap-[16px] ">
        <h2 className="leading-[57.6px] text-[48px]  font-bold text-center ">Our team</h2>
        <p className="leading-[27px] text-[18px] text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className="w-[1280] h-[209px] flex flex-row gap-[48px] items-center justify-center xl:w-[1060px] md:w-[760px] sm:w-[640px] xl:gap-[48px]  ">
        {/* Image 01 */}
 
         <div className="w-[380px] h-[209px] flex flex-col gap-[24px] items-center ">
            <div className="w-[80px] h-[80px] mx-[157.33px]">
                <Image src={'/img1.png'} alt="image1" height={80} width={80}/>
            </div>
            <div className="w-[394.67px] h-[57px]">
                <p className="text-[20px] font-semibold text-center leading-[30px]">James Nduku</p>
                <p className="leading-[24px] text-[18px] text-center">Marketing Coordinator</p>
            </div>
          <div className="w-[100px] h-[24px] mx-[147.33px] flex gap-[14px]">
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon1.png'} alt="1" width={24} height={24}/></div>
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon2.png'} alt="2" width={24} height={24}/></div>
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon5.png'} alt="3" width={24} height={24}/></div>
          </div>
         </div>
         {/* Image 02 */}
         
         <div className="w-[380px] h-[209px] flex flex-col gap-[24px] items-center ">
            <div className="w-[80px] h-[80px] mx-[157.33px]">
                <Image src={'/img2.png'} alt="image1" height={80} width={80}/>
            </div>
            <div className="w-[394.67px] h-[57px]">
                <p className="text-[20px] font-semibold text-center leading-[30px]">Joseph Munyambu</p>
                <p className="leading-[24px] text-[18px] text-center">Nursing Assistant</p>
            </div>
          <div className="w-[100px] h-[24px] mx-[147.33px] flex gap-[14px]">
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon1.png'} alt="1" width={24} height={24}/></div>
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon2.png'} alt="2" width={24} height={24}/></div>
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon5.png'} alt="3" width={24} height={24}/></div>
          </div>
         </div>
         {/* Image 03 */}
         <div className="w-[380px] h-[209px] flex flex-col gap-[24px] items-center ">
            <div className="w-[80px] h-[80px] mx-[157.33px]">
                <Image src={'/img3.png'} alt="image1" height={80} width={80}/>
            </div>
            <div className="w-[394.67px] h-[57px]">
                <p className="text-[20px] font-semibold text-center leading-[30px]">Joseph Ngumbau</p>
                <p className="leading-[24px] text-[18px] text-center">Medical Assistant</p>
            </div>
          <div className="w-[100px] h-[24px] mx-[147.33px] flex gap-[14px]">
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon1.png'} alt="1" width={24} height={24}/></div>
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon2.png'} alt="2" width={24} height={24}/></div>
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon5.png'} alt="3" width={24} height={24}/></div>
          </div>
         </div>
         </div>
         <div className="w-[1280px] h-[209px] gap-[48px] flex flex-row items-center justify-center xl:w-[1060px] md:w-[760px] sm:w-[640px] xl:gap-[48px]">
         {/* Image 04 */}
         <div className="w-[380px] h-[209px] flex flex-col gap-[24px] items-center ">
            <div className="w-[80px] h-[80px] mx-[157.33px]">
                <Image src={'/img4.png'} alt="image1" height={80} width={80}/>
            </div>
            <div className="w-[394.67px] h-[57px]">
                <p className="text-[20px] font-semibold text-center leading-[30px]">Erick Kipkemboi</p>
                <p className="leading-[24px] text-[18px] text-center">Web Designer</p>
            </div>
          <div className="w-[100px] h-[24px] mx-[147.33px] flex gap-[14px]">
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon1.png'} alt="1" width={24} height={24}/></div>
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon2.png'} alt="2" width={24} height={24}/></div>
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon5.png'} alt="3" width={24} height={24}/></div>
          </div>
         </div>

         {/* Image 05 */}
         <div className="w-[380px] h-[209px] flex flex-col gap-[24px] items-center ">
            <div className="w-[80px] h-[80px] mx-[157.33px]">
                <Image src={'/img5.png'} alt="image1" height={80} width={80}/>
            </div>
            <div className="w-[394.67px] h-[57px]">
                <p className="text-[20px] font-semibold text-center leading-[30px]">Stephen Kerubo</p>
                <p className="leading-[24px] text-[18px] text-center">President of Sales</p>
            </div>
          <div className="w-[100px] h-[24px] mx-[147.33px] flex gap-[14px]">
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon1.png'} alt="1" width={24} height={24}/></div>
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon2.png'} alt="2" width={24} height={24}/></div>
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon5.png'} alt="3" width={24} height={24}/></div>
          </div>
         </div>
         {/* Image 06 */}
         <div className="w-[380px] h-[209px] flex flex-col  gap-[24px] items-center ">
            <div className="w-[80px] h-[80px] mx-[157.33px]">
                <Image src={'/img6.png'} alt="image1" height={80} width={80}/>
            </div>
            <div className="w-[394.67px] h-[57px]">
                <p className="text-[20px] font-semibold text-center leading-[30px]">John Leboo</p>
                <p className="leading-[24px] text-[18px] text-center">Dog Trainer</p>
            </div>
          <div className="w-[100px] h-[24px] mx-[147.33px] flex gap-[14px]">
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon1.png'} alt="1" width={24} height={24}/></div>
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon2.png'} alt="2" width={24} height={24}/></div>
            <div className="w-[24px] h-[24px] flex items-center justify-center"><Image src={'/icon5.png'} alt="3" width={24} height={24}/></div>
          </div>
         </div>
         </div>
    </section>
   )
}
export default AboutUs;