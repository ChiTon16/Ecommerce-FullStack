import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><LuShirt/></span>
                        <span className="ml-2">Everyday fresh products</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/></span>
                        <span className="ml-2">Free delivery for order over $70</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><RiDiscountPercentLine/></span>
                        <span className="ml-2">Daily Mega Discounts</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><CiBadgeDollar/></span>
                        <span className="ml-2">Best price on the market</span>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col linksWrap">
                        <h5>FRUIT & VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col linksWrap">
                        <h5>BREAKFAST & DAIRY</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col linksWrap">
                        <h5>MEAT & SEAFOOD</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col linksWrap">
                        <h5>BEVERAGES</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col linksWrap">
                        <h5>BREADS & BAKERY</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;