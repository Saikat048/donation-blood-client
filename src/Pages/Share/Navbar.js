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
 

    return (
        <div className="navbar  sm:px-10 md:px-18 lg:px-28 py-6 bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                     
                </div>
                <Link to="/home" className="lg:flex md:flex items-center">
                    <img className='blood-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYBLM75V4hCM2FUkITIY4b6DpT-bnmQUIrJ8LHJe8C2yjtXyZbTx7UcqiaWiRe5njQXs&usqp=CAU" alt="" />
                    <span className='lg:text-2xl font-bold'>Blood Donation</span></Link>
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
                                    <li><Link to="/updateProfile">Profile</Link></li>
                                    <li><Link onClick={logout}>Logout</Link></li>
                                </ul>
                            </div>
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