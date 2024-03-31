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
            date: 'Oct 15',
            day: 'Sun',
            time: '4:30 PM',
            location: 'Sutter Health Park, Sacramento, California',
            collection: 'Orange Collection'
        },
        {
            id: 3,
            img: card1,
            title: 'Las Vegas Aviators',
            date: 'Oct 15',
            day: 'Sun',
            time: '4:30 PM',
            location: 'Las Vegas Ballpark, Las Vegas, Nevada',
            collection: 'Take Flight Collection'
        },
        {
            id: 4,
            img: card2,
            title: 'Sacramento River Cats',
            date: 'Oct 15',
            day: 'Sun',
            time: '4:30 PM',
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
                    <SwiperSlide key={cart.id} className="">
                        <Image src={cart.img} alt="" className="w-full h-[400px]" />
<h4>{cart.title}</h4>
<p>{cart.date} || {cart.day} || {cart.time}</p>
<p>{cart.location}</p>
<button>{cart.collection}</button>
                    </SwiperSlide>
                ))}

            </Swiper>
            <button className="btn rounded next text-[#2C9CF0] border border-[#2C9CF0] p-2"><BsArrowRight /></button>
        </div>
    );
};

export default Slider;