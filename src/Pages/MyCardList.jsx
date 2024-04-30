
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { RiColorFilterLine } from "react-icons/ri";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MyCardList = () => {
    const items = useLoaderData();
    const [myItems, setMyItems] = useState(items);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://ass10-crafting-decor-art-server.vercel.app/userItem/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Success!",
                                text: "Your Item has been seccessfully deleted.",
                                icon: "success"
                            });

                            const remaining = items.filter(Item => Item._id !== id);
                            setMyItems(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="bg-purple-200">
            <div className="flex flex-col items-center justify-center p-5">
                <h1 className="text-4xl lg:text-5xl font-bold text-center"><u>My Item List</u></h1>
            </div>
            <div className="flex justify-center items-center pt-5">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-blue-200 shadow-lg border-none w-44 text-xl"><span><RiColorFilterLine /></span> Filter</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-purple-100 rounded-box w-32 mt-1 text-xl ml-6">
                        <li className="border-b-2"><a>Yes</a></li>
                        <li><a>No</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-14 p-4 lg:p-12 lg:mx-24">
                {
                    myItems.map(item =>
                        <div key={item._id} data-aos="zoom-in" data-aos-duration="2000" className="flex justify-center">
                            <div className="9/12 bg-blue-100 rounded-xl   shadow-2xl">

                                {/* image */}
                                <div className="flex flex-col lg:flex lg:flex-row border items-center justify-center gap-7 p-4 rounded-lg lg:p-9"><img className="  rounded-lg h-[60vh]" src={item.imageUrl} alt="" />
                                    <div className="">
                                        <div className="bg-purple-100 p-5 mb-6 rounded-xl">
                                            <p className="text-center text-purple-800 text-3xl font-extrabold">{item.itemName}</p>

                                        </div>
                                        <div className="text-start flex lg:ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Sub-Category name: </p></div>
                                            <div><p>{item.subCategory}</p></div>
                                        </div>
                                        <div className="text-start flex lg:ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Description: </p></div>
                                            <div><p>{item.description}</p></div>
                                        </div>
                                        <div className="text-start flex lg:ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Price: </p></div>
                                            <div><p>{item.price} $</p></div>
                                        </div>
                                        <div className="text-start flex lg:ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Rating: </p></div>
                                            <div><p>{item.rating}</p></div>
                                        </div>
                                        <div className="text-start flex lg:ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Customization: </p></div>
                                            <div><p>{item.customization}</p></div>
                                        </div>
                                        <div className="text-start flex lg:ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Processing Time: </p></div>
                                            <div><p>{item.processingTime}</p></div>
                                        </div>
                                        <div className="text-start flex lg:ml-12 gap-3 mt-3 items-center">
                                            <div className="flex items-center gap-1"><VscDebugBreakpointData className="text-xl" /> <p className="font-bold">Stock Status: </p></div>
                                            <div><p className="text-green-500 font-bold">{item.stockStatus}</p></div>
                                        </div>
                                        <div className="flex justify-between lg:justify-end gap-5 mt-7">
                                            <Link to={`/updateForm/${item._id}`}> <button className="btn font-extrabold"><span><MdEdit className="text-xl"></MdEdit></span>Update</button></Link>
                                            <button onClick={() => handleDelete(item._id)} className="btn font-extrabold"><span><MdDelete className="text-xl"></MdDelete></span>Delete</button>
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