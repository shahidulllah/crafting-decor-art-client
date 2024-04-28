
import { AiOutlineBug } from "react-icons/ai";
import { GiShower } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { TbArrowsRandom } from "react-icons/tb";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const items = useLoaderData();
    const { id } = useParams();
    const detailsItem = items.find(item => item._id == id);
    console.log(detailsItem)
    return (
        <div className="bg-purple-200">
            <div data-aos="zoom-in" data-aos-duration="2000" className="flex justify-center  p-4 rounded-xl lg:mx-24 lg:p-12">
                <div className="9/12 ">

                    {/* image */}
                    <div className="flex flex-col lg:flex lg:flex-row border items-center justify-center gap-12 shadow-xl p-4 rounded-lg lg:p-9"><img className="  rounded-lg h-[60vh]" src={detailsItem.imageUrl} alt="" />
                        <div className="">
                            <div className="bg-white p-5 mb-6 rounded-xl">
                                <p className="text-center text-purple-800 text-3xl font-extrabold">{detailsItem.itemName}</p>

                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                               <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Sub-Category name: </p></div>
                                <div><p>{detailsItem.subCategory}</p></div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                               <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Description: </p></div>
                                <div><p>{detailsItem.description}</p></div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                               <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Price: </p></div>
                                <div><p>{detailsItem.price} $</p></div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                               <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Rating: </p></div>
                                <div><p>{detailsItem.rating}</p></div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                               <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Customization: </p></div>
                                <div><p>{detailsItem.customization}</p></div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                               <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Processing Time: </p></div>
                                <div><p>{detailsItem.processingTime}</p></div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                               <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Stock Status: </p></div>
                                <div><p>{detailsItem.stockStutus}</p></div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                               <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">User: </p></div>
                                <div><p>{detailsItem.userName}</p></div>
                            </div>
                            <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                               <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Email: </p></div>
                                <div><p>{detailsItem.email}</p></div>
                            </div>
                            
                            
                            
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;