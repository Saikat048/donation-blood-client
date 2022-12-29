import React from 'react';
import { Link } from 'react-router-dom';
import './MyProfile.css';

const MyProfile = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" /> 
                    <div className="card w-96 bg-base-100 p-10 shadow-xl">
                        <form>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>



                            <div className='flex gap-2'>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Age</span>
                                    </label>
                                    <input
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Height</span>
                                    </label>
                                    <input
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Weight</span>
                                    </label>
                                    <input
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Blood Group</span>
                                    </label>
                                    <input
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                </div>
                            </div>

                            <Link to="/updateprofile" className='edit text-center mt-4'>Edit Profile</Link>
                        </form>
                    </div> 
            </div>
        </div>

    );
};

export default MyProfile;