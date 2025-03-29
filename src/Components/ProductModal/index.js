import { Button, Dialog, Rating } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import InnerImageZoom from "react-inner-image-zoom";
import Slider from "react-slick";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductModal = (props) => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const [slideIndex, setSlideIndex] = useState(0);

  const context = useContext(MyContext);

  // var settings2 = {
  //   dots: false,
  //   infinite: false,
  //   speed: 700,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   fade: false,
  //   arrows: false,
  // };

  // var settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   fade: false,
  //   arrows: true,
  // };

  const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  }

  return (
    <>
      <Dialog open={context.isOpenProductModal} className="productModal" onClose={() => context.setIsOpenProductModal(false)}>
        <Button className="close_" onClick={() => context.setIsOpenProductModal(false)}>
          <MdClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>POCO</b>
            </span>
          </div>

          <Rating
            name="read-only"
            value={5}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>

        <hr />

        <div className="row mt-2 productDetailModal">
          <div className="col-md-5">
            <div className="productZoom position-relative">
              <div className="badge badge-primary">23%</div>
              <Swiper
              slidesPerView={1}
              spaceBetween={0}
              navigation={false}
              slidesPerGroup={1}
              modules={[Navigation]}
              className="zoomSliderBig"
              ref={zoomSliderBig}
              >
                <SwiperSlide>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-0-202403291512.webp"
                  />
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg"
                  />
                </div>
                </SwiperSlide>

              </Swiper>
          </div>
              <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  navigation={true}
                  slidesPerGroup={1}
                  modules={[Navigation]}
                  className="zoomSlider"
                  ref={zoomSlider}
                  >
                    <SwiperSlide>
                      <div className={`item ${slideIndex===0 && 'item_active'}`}>
                      <img
                  src=
                  "https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-0-202403291512.webp"
                  className="w-100" onClick={() => goto(0)}/>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className={`item ${slideIndex===1 && 'item_active'}`}>
                      <img
                    src=
                    "https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg"
                    className="w-100" onClick={() => goto(1)}/>
                      </div>
                    </SwiperSlide>

                </Swiper>
          </div>

          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg mr-2">$100</span>
              <span className="netPrice text-danger lg">$85</span>
            </div>

            <span className="badge bg-success">IN STOCK</span>

            <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <div className="d-flex align-items-center">
              <QuantityBox/>
              <Button className="btn-blue btn-lg btn-big btn-round ml-3">Add to cart</Button>
            </div>

            <div className="d-flex align-items-center mt-4 actions">
              <Button className="btn-round btn-sml" variant="outlined"><IoIosHeartEmpty/> &nbsp; ADD TO WISHLIST</Button>
              <Button className="btn-round btn-sml ml-5" variant="outlined"><MdOutlineCompareArrows />
              &nbsp; COMPARE</Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
