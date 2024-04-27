import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('User Logged out'))
            .catch(error => console.error(error))
    }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all'>All Items</NavLink></li>
        <li><NavLink to='/addItem'>Add Craft Item</NavLink></li>
        <li><NavLink to='/myList'>My List</NavLink></li>
    </>
    return (
        <div className=" bg-purple-300 h-full">
            <div className="text-center p-4 lg:mx-24">
                <header className="p-3 dark:bg-gray-100 dark:text-gray-800">
                    <div className="container flex justify-between h-16 mx-auto">
                        <div className="flex items-center">
                            <Link to='/'><img src="https://i.postimg.cc/RVQBjndr/logo-1.png" alt="" /></Link>
                        </div>
                        <div className="navbar-center hidden lg:flex  justify-center">
                            <ul className="menu menu-horizontal  flex gap-7 items-center font-bold">
                                {navlinks}
                            </ul>
                        </div>
                        <div className="items-center flex-shrink-0 hidden lg:flex">
                            {
                                !user && <Link to='/login'> <button className="self-center px-8 py-3 rounded">Login</button></Link>
                            }


                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="butto" className="btn btn-ghost btn-circle">
                                    <div className="w-12 tooltip" data-tip={user?.displayName || 'User Logged out'}>
                                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" className="rounded-full" alt="" />
                                    </div>
                                </div>
                                {
                                    user && <ul tabIndex={0} className=" z-[1] p-4 bg-slate-300 shadow menu menu-sm dropdown-content rounded-box -ml-44 lg:-ml-24 ">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className=" w-9 mb-2 ">
                                            <img className="rounded-full" src={user?.photoURL || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"} />
                                        </div>
                                        <div className="text-center font-serif">
                                            <h1 className="font-semibold">{user?.displayName}</h1>
                                            {
                                                user && <h2 className="text-sm">{user?.email || 'Email not found!'}</h2>
                                            }

                                        </div>
                                    </div>
                                    <div className="mt-5 border-y space-y-2">
                                        <li><Link to='/'>Update Profile</Link></li>
                                        <li><button onClick={handleLogOut}>Log Out</button></li>
                                    </div>
                                </ul>
                            }
                                
                            </div>

                        </div>
                        <button className="p-4 lg:hidden">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg></div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    {navlinks}
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/login">Register</Link></li>
                                </ul>
                            </div>
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Navbar;