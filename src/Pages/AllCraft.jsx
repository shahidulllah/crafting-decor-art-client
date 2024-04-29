import { Link, useLoaderData } from "react-router-dom";


const AllCraft = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className="bg-purple-200">
            <div className="overflow-x-auto p-4 lg:mx-24 py-20">
                <div className="flex flex-col items-center justify-center pb-10">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center"><u>All Items Is Here</u></h1>
                </div>
                <div className="flex justify-center">
                    <table className="table bg-purple-300 w-10/12">
                        {/* head */}
                        <thead className="text-sm shadow-lg bg-gray-200">
                            <tr className="text-center">
                                <th className="flex flex-wrap">Category Name/ <span className="opacity-60 badge badge-sm">Sub-Category</span></th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Stock Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(item => <tr key={item._id}>
                                    <td className=''>
                                        <div className=" ">
                                            <div>
                                                <div className="font-bold">{item.itemName}</div>
                                                <div className="opacity-50 badge badge-ghost badge-sm">{item.subCategory}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-bold text-center">{item.price} $</td>
                                    <td className="font-bold text-center">{item.rating} / 5</td>
                                    <td className="text-center w-12"><span className="bg-green-300 font-semibold px- rounded-lg flex justify-center">{item.stockStatus}</span></td>
                                    <th className="text-center">
                                        <Link to={`/viewDetails/${item._id}`}> <button className="btn  btn-xs">details</button></Link>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllCraft;