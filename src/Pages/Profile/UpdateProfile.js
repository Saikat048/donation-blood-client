import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './UpdateProfile.css';

const UpdateProfile = () => {

    const [user] = useAuthState(auth);
    const [selectedAddress, setSelectedAddress] = useState([]);
    const [selectedBloodGroup, setSelectedBloodGroup] = useState([]);
    const [singleAddress, setSingleAddress] = useState('');
    const [singleBlood, setSingleBlood] = useState('');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        fetch("address.json")
            .then(res => res.json())
            .then(data => setSelectedAddress(data))
    }, [])

    useEffect(() => {
        fetch("bloodGroup.json")
            .then(res => res.json())
            .then(data => setSelectedBloodGroup(data))
    }, [])

    const info = { name, email, phone, age, height, weight, singleAddress, singleBlood, image }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(info)
    }



    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 p-10 shadow-xl">

                <form onSubmit={handleFormSubmit}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Full Name"
                            className="input input-bordered w-full max-w-xs"
                            onBlur={(e) => setName(e.target.value)}
                            required
                        />
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            onBlur={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Your Phone Number"
                            className="input input-bordered w-full max-w-xs"
                            onBlur={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>



                    <div className='flex gap-2'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Age"
                                className="input input-bordered w-full max-w-xs"
                                onBlur={(e) => setAge(e.target.value)}
                                required
                            />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Height</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Height"
                                className="input input-bordered w-full max-w-xs"
                                onBlur={(e) => setHeight(e.target.value)}
                                required
                            />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Weight</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Weight"
                                className="input input-bordered w-full max-w-xs"
                                onBlur={(e) => setWeight(e.target.value)}
                                required
                            />
                        </div>
                    </div>




                    <div className='flex py-4 gap-4'>
                        <div className="form-control w-full max-w-xs">
                            <select
                                className='address'
                                onChange={(e) => setSingleAddress(e.target.value)}
                                required
                            >
                                {
                                    selectedAddress.map(address => <option value={address}  >{address}</option>)
                                }

                            </select>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <select
                                className='btn btn-active btn-ghost'
                                onChange={(e) => setSingleBlood(e.target.value)}
                                required
                            >
                                {
                                    selectedBloodGroup.map(blood => <option value={blood}
                                    // className="btn"
                                    >{blood}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-control mb-4 w-full max-w-xs">
                        <input type="file"
                            accept="image/png, image/jpg"
                            className=""
                            onBlur={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div className='flex items-center gap-3'>
                        <button className='update'>Update</button>

                        {/* <Link className='noselect'>Cancel <span>X</span></Link> */}
                        <Link to="/myprofile" class="noselect"><span class="text">Cancel</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;