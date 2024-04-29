import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSavings, MdSupportAgent } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";


const Shipping = () => {
    return (
        <div className="bg-purple-200 -mt-2">
            <div className="p-4 lg:mx-24">
                <div className="p-20 grid justify-center grid-cols-2 lg:grid-cols-4 gap-9 ">
                    <div className="flex flex-col justify-center items-center space-y-1 border-r-2 ">
                        <h1 className="text-7xl"><LiaShippingFastSolid /></h1>
                        <h2 className="font-semibold text-xl mt-2 -tracking-wide">Free Shipping</h2>
                        <p className="font-thin">Send a Gift Product</p>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-1 lg:border-r-2 ">
                        <h1 className="text-7xl"><MdSupportAgent /></h1>
                        <h2 className="font-semibold text-xl mt-2 -tracking-wide">24/7 Support</h2>
                        <p className="font-thin">We are always with you</p>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-1 border-r-2 ">
                        <h1 className="text-7xl"><MdOutlineSavings /></h1>
                        <h2 className="font-semibold text-xl mt-2 -tracking-wide">Big Savings</h2>
                        <p className="font-thin">On Order of $85</p>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-1 ">
                        <h1 className="text-7xl"><RiSecurePaymentLine /></h1>
                        <h2 className="font-semibold text-xl mt-2 -tracking-wide">Online Payment</h2>
                        <p className="font-thin">Give Your Payment Online</p>
                    </div>
                </div>

                {/* Banner */}
                <div className="flex gap-7">
                    <div><img src="https://i.postimg.cc/7L96kLLx/banner-01.jpg" alt="" /></div>
                    <div><img src="https://i.postimg.cc/1tzz5ZgD/banner-02.jpg" alt="" /></div>
                    <div><img src="https://i.postimg.cc/ydr8Dr9t/banner-03.jpg" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;