"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Image from "next/image";
import card1 from "../assets/card1.jpeg"
import card2 from "../assets/card2.jpeg"
import card3 from "../assets/card3.jpeg"
import card4 from "../assets/card4.jpeg"


const Slider = () => {

    const sportsCart = [
        {
            id: 1,
            img: card1,
            title: 'Las Vegas Aviators',
            date: 'Oct 15',
            day: 'Sun',
            time: '4:30 PM',
            location: 'Las Vegas Ballpark, Las Vegas, Nevada',
            collection: 'Take Flight Collection'
        },
        {
            id: 2,
            img: card2,
            title: 'Sacramento River Cats',
            date: 'Oct 17',
            day: 'Tue',
            time: '2:30 PM',
            location: 'Sutter Health Park, Sacramento, California',
            collection: 'Orange Collection'
        },
        {
            id: 3,
            img: card3,
            title: 'New Jersey Devils',
            date: 'Oct 19',
            day: 'Thu',
            time: '3:30 PM',
            location: 'Las Vegas Ballpark, Las Vegas, Nevada',
            collection: 'Take Flight Collection'
        },
        {
            id: 4,
            img: card4,
            title: 'Los Angeles Dodgers',
            date: 'Oct 21',
            day: 'Sat',
            time: '1:30 PM',
            location: 'Sutter Health Park, Sacramento, California',
            collection: 'Orange Collection'
        }
    ];




    return (
        <div className="flex justify-center items-center gap-10 mt-8">
            <button className="btn rounded prev p-2 text-[#2C9CF0] border border-[#2C9CF0]"><BsArrowLeft /></button>
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                    425: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 80,
                    }
                }}
                navigation={{
                    nextEl: ".next",
                    prevEl: ".prev"
                }}
            >
                {sportsCart.map((cart) => (
                    <SwiperSlide key={cart.id} className="text-center bg-[#ffffff]  dark:bg-[#3B3E47] p-3 shadow-md mb-2 relative">
                        <Image src={cart.img} alt="" className="w-full h-[400px] mb-2 pb-4 border-b-2 border-dashed border-[#A9ACB2] dark:border-[#818A97]" />
                        <h4 className='text-[#000000] dark:text-[#ffffff] font-medium text-lg my-2'>{cart.title}</h4>
                        <p className='text-[#000000] dark:text-[#ffffff] text-sm leading-5 my-2'>{cart.date} | {cart.day} | {cart.time}</p>
                        <p className='text-[#525965] dark:text-[#DFDFDF] text-sm leading-5 my-2'>{cart.location}</p>
                        <button className='w-full bg-[#1D1D1F] dark:bg-[#000000] text-[#ffffff] text-sm font-medium py-2 leading-4'>{cart.collection}</button>
                        <button className='rounded-full p-4 bg-[#F7F7F8] dark:bg-[#292B32] absolute bottom-[148px] -right-6'></button>
                        <button className='rounded-full p-4 bg-[#F7F7F8] dark:bg-[#292B32] absolute bottom-[148px] -left-6'></button>
                    </SwiperSlide>
                ))}

            </Swiper>
            <button className="btn rounded next text-[#2C9CF0] border border-[#2C9CF0] p-2"><BsArrowRight /></button>
        </div>
    );
};

export default Slider;