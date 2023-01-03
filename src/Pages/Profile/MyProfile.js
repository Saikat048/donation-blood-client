import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyProfile.css';

const MyProfile = () => {

    const [profileInfo, setProfileInfo] = useState({});
    console.log(profileInfo)
    const [user] = useAuthState(auth)

    useEffect(() => {
        const url = `https://dination-blood-server.onrender.com/findUser?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProfileInfo(data[0]))
    }, [])


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={profileInfo.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="card w-96 bg-base-100 p-10 shadow-xl">
                    <form>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                            disabled
                                value={profileInfo.name}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                            disabled
                                value={profileInfo.email}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                            disabled
                                value={profileInfo.phone}
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>



                        <div className='flex gap-2'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Age</span>
                                </label>
                                <input
                                disabled
                                    value={profileInfo.age}
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Height</span>
                                </label>
                                <input
                                disabled
                                    value={profileInfo.height}
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Weight</span>
                                </label>
                                <input
                                disabled
                                    value={profileInfo.weight}
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
                                disabled
                                    value={profileInfo.address}
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Blood Group</span>
                                </label>
                                <input
                                disabled
                                    value={profileInfo.blood}
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