import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './UpdateProfile.css';
import Swal from 'sweetalert2';

const UpdateProfile = () => {

    const [user] = useAuthState(auth);
    // const [selectedAddress, setSelectedAddress] = useState([]);
    // const [selectedBloodGroup, setSelectedBloodGroup] = useState([]);
    // const [address, setSingleAddress] = useState('');
    // const [blood, setSingleBlood] = useState('');
    const navigate = useNavigate()

    // useEffect(() => {
    //     fetch("address.json")
    //         .then(res => res.json())
    //         .then(data => setSelectedAddress(data))
    // }, [])

    // useEffect(() => {
    //     fetch("bloodGroup.json")
    //         .then(res => res.json())
    //         .then(data => setSelectedBloodGroup(data))
    // }, [])



    const handleFormSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const age = e.target.age.value;
        const height = e.target.height.value;
        const weight = e.target.weight.value;
        const address = e.target.address.value
        const blood = e.target.blood.value;
        const image = e.target.image.value;

        const info = { name, email, phone, age, height, weight, address, blood, image }


        console.log(info)
        const url = `https://dination-blood-server.onrender.com/info/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your profile is updated",
                        showConfirmButton: false,
                        timer: 2000,
                    })
                    navigate('/myprofile')
                }
            })
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
                            name='name'
                            required
                        />
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            value={user.email}
                            type="email"
                            className="input input-bordered w-full max-w-xs"
                            name='email'
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
                            name='phone'
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
                                name='age'
                                required
                            />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Height</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                name='height'
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
                                name='weight'
                                required
                            />
                        </div>
                    </div>




                    <div className='flex py-4 gap-4'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Address"
                                className="input input-bordered w-full max-w-xs"
                                name='address'
                                required
                            />
                            {/* <select
                                className='address'
                                onChange={(e) => setSingleAddress(e.target.value)}
                                required
                            >
                                {
                                    selectedAddress.map(address => <option value={address}  >{address}</option>)
                                }

                            </select> */}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Blood Group</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Blood Group"
                                className="input input-bordered w-full max-w-xs"
                                name='blood'
                                required
                            />
                            {/* <select
                                className='btn btn-active btn-ghost'
                                onChange={(e) => setSingleBlood(e.target.value)}
                                required
                            >
                                {
                                    selectedBloodGroup.map(blood => <option value={blood}
                                    // className="btn"
                                    >{blood}</option>)
                                }
                            </select> */}
                        </div>
                    </div>
                    <div className="form-control mb-4 w-full max-w-xs">
                        <input type="file"
                            accept="image/png, image/jpg"
                            className=""
                            name='image'
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