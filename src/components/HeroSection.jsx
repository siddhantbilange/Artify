import React from "react";
import { products as slides } from "../utils/data.json";


const PerspectiveStyle = {
    transform: "perspective(100px) rotateX(30deg)",
    transformOrigin: "center -10px",
    width: "20000px",
    boxShadow: "inset 0px 20px 90px  #222222"
}

function HeroSection() {
    // const slides = [
    //     {
    //         url: "http://localhost:4200/slider/img-4.png",
    //         alt: "trending frame 01",
    //         title: "image 01",
    //     },
    //     {
    //         url: "http://localhost:4200/slider/img-5.png",
    //         alt: "trending frame 02",
    //         title: "image 02",
    //     },
    //     {
    //         url: "http://localhost:4200/slider/img-1.png",
    //         alt: "trending frame 03",
    //         title: "image 03",
    //     },
    // ];
    return (
        <section className="w-full">
            <div className="-container mx-auto -max-w-7xl">
                {/*  */}
                <div className="sm:hidden -h-96 overflow-hidden bg-amber-100/25">
                    <div className="flex flex-nowrap h-full overflow-auto scroll-smooth snap-mandatory snap-x -scrollbar-none">
                        <div className="w-full p-8 pb-12 aspect-[3/4] flex-shrink-0 relative snap-center">
                            <img
                                src={slides[0].img}
                                alt={slides[0].title}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <div className="w-full p-8 pb-12 aspect-[3/4] flex-shrink-0 relative snap-center">
                            <img
                                src={slides[1].img}
                                alt={slides[1].title}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        <div className="w-full p-8 pb-12 aspect-[3/4] flex-shrink-0 relative snap-center">
                            <img
                                src={slides[2].img}
                                alt={slides[2].title}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                    </div>
                </div>
                {/* Large screen */}
                <div className="hidden sm:flex flex-wrap justify-center items-center gap-0 sm:gap-28 -sm:h-[400px] sm:h-[500px] -bg-gradient-to-r -bg-gray-100 bg-amber-100 relative sm:shadow-[inset_0px_-25px_90px_#222222] p-5 md:p-0">
                    <div className="w-44 md:w-1/5 lg:w-1/12 max-h-96 min-w-40 aspect-[3/4] relative transition-all hover:scale-105">
                        <img
                            src={slides[0].img}
                            alt={slides[0].title}
                            className="w-full h-full object-cover rounded shadow-[-3px_5px_10px_#262626] bg-amber-200"
                        />
                    </div>
                    <div className="w-44 md:w-1/5 lg:w-1/12 max-h-96 min-w-40 aspect-[3/4] relative transition-all hover:scale-105 ">
                        <img
                            src={slides[1].img}
                            alt={slides[1].title}
                            className="w-full h-full object-cover rounded md:shadow-[10px_5px_10px_#262626] lg:shadow-[0px_5px_10px_#262626] bg-amber-200"
                        />
                    </div>
                    <div className="w-44 md:w-1/5 lg:w-1/12 max-h-96 min-w-40 aspect-[3/4] relative transition-all hidden hover:scale-105 lg:block">
                        <img
                            src={slides[2].img}
                            alt={slides[2].title}
                            className="w-full h-full object-cover rounded shadow-[3px_5px_10px_#262626] bg-amber-200"
                        />
                    </div>

                    <span className="absolute top-0 left-1/2 flex -translate-x-1/2">
                        <img src="interrior\Light_fixture-removebg-preview.png" alt="lamp" className="h-16 drop-shadow-[0px_5px_20px_#262626]" />
                        <img src="interrior\Light_fixture-removebg-preview.png" alt="lamp" className="h-20 drop-shadow-[0px_5px_10px_#262626]" />
                        <img src="interrior\Light_fixture-removebg-preview.png" alt="lamp" className="h-16 drop-shadow-[0px_5px_20px_#262626]" />
                    </span>
                    {/* <span className="absolute -bottom-12 z-20">
                        <img src="interrior\Cafe_table_-3-removebg-preview.png" alt="lamp" className="h-36 drop-shadow-[0px_10px_10px_#262626]" />
                    </span> */}
                </div>
                <div className="w-full h-32 relative overflow-hidden hidden sm:flex justify-center">
                    <div className="w-[200vw] h-full">
                        <img className="bg-[url(https://assets.wfcdn.com/im/44636541/resize-h800-w800%5Ecompr-r85/2926/29260672/Roll.jpg)] bg-[300px] w-full h-full " style={PerspectiveStyle} />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default HeroSection;
