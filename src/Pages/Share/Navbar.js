import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { AiFillCaretDown } from 'react-icons/ai';
import './Navbar.css';


const Navbar = () => {

    const [user] = useAuthState(auth);



    const logout = () => {
        signOut(auth);
    };

    const manuItems = <>
        <li><Link to="/home">Home</Link></li>
    </>

    return (
        <div className="navbar px-28 py-6 bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manuItems}
                    </ul>
                </div>
                <p className="flex items-center text-2xl">
                    <img className='blood-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYBLM75V4hCM2FUkITIY4b6DpT-bnmQUIrJ8LHJe8C2yjtXyZbTx7UcqiaWiRe5njQXs&usqp=CAU" alt="" />
                    Blood Donation</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {manuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div>
                            <div className="dropdown dropdown-bottom dropdown-end sm:mr-2">
                                <label tabIndex={2} className="items cursor-pointer ">
                                    <div>
                                        <img className="logo" src={user?.photoURL} />
                                        <div className='flex items-center'>
                                            <span>Me</span>
                                            <span><AiFillCaretDown></AiFillCaretDown></span>
                                        </div>
                                    </div>
                                </label>
                                <ul tabIndex={2} className="menu menu-compact text-black font-bold dropdown-content mt-3 p-2 shadow bg-gradient-to-r from-violet-300 to-fuchsia-300 rounded-box w-32">
                                    <li><Link to="/myprofile">Profile</Link></li>
                                    <li><Link onClick={logout}>Logout</Link></li>
                                </ul>
                            </div>
                            <label htmlFor="my-drawer-2" className="btn btn-ghost btn-circle drawer-button lg:hidden"> <span><AiFillCaretDown></AiFillCaretDown></span></label>
                        </div>
                        :
                        <><Link to="/login" class="cssbuttons-io-button"> Get started
                            <div class="icon">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                            </div>
                        </Link></>
                }
            </div>
        </div>
    );
};

export default Navbar;