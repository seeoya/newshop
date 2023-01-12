import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, Scrollbar } from "swiper";
import { useEffect, useState } from "react";

export default function App() {
    return (
        <div>
            <Swiper
                modules={[Scrollbar, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                scrollbar={{
                    hide: true
                }}
                navigation
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                {["bg-yellow-50", "bg-yellow-100", "bg-yellow-200", "bg-yellow-300", "bg-yellow-400"].map((el) => {
                    return (
                        <SwiperSlide key={el}>
                            <div className={"flex justify-center items-center w-full h-[600px] " + el}>메인{el}</div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <Swiper
                modules={[Scrollbar, Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={2}
                scrollbar={{
                    hide: true
                }}
                navigation
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                {["bg-blue-50", "bg-blue-100", "bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500", "bg-blue-600", "bg-blue-700"].map((el) => {
                    return (
                        <SwiperSlide key={el}>
                            <div className={"flex justify-center items-center w-full h-[300px] " + el}>메인{el}</div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
