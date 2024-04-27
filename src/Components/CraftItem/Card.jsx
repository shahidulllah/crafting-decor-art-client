import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {

    return (
        <div className="max-w-sm rounded-2xl shadow-2xl dark:bg-gray-50 dark:text-gray-800">
            <img src={item.imageUrl} alt="" className="object-cover object-center w-full rounded-t-md h-96 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{item.itemName}</h2>
                    <p className="dark:text-gray-800">{item.description}</p>
                </div>
                <div>
                </div>
               <Link> <button type="button" className="flex btn btn-success items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Details</button></Link>
            </div>
        </div>
    );

};

export default Card;
Card.propTypes = {
    item: PropTypes.node
}
