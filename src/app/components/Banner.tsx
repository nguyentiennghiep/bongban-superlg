import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define slide data
const slides = [
  {
    id: 1,
    image: "/slides/slide1.jpg",
    // mobileImage: "/slides/slide1.jpg",
    alt: "Slide 1",
    url: "#", // Replace with actual URL
  },
  {
    id: 2,
    image: "/slides/slide2.jpg",
    // mobileImage: "/slides/slide2.jpg",
    alt: "Slide 2",
    url: "https://www.victas.com/en_gb/", // Replace with actual URL
  },
  {
    id: 3,
    image: "/slides/slide3.jpg",
    // mobileImage: "/slides/slide3.jpg",
    alt: "Slide 3",
    url: "https://www.victas.com/en_gb/", // Replace with actual URL
  },
];

export default function Banner() {
  return (
    <div className="relative w-full bg-[#f5f5f5] group">
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 30px !important;
          height: 30px !important;
          background-color: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          color: #000 !important;
          transition: all 0.3s ease;
          opacity: 0;
        }

        .group:hover .swiper-button-next,
        .group:hover .swiper-button-prev {
          opacity: 1;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(255, 255, 255, 1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 12px !important;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6 !important;
        }

        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
      `}</style>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={500}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link href={slide.url} className="block w-full relative">
              {/* Mobile Image */}
              {/* {slide.mobileImage && (
                <div className="relative w-full pt-[33.33%] sm:hidden">
                  <Image
                    src={slide.mobileImage}
                    alt={`${slide.alt} Mobile`}
                    fill
                    className="object-cover"
                    priority={slide.id === 1}
                    quality={100}
                  />
                </div>
              )} */}
              {/* Desktop Image */}
              <div
                className={`relative w-full pt-[30.56%] ${
                  slide.mobileImage ? "hidden sm:block" : ""
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                  quality={100}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Tham Gia Button */}
      {/* <button className="absolute left-1/2 -translate-x-1/2 -bottom-[66px] w-[100px] h-[100px] sm:w-[144px] sm:h-[144px] rounded-full bg-[#EE344D] border-4 sm:border-6 border-[#FFF5F5] text-white font-semibold text-[20px] sm:text-[30px] leading-[24px] sm:leading-[38px] text-center flex items-center justify-center hover:bg-[#d62e43] transition-colors">
        THAM GIA
      </button> */}
    </div>
  );
}
