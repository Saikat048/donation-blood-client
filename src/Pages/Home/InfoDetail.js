import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const InfoDetail = () => {
    const { userId } = useParams();
    // console.log(userId)
    const [user] = useAuthState(auth)

    const [userInfo, setUserInfo] = useState({})
    console.log(userInfo)

    useEffect(() => {
        const url = `https://dination-blood-server.onrender.com/info/${userId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [])


    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2>Name: <span className="text-xl font-bold">{userInfo.name}</span></h2>
                    <p>Email: {user.email}</p>
                    <p>Phone: {userInfo.phone}</p>
                    <p>Address: {userInfo.address}</p>
                    <div className='flex items-center'>
                        <p>Blood Group: {userInfo.blood}</p>
                        <p>Age: {userInfo.age}</p>
                    </div>
                    <div className='flex items-center gap-6'>
                        <p>Height: {userInfo.height}</p>
                        <p>Weight: {userInfo.weight} kg</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/home" className="btn btn-primary">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoDetail;