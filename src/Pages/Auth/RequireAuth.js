import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Share/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);


    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace></Navigate>
    }

    // if (!user.emailVerified) {
    //     return <div className='flex justify-center mt-20'>
    //         <div className="card w-96 bg-base-100 shadow-xl font-bold">
    //             <div className="card-body">
    //                 <h1 className='text-red-500 text-xl'>Your Email is not Verified...</h1>
    //                 <p>Please check your email and clink the email verification link...</p>
    //                 <div className="card-actions justify-end mt-5">
    //                     <button className="btn btn-primary"
    //                         onClick={async () => {
    //                             const success = await sendEmailVerification();
    //                             if (success) {
    //                                 toast('Sent email');
    //                             }
    //                         }}
    //                     >
    //                         Verify email
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
 
    //         <ToastContainer />
    //     </div>
    // }


    return children;
};

export default RequireAuth;