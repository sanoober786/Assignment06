import React from "react";
import Image from "next/image";

const Testimonial = () => {
    return(
        <section className="h-auto w-[1280px] items-start bg-[#f7f7f7] flex flex-col py-[112px] gap-[80px]">
            <div className="h-[109px] w-[560px] flex flex-col ml-[64px] gap-[24px] ">
                <h2 className="leading-[57.6px] text-[48px] font-bold">Customer testimonials</h2>
                 <p className="leading-[27px] text-[18px] font-roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="w-[1152px] h-[417.89px] flex flex-col gap-[48px] mx-[64px]">
                <div className="h-[321.89px] gap-[32px] flex flex-row items-start">
                    {/* 01 */}
                    <div className="h-[321.89px] w-[362.67px] gap-[24px] p-[32px] border-solid border-black border-[1px] flex flex-col">
                        <div className="w-[116px] h-[18.89px] flex flex-row gap-[4px]">
                           <Image src={'/star2.png'} alt="1" width={20} height={20}/>
                           <Image src={'/star2.png'} alt="2" width={20} height={20}/>
                           <Image src={'/star2.png'} alt="3" width={20} height={20}/>
                           <Image src={'/star2.png'} alt="4" width={20} height={20}/>
                           <Image src={'/star2.png'} alt="5" width={20} height={20}/>
                        </div>
                        <div className="w-[298.67px] h-[215px] gap-[24px] flex flex-col">
                            <p className="leading-[27px] text-[18px] font-roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                            <div className="w-[254px] h-[56px] gap-[20px] flex flex-row">
                                <Image src={'/img3.png'} alt="pic" width={56} height={56} className="rounded-full"/>
                                <div className="w-[139px] h-[48px] ">
                                    <p className="leading-[24px] text-[16px] h-[24px] font-semibold">James Nduku</p>
                                     <p className="leading-[24px] text-[16px] h-[24px]">Software Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 02 */}
                    <div className="h-[321.89px] w-[362.67px] gap-[24px] p-[32px] border-solid border-black border-[1px] flex flex-col">
                        <div className="w-[116px] h-[18.89px] flex flex-row gap-[4px]">
                           <Image src={'/star2.png'} alt="1" width={20} height={20}/>
                           <Image src={'/star2.png'} alt="2" width={20} height={20}/>
                           <Image src={'/star2.png'} alt="3" width={20} height={20}/>
                           <Image src={'/star2.png'} alt="4" width={20} height={20}/>
                           <Image src={'/star2.png'} alt="5" width={20} height={20}/>
                        </div>
                        <div className="w-[298.67px] h-[215px] gap-[24px] flex flex-col">
                            <p className="leading-[27px] text-[18px] font-roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                            <div className="w-[254px] h-[56px] gap-[20px] flex flex-row">
                                <Image src={'/img1.png'} alt="pic" width={56} height={56} className="rounded-full"/>
                                <div className="w-[139px] h-[48px] ">
                                    <p className="leading-[24px] text-[16px] h-[24px] font-semibold">Erick Kipkemboi</p>
                                     <p className="leading-[24px] text-[16px] h-[24px]">Scrum Master</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 03 */}
                    <div className="h-[321.89px] w-[362.67px] gap-[24px] p-[32px] border-solid border-black border-[1px] flex flex-col">
                        <div className="w-[116px] h-[18.89px] flex flex-row gap-[4px]">
                           <Image src={'/star2.png'} alt="1" width={20} height={20}/>
                           <Image src={'/star2.png'} alt="2" width={20} height={20}/>
                           <Image src={'/star2.png'} alt="3" width={20} height={20}/>
                           <Image src={'/star2.png'} alt="4" width={20} height={20}/>
                           <Image src={'/star2.png'} alt="5" width={20} height={20}/>
                        </div>
                        <div className="w-[298.67px] h-[215px] gap-[24px] flex flex-col">
                            <p className="leading-[27px] text-[18px] font-roboto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                            <div className="w-[254px] h-[56px] gap-[20px] flex flex-row">
                                <Image src={'/img2.png'} alt="pic" width={56} height={56} className="rounded-full"/>
                                <div className="w-[139px] h-[48px] ">
                                    <p className="leading-[24px] text-[16px] h-[24px] font-semibold">Stephen Kerubo</p>
                                     <p className="leading-[24px] text-[16px] h-[24px]">UI/UX Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[48px] xl:w-[1152px] w-[760px] flex justify-between">
                    <div className="h-[8px] w-[72px] flex gap-[8px] my-5">
                        <div className="h-2 w-2 rounded-full bg-black"></div>
                        <div className="h-2 w-2 rounded-full bg-[#8D8D8D]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#8D8D8D]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#8D8D8D]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#8D8D8D]"></div>
                    </div>
                    <div className="w-[111px] h-[48px] flex gap-[15px]">
                        <button className="w-[48px] h-[48px]"><Image src={'/arrow1.png'} alt="arrow" width={48} height={48}/></button>
                        <button className="w-[48px] h-[48px]"><Image src={'/arrow2.png'} alt="arrow" width={48} height={48}/></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonial