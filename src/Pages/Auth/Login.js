import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'; 
import Loading from './Share/Loading';

const Login = () => {
    
        const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
        const [
            signInWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useSignInWithEmailAndPassword(auth);
          const navigate= useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    let signInError;
    if(error || gError){
        signInError= <p className='text-red-500'>{error?.message || gError?.message}</p>
    }


    if(loading || gLoading){
        return <Loading></Loading>
    }

    if (user || gUser) {
        navigate('/home')
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Log In</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

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

                        <p>Don't have an Account? <Link className='hover:underline' to="/signup"><b>Sign Up</b></Link> </p>
                        <p className='mb-6'>Forget Password?</p>

                        {signInError}
                        <input className='btn w-full' type="submit" value='Login' />
                    </form>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn">Connect with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;