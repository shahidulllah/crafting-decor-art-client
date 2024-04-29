import { useLoaderData, useLocation, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePage = () => {
    const item = useLoaderData();
    console.log(item)
    const {_id, stockStatus, processingTime, customization, rating, price, description, subCategory, itemName, imageUrl } = item;

    const navigate = useNavigate();
    const location = useLocation();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const imageUrl = form.imageUrl.value;
        const itemName = form.itemName.value;
        const subCategory = form.subCategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;

        const userItems = { stockStatus, processingTime, customization, rating, price, description, subCategory, itemName, imageUrl }
        // console.log(userItems);

        //Update data 
        fetch(`http://localhost:2000/userItem/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Item is Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    navigate(location?.state ? location.state : '/myCard');
                }
            })
    }

    return (
        <div className="bg-purple-200 pb-12">
            <section className="p-4 lg:mx-24 ">
                <form onSubmit={handleUpdate} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md">
                        <div className="space-y-7 p-3 col-span-full lg:col-span-1 flex flex-col justify-center">
                            <p className="font-extrabold text-3xl lg:text-5xl text-center">Update Your Favourite Craft Items</p>
                            
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-4 lg:p-12 shadow-2xl border rounded">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Item Name</label>
                                <input name="itemName" type="text" defaultValue={itemName} placeholder="Your Item name" className="w-full input rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Sub-Category Name</label>
                                <input name="subCategory" type="text" defaultValue={subCategory} placeholder="Subcategory " className="w-full rounded-md input focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Image URL</label>
                                <input name="imageUrl" type="text" defaultValue={imageUrl} placeholder="Image url" className="w-full rounded-md input focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="address" className="text-sm">Short Description</label>
                                <input name="description" type="text" defaultValue={description} placeholder="" className="w-full textarea rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label htmlFor="city" className="text-sm">Price</label>
                                <input name="price" type="text" defaultValue={price} placeholder="$$$" className="w-full rounded-md focus:ring input focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label htmlFor="city" className="text-sm">Rating</label>
                                <input name="rating" type="text" defaultValue={rating} placeholder="rating" className="w-full rounded-md focus:ring input focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" required />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">Proccessing Time</label>
                                <input name="processingTime" type="text" defaultValue={processingTime} placeholder=".. /business days" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 input focus:dark:ring-violet-600 dark:border-gray-300" required />
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label htmlFor="username" className="text-sm">Stock Status</label>
                                <select className="py-3 px-3 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={stockStatus} name="stockStatus" id="cars">
                                        <option value="instock">In Stock</option>
                                        <option value="made-order">Made Order</option>
                                    </select>
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label htmlFor="state" className="text-sm">Customization</label>
                                <select className="py-3 px-3 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" defaultValue={customization} name="customization" id="cars">
                                        <option  value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                            </div>

                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6 mt-12">
                                <div className="w-full shadow-lg col-span-6">
                                    <button type="submit" className="btn bg-purple-400 border-none shadow-lg w-full font-bold text-lg">Update</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default UpdatePage;