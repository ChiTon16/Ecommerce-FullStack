import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const HomeCat = () => {
  const [itemBg, setItemBg] = useState(["#ecffec", "#feefea", "#a18cd1", "#fad0c4"," #ff9a9e",
    "#a6c1ee", "#fbc2eb", "#ffdfba", "#bde0fe", "#f9f7e1", "#ffdfba", "#bde0fe", "#f9f7e1"
  ]);

  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-3 hd">Featured Categories</h3>
        <Swiper
          slidesPerView={10}
          spaceBetween={8}
          slidesPerGroup={3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {itemBg?.map((item, index) => {
            return (
              <SwiperSlide>
                <div className="item text-center cursor" style={{ background: item }}>
                  <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" />
                  <h6>Fashion</h6>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
