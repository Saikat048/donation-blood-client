import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './ShowUser.css';

const ShowUser = (props) => {
    // const [user] = useAuthState(auth)
    // console.log(props.user)
    const { _id, name, blood, image, address } = props.user
    const navigate = useNavigate()


    const handleShowDetail = (id) => {
        navigate(`/${id}`)
    }

    return (
        <div className='flex justify-center py-8 '>
            <div class="user-card p-4">
                <div class="user-img">
                    <img src={image} alt="" />
                </div>
                <div class="user-info">
                    <span className='text-center'>{name}</span>
                    <p>Blood Group: {blood}</p>
                    <p>Address: {address}</p>
                </div>
                <a onClick={() => handleShowDetail(_id)} href="#">Button</a>
            </div>
        </div>
    );
};

export default ShowUser;