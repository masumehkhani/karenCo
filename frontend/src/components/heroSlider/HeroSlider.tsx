import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import slide1 from "../../assets/images/slides/1280v/building-4599331_1280.jpg";
import slide2 from "../../assets/images/slides/1280v/electric-1080584_1280.jpg";
import slide3 from "../../assets/images/slides/1280v/elevator-7737626_1280.jpg";
import slide4 from "../../assets/images/slides/1280v/odaiba-1864261_1280.jpg";
import slide5 from "../../assets/images/slides/1280v/pexels-ana-benet-8243095.jpg";

const slides = [
  {
    image: slide1,
    title: "پیشرفته‌ترین تابلو فرمان‌ها",
    desc: "ما با استفاده از تکنولوژی روز، بهترین راهکارهای کنترل آسانسور را ارائه می‌دهیم.",
  },
  {
    image: slide2,
    title: "راهکارهای هوشمند آسانسور",
    desc: "هوشمند‌سازی آسانسورها برای صرفه‌جویی و ایمنی بیشتر.",
  },
  {
    image: slide3,
    title: "امنیت در اولویت",
    desc: "کنترل دقیق و ایمن عملکرد آسانسور با تابلو فرمان‌های پیشرفته.",
  },
  {
    image: slide4,
    title: "راه‌حل‌های صنعتی حرفه‌ای",
    desc: "طراحی و پیاده‌سازی سفارشی برای پروژه‌های بزرگ.",
  },
  {
    image: slide5,
    title: "زیبایی همراه با عملکرد",
    desc: "ترکیب طراحی زیبا و کارآمد برای ساختمان‌های مدرن.",
  },
];

const HeroSlider: React.FC = () => {
  return (
    <div className="w-full" style={{ height: "calc(100vh - 128px)" }}>
      <Swiper
        className="h-full custom-swiper"
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
        dir="rtl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title} className="h-full">
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col justify-center text-right px-4 md:pr-32 md:gap-6 gap-2">
                <h1 className="text-xl md:text-4xl font-peyda text-white">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-3xl font-peyda text-white">
                  {slide.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
