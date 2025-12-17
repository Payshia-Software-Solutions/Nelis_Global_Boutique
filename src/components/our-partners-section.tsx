
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

const partners = [
  {
    name: "Jetwing",
    logoUrl: "http://content-provider.payshia.com/nelis-global/new/1835131679054252min.webp",
  },
  {
    name: "Tony and Guy",
    logoUrl: "http://content-provider.payshia.com/nelis-global/new/TONI_and_GUY-black.webp",
  },
  {
    name: "Odel",
    logoUrl: "http://content-provider.payshia.com/nelis-global/new/odel--600.webp",
  },
  {
    name: "Royal Kandyan",
    logoUrl: "http://content-provider.payshia.com/nelis-global/new/loginlogo.webp",
  },
  {
    name: "Home Yoga Paris",
    logoUrl: "http://content-provider.payshia.com/nelis-global/new/images (2).webp",
  },
  {
    name: "Good Market",
    logoUrl: "http://content-provider.payshia.com/nelis-global/new/Good-Market-Approved-Abridge-Academy-circle.webp",
  },
  {
    name: "Charleston",
    logoUrl: "http://content-provider.payshia.com/nelis-global/new/d133205-32-97b81c3dd8eb169506b8-0.webp",
  },
];

export function OurPartnersSection() {
    return (
        <section className="py-2 bg-background">
          <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Our Partners</h2>
              </div>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 60,
                    },
                }}
                className="w-full"
              >
                {partners.map((partner) => (
                  <SwiperSlide key={partner.name} className="flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md">
                        <Image
                        src={partner.logoUrl}
                        alt={`${partner.name} logo`}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                        />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
        </section>
    );
}
