import React, { useEffect, useState } from 'react';
import ShowUser from './ShowUser';
import './Home.css';
const Home = () => {

    const [users, setUsers] = useState([]);
    const [infos, setInfos] = useState([]);
    // console.log(infos)
    // const [selectedAddress, setSelectedAddress] = useState([]);
    // const [selectedBloodGroup, setSelectedBloodGroup] = useState([]);
    // const [singleAddress, setSingleAddress] = useState('');
    // console.log(singleAddress)
    const [filterAddress, setFilterAddress] = useState('');
    // console.log(filterAddress)
    const [filterBlood, setFilterBlood] = useState('');
    // console.log(filterBlood)

    useEffect(() => {
        const url = "https://dination-blood-server.onrender.com/info";
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    // useEffect(() => {
    //     const url = `https://dination-blood-server.onrender.com/findAddress?address=${filterAddress}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setInfos(data))
    // }, [])


    // useEffect(() => {
    //     const url = `https://dination-blood-server.onrender.com/findBlood?blood=${filterBlood}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setInfos(data))
    // }, [])


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





    return (
        <div className='grid md:grid-cols-4 md:gap-4 lg:grid-cols-4 lg:gap-4 h-screen sm:px-10 md:px-18 lg:px-28 bg-base-200'>
            <div className="md:col-span-1 lg:col-span-1 left">
                <div>
                    <h2 className='text-xl font-bold pb-2 p-4'>Total Blood Donar: {users.length}</h2>
                    <h1 className='font-bold pt-0 p-4'> Find your blood here which type you need.</h1>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-center pt-0 p-4 gap-4'>
                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Address"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setFilterAddress(e.target.value)}
                            required
                        />
                        {/* <select
                            className='btn btn-active btn-ghost'
                            onChange={(e) => setSingleAddress(e.target.value)}
                            required
                        >
                            {
                                selectedAddress.map(address => <option value={address}  >{address}</option>)
                            }

                        </select> */}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Blood Group"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setFilterBlood(e.target.value)}
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
            </div>


            <div className='md:col-span-3 lg:col-span-3 right' style={{ height: "auto", overflowY: "scroll" }}>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        users.map(user => <ShowUser user={user}></ShowUser>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;