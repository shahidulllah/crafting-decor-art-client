
import { MdDelete } from "react-icons/md";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { useLoaderData } from "react-router-dom";


const MyCardList = () => {
    const items = useLoaderData();
    return (
        <div className="bg-purple-200">
            <div className="grid grid-cols-1 gap-14 p-4 lg:p-12 lg:mx-24">
                {
                    items.map(item =>
                        <div key={item._id} data-aos="zoom-in" data-aos-duration="2000" className="flex justify-center rounded-xl ">
                            <div className="9/12 ">

                                {/* image */}
                                <div className="flex flex-col lg:flex lg:flex-row border items-center justify-center gap-7 shadow-xl p-4 rounded-lg lg:p-9"><img className="  rounded-lg h-[60vh]" src={item.imageUrl} alt="" />
                                    <div className="">
                                        <div className="bg-purple-100git p-5 mb-6 rounded-xl">
                                            <p className="text-center text-purple-800 text-3xl font-extrabold">{item.itemName}</p>

                                        </div>
                                        <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Sub-Category name: </p></div>
                                            <div><p>{item.subCategory}</p></div>
                                        </div>
                                        <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Description: </p></div>
                                            <div><p>{item.description}</p></div>
                                        </div>
                                        <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Price: </p></div>
                                            <div><p>{item.price} $</p></div>
                                        </div>
                                        <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Rating: </p></div>
                                            <div><p>{item.rating}</p></div>
                                        </div>
                                        <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Customization: </p></div>
                                            <div><p>{item.customization}</p></div>
                                        </div>
                                        <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Processing Time: </p></div>
                                            <div><p>{item.processingTime}</p></div>
                                        </div>
                                        <div className="text-start flex ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Stock Status: </p></div>
                                            <div><p>{item.stockStutus}</p></div>
                                        </div>
                                        <div className="flex justify-end gap-5 mt-7">
                                            <button className="btn"><MdDelete></MdDelete>Update</button>
                                            <button className="btn">Delete</button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default MyCardList;