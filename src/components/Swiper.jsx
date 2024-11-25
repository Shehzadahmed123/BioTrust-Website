// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './swiper.css'
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
const CrouselHorizontal = () => {
  const images = [
    {
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/2451/8571/t/3/assets/buy-1-1571245639778.png",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={3}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide  key={index}>
            <img src={image.img} alt="img error" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default CrouselHorizontal;
