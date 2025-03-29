import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductModal from "../ProductModal";
import { useContext, useState } from "react";
import { MyContext } from "../../App";

const ProductItem = (props) => {

  const context = useContext(MyContext);

  const viewProductDetails=(id) => {
    context.setIsOpenProductModal(true);
  }

  return (
    <>
      <div className={`productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img
            src="https://down-vn.img.susercontent.com/file/cn-11134301-7r98o-lozit7rufoifde_tn.webp"
            className="w-100"
          />

          <span className="badge badge-primary">28%</span>

          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}>
              <TfiFullscreen />
            </Button>
            <Button>
              <IoMdHeartEmpty style={{ fontSize: "20px" }} />
            </Button>
          </div>
        </div>

        <div className="info">
          <h4>
            Đồng hồ nam doanh nhân Lưới thời trang với Bộ vòng tay vương miện
            đồng hồ thạch anh
          </h4>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />

          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger ml-2">$14.00</span>
          </div>
        </div>
      </div>

      

          {/* <ProductModal/> */}
    </>
  );
};

export default ProductItem;
