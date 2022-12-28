import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Share/Loading';

const Signup = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name})
        navigate('/home')
    };

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate = useNavigate()

    let signInError;
    if(error || gError || updateError){
        signInError= <p className='text-red-500'>{error?.message || gError?.message || updateError?.message}</p>
    }


    if(loading || gLoading || updating){
        return <Loading></Loading>
    }

    if (user || gUser) {
        console.log(user)
        navigate('/home')
    }
    
    return (
        <div className='flex justify-center items-center h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-3xl font-bold">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                }
                            })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <p className="label-text-alt text-red-500">{errors.name?.message}</p>} 
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Provide a valid Email"
                                }
                            })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        <label className="label">
                            {errors.mail?.type === 'required' && <p className="label-text-alt text-red-500">{errors.mail?.message}</p>}
                            {errors.mail?.type === 'pattern' && <p className="label-text-alt text-red-500">{errors.mail?.message}</p>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Your password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 characters or longer"
                                }
                            })}
                            aria-invalid={errors.password ? "true" : "false"}

                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <p className="label-text-alt text-red-500">{errors.password?.message}</p>}
                            {errors.password?.type === 'minLength' && <p className="label-text-alt text-red-500">{errors.password?.message}</p>}
                        </label>
                    </div>

                    <p>Already have an Account? <Link className='hover:underline' to="/login"><b>Please Login</b></Link> </p>

                        {signInError}
                    <input className='btn w-full mt-4' type="submit" value='Sign Up' />
                </form>

                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn">Connect with Google</button>
            </div>
        </div>
    </div>
    );
};

export default Signup;