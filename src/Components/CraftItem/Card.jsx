import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RiPriceTagLine } from "react-icons/ri";
import { FaRegStar } from 'react-icons/fa';
import { TbListDetails } from 'react-icons/tb';


const Card = ({ item }) => {

    return (
        <div className="max-w-sm rounded-2xl shadow-2xl dark:bg-gray-50 dark:text-gray-800 border-2 ">
            <img src={item.imageUrl} alt="" className="object-cover object-center w-full rounded-t-md h-96 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide text-purple-900 font-serif">{item.itemName}</h2>
                    <p className="dark:text-gray-800">{item.description}</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center'><RiPriceTagLine className='mr-2'></RiPriceTagLine> <span className='font-bold mr-2'>Price:</span> <span className='font-extrabold'>{item.price}</span><span>$</span></div>
                    <div className='flex items-center'><FaRegStar className='mr-2'></FaRegStar><span className='font-bold mr-2'>Rating:</span> <span className='font-extrabold'>{item.rating}</span></div>
                </div>
               <div>
               <Link to={`/viewDetails/${item._id}`}> <button type="button" className="flex btn  items-center justify-center w-full p-3 font-extrabold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"><span className='text-blue-400'><TbListDetails className='text-xl' /></span> View Details</button></Link>
               </div>
            </div>
        </div>
    );

};

export default Card;
Card.propTypes = {
    item: PropTypes.node
}
