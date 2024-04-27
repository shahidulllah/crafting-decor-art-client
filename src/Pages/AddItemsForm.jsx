import Swal from "sweetalert2";


const AddItemsForm = () => {

    const handleAddItem = e => {
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
        const stockStutus = form.stockStutus.value;
        const email = form.email.value;
        const userName = form.userName.value;
        
        const userItems = { userName, email, stockStutus, processingTime, customization, rating, price, description, subCategory, itemName, imageUrl }

        // console.log(userItems);


        //send data to the server
        fetch('http://localhost:2000/userItem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item added Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    form.reset()
                }
            })
    }

    return (
        <div className="bg-purple-200 pb-12">
            <section className="p-4 lg:mx-24 ">
                <form onSubmit={handleAddItem} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md">
                        <div className="space-y-7 p-3 col-span-full lg:col-span-1 flex flex-col justify-center">
                            <p className="font-extrabold text-3xl lg:text-5xl text-center">Add Your Favourite Craft Items</p>
                            <p className=" text-center">Here is your item that you explore for your Craft item and order them.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 p-4 lg:p-12 shadow-2xl border rounded">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Item Name</label>
                                <input name="itemName" type="text" placeholder="Your Item name" className="w-full input rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Sub-Category Name</label>
                                <input name="subCategory" type="text" placeholder="Subcategory " className="w-full rounded-md input focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Image URL</label>
                                <input name="imageUrl" type="text" placeholder="imge url" className="w-full rounded-md input focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="address" className="text-sm">Short Description</label>
                                <input name="description" type="text" placeholder="" className="w-full textarea rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label htmlFor="city" className="text-sm">Price</label>
                                <input name="price" type="text" placeholder="$$$" className="w-full rounded-md focus:ring input focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label htmlFor="city" className="text-sm">Rating</label>
                                <input name="rating" type="text" placeholder="rating" className="w-full rounded-md focus:ring input focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">Proccessing Time</label>
                                <input name="processingTime" type="text" placeholder=".. /business days" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 input focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label htmlFor="username" className="text-sm">Stock Status</label>
                                <input name="stockStutus" type="text" placeholder="Instock / Made order" className="w-full input rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-1">
                                <label htmlFor="state" className="text-sm">Customization</label>
                                <input name="customization" type="text" placeholder="Yes / No" className="w-full rounded-md input focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">User Name</label>
                                <input name="userName" type="text" placeholder="Enter Your Name" className="w-full input rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">E-mail</label>
                                <input name="email" type="email" placeholder="Enter Your Email" className="w-full input rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6 mt-12">
                                <div className="w-full shadow-lg col-span-6">
                                    <button type="submit" className="btn btn-success shadow-lg w-full">Add</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddItemsForm;