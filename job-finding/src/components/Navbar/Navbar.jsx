import { Link } from "react-router-dom";
import stu from "../../assets/image/student.png"
import { useState } from "react";
const Navbar = () => {
    const [isMessageVisible, SetIsModalVisible] = useState(false);
    const handleJoin = () => {
        SetIsModalVisible(true);
    };
    const handleCloseMessage = () => {
        SetIsModalVisible(false);
    };
    const navLink = <>
        <li className="text-base font-bold text-amber-300"><Link to="/home">Home</Link></li>
        <li className="text-base font-bold"><Link to="/review">Features</Link></li>
        <li className="text-base font-bold"><Link to="/service">Services</Link></li>
        <li className="text-base font-bold"><Link to="/contact">Contact</Link></li>
        <li className="text-base font-bold"><Link to="/login">Login</Link></li>
    </>
    return (
        <div className="w-full lg:w-3/4 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <img className="w-28" src={stu} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button onClick={handleJoin} className="btn bg-teal-950 text-base text-white font-bold">Join Us</button>
                </div>
                {isMessageVisible && (
                    <div className="bg-slate-900 p-6 rounded shadow-lg text-center grid grid-cols-1 ml-3">
                        <p className="mb-4 text-lg font-semibold">Successfully joined</p>
                        <button onClick={handleCloseMessage} className="btn bg-teal-950 text-base text-white font-bold">OK</button>
                    </div>
                )}
            </div>
        </div >
    );
};

export default Navbar;