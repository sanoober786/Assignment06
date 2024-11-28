import React from "react";
import Image from "next/image";

const Courses = () => {
    return (
        <section className="h-[1742px] w-[1280px] flex flex-col gap-[60px] py-[112px] items-center">
            <div className="w-[768px] h-[118px] gap-[24px] mx-[256px] flex flex-col">
                <h1 className="leading-[67.2px] text-[56px] text-center font-bold">Courses</h1>
                <p className="leading-[27px] text-[18px] text-center">Your Ultimate Guide to learning</p>
            </div>
            <div className="h-[1340px] w-[1280] flex flex-col gap-[64px] items-center ">
                <div className="w-[336px] h-[40px] flex mx-[472px]">
                    <div className="px-[16px] py-[8px] text-[16px] leading-[24px] w-[87px] border-b-[1px] border-black border-solid">Popular</div>
                    <div className="px-[16px] py-[8px] text-[16px] leading-[24px] w-[140px]">Recommended</div>
                    <div className="px-[16px] py-[8px] text-[16px] leading-[24px] w-[109px]">Best Price</div>
                </div>
                <div className="w-[1280px] h-[1132px]  flex flex-col gap-[64px] items-center">
                    <div className="h-[534px] w-full flex flex-row gap-[32px] w-[1280px] justify-center mx-[24px]">
                                  {/* 01 */}
                                  <div className="bg-[#F7F7F7] w-[416px] h-[534px] rounded-[5px] flex flex-col gap-[24px]">
                            <div className="w-[416px] h-[300px]">
                                <Image src={'/img7.png'} alt="1" height={300} width={416} />
                            </div>
                            <div className="w-[416px] h-[210px] flex flex-col gap-[8px] pl-[16px] pr-[16px] mx-[16px]">
                                <div className="flex h-[24px] ">
                                 <p className="leading-[21px] w-[326px] text-[14px] font-semibold">Design</p>
                                    <div className="w-[48px] h-[24px] flex">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={'/star.png'} alt="2" width={24} height={24} className="w-[20px] h-[20px] rounded-[1px]" /></div>
                                            <p className="w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'">5.0</p>
                                        </div>
                                    </div>
                                    <h5 className="text-[24px] font-bold leading-[33.6px]">UX/UI Design 201</h5>
                                    <p className="text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                </div>
                                <div className="w-[382px] h-[40px] flex gap-[16px] mx-[16px] pl-[16px]">
                                    <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button>
                                    <button className="w-[77px] h-[40px]">$400</button>
                                </div>
                            </div>
                         

                        {/* 02 */}
                        <div className="bg-[#F7F7F7] w-[416px] h-[534px] rounded-[5px] flex flex-col gap-[24px]">
                            <div className="w-[416px] h-[300px]">
                                <Image src={'/img8.png'} alt="2" height={300} width={416} />
                            </div>
                            <div className="w-[416px] h-[210px] flex flex-col gap-[8px] pl-[16px] mx-[16px]">
                                <div className="flex h-[24px]">
                                    <p className="leading-[21px] w-[326px] text-[14px] font-semibold">Programming</p>
                                    <div className="w-[48px] h-[24px] flex">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={'/star.png'} alt="2" width={24} height={24} className="w-[20px] h-[20px] rounded-[1px]" /></div>
                                            <p className="w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'">5.0</p>
                                        </div>
                                    </div>
                                    <h5 className="text-[24px] font-bold leading-[33.6px]">Introduction to Python</h5>
                                    <p className="text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                </div>
                                <div className="w-[382px] h-[40px] flex gap-[16px] mx-[16px] pl-[16px]">
                                    <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px] text-[16px]">Enroll Now</button>
                                    <button className="w-[77px] h-[40px]">$400</button>
                                </div>
                            </div>
                            
                     {/* 03 */}
                     <div className="bg-[#F7F7F7] w-[400px] h-[534px] rounded-[5px] flex flex-col gap-[24px]">
                            <div className="w-[416px] h-[300px]">
                                <Image src={'/img9.png'} alt="3" height={300} width={416} />
                            </div>
                            <div className="w-[416px] h-[210px] flex flex-col gap-[8px] mx-[16px] pl-[16px]">
                                <div className="flex h-[24px]">
                                    <p className="leading-[21px] w-[326px] text-[14px] font-semibold">Business</p>
                                    <div className="w-[48px] h-[24px] flex">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={'/star.png'} alt="2" width={24} height={24} className="w-[20px] h-[20px] rounded-[1px]" /></div>
                                            <p className="w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'">5.0</p>
                                        </div>
                                    </div>
                                    <h5 className="text-[24px] font-bold leading-[33.6px]">Data Analysis for Beginners</h5>
                                    <p className="text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                </div>
                                <div className="w-[382px] h-[40px] flex gap-[16px] mx-[16px] pl-[16px]">
                                    <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button>
                                    <button className="w-[77px] h-[40px]">$400</button>
                                </div>
                            </div>
                            </div>
                            <div className="w-[1280px] h-[534px] gap-[32px] justify-center flex flex-row">
                               {/* 04 */}
                               <div className="bg-[#F7F7F7] w-[416px] h-[534px] rounded-[5px] flex flex-col gap-[24px]">
                            <div className="w-[416px] h-[300px]">
                                <Image src={'/img10.png'} alt="5" height={300} width={416} />
                            </div>
                            <div className="w-[416px] h-[210px] flex flex-col gap-[8px] mx-[16px] pl-[16px]">
                                <div className="flex h-[24px]">
                                    <p className="leading-[21px] w-[326px] text-[14px] font-semibold">Art</p>
                                    <div className="w-[48px] h-[24px] flex">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={'/star.png'} alt="2" width={24} height={24} className="w-[20px] h-[20px] rounded-[1px]" /></div>
                                            <p className="w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'">5.0</p>
                                        </div>
                                    </div>
                                    <h5 className="text-[24px] font-bold leading-[33.6px]">Art Specialization</h5>
                                    <p className="text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                </div>
                                <div className="w-[382px] h-[40px] flex gap-[16px] mx-[16px] pl-[16px]">
                                    <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button>
                                    <button className="w-[77px] h-[40px]">$400</button>
                                </div>
                            </div>

                        {/* 05 */}
                        <div className="bg-[#F7F7F7] w-[416px] h-[534px] rounded-[5px] flex flex-col gap-[24px]">
                            <div className="w-[416px] h-[300px]">
                                <Image src={'/img11.png'} alt="5" height={300} width={416} />
                            </div>
                            <div className="w-[416px] h-[210px] flex flex-col gap-[8px] mx-[16px] pl-[16px]">
                                <div className="flex h-[24px]">
                                    <p className="leading-[21px] w-[326px] text-[14px] font-semibold">Law</p>
                                    <div className="w-[48px] h-[24px] flex">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={'/star.png'} alt="2" width={24} height={24} className="w-[20px] h-[20px] rounded-[1px]" /></div>
                                            <p className="w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'">5.0</p>
                                        </div>
                                    </div>
                                    <h5 className="text-[24px] font-bold leading-[33.6px]">Rule of Law</h5>
                                    <p className="text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                </div>
                                <div className="w-[382px] h-[40px] flex gap-[16px] mx-[16px] pl-[16px]">
                                    <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button>
                                    <button className="w-[77px] h-[40px]">$400</button>
                                </div>
                            </div>
                           
                     {/* 06 */}
                     <div className="bg-[#F7F7F7] w-[416px] h-[534px] rounded-[5px] flex flex-col gap-[24px]">
                            <div className="w-[416px] h-[300px]">
                                <Image src={'/img12.png'} alt="6" height={300} width={416} />
                            </div>
                            <div className="w-[416px] h-[210px] flex flex-col gap-[8px] mx-[16px] pl-[16px]">
                                <div className="flex h-[24px]">
                                    <p className="leading-[21px] w-[326px] text-[14px] font-semibold">Tech</p>
                                    <div className="w-[48px] h-[24px] flex">
                                        <div className="w-[24px] h-[24px]">
                                            <Image src={'/star.png'} alt="2" width={24} height={24} className="w-[20px] h-[20px] rounded-[1px]" /></div>
                                            <p className="w-[24px] h-[24px] text-[14px] font-semibold text-right leading-[21px]'">5.0</p>
                                        </div>
                                    </div>
                                    <h5 className="text-[24px] font-bold leading-[33.6px]">Introduction to webflow</h5>
                                    <p className="text-[16px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                </div>
                                <div className="w-[382px] h-[40px] flex gap-[16px] mx-[16px] pl-[16px]">
                                    <button className="w-[117px] h-[40px] border-solid border-black border-[1px] rounded-[5px]">Enroll Now</button>
                                    <button className="w-[77px] h-[40px]">$400</button>
                                </div>
                            </div>
                       </div>
                 </div>
                 <button className="w-[152px] h-[40px] mx-[564px] text-[16px] leading-[24px] border-black border-solid border-[1px] rounded-[5px]">View All Courses</button>
                 </div>  
        </section>
    );
}

export default Courses;
