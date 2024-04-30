import { useEffect, useState } from "react";
import Card from "./Card";


const CraftItemCard = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('https://ass10-crafting-decor-art-server-42cpjro4i-shahidullahs-projects.vercel.app/userItem')
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            setItems(data)
        })
    },[])

    return (
        <div className=" bg-purple-200">
            <div className=" p-4 lg:mx-24">
                {/* Upper part */}
                <div className="flex flex-col items-center justify-center p-16 pb-10 pt-24 space-y-5">
                    <h1 className="text-4xl lg:text-5xl font-bold text-center">Our Exclusive Collections</h1>
                    <p className="text-center lg:w-4/12">Most interesting part to have the fresh mind by keeping our product. Art and Craft is the way to live and refresh your mind.</p>
                </div>
                {/* card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                    {
                        items.map(item => <Card key={item._id} item={item}></Card>)
                    }
                    
                </div>
            </div>

        </div>
    );
};

export default CraftItemCard;