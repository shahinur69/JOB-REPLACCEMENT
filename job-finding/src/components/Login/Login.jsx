import {signInWithEmailAndPassword} from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // reset 
        setLoginError('');
        setSuccess('');
        if (password.length < 6) {
            setLoginError("password must be 6 characters or longer!!");
            return;
        }
        // create user
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                // Signed up 
                console.log(res.user);
                setSuccess("Login successfully!!");
            })
            .catch((error) => {
                console.error(error);
                setLoginError(error.message("please, give valid email or password"))
            });
    }
    return (
        <div className="bg-slate-800">
            <div className="hero w-3/4 mx-auto min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 font-semibold text-lg">
                            You can let your users authenticate with Firebase using their
                            Facebook accounts by integrating Facebook Login into your app.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-slate-800 font-medium text-lg" type="submit" value="Login Now" />
                            </div>
                        </form>
                        {loginError && <p className="text-red-600 text-xl">{loginError}</p>}
                        {success && <p className="text-green-600 text-xl">{success}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;