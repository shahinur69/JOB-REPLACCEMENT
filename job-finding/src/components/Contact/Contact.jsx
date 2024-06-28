import { useState } from "react";
const Contact = () => {
    const [IsSubmitted, SetIsSubmitted] = useState(false);
    const handleSubmit  = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        SetIsSubmitted(true);
    };
    const handleBar = () =>{
        SetIsSubmitted(false);
    };
    return (
        <div className="w-3/4 mx-auto lg:py-16 py-40">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div className="space-y-8 pb-10">
                    <h1 className="font-bold text-5xl text-teal-800">
                        <span className="border-b-4 border-teal-900 rounded-lg">Contact Us</span>
                    </h1>
                    <p className="font-bold text-6xl text-teal-800">How can we help your business today?</p>
                </div>
                <div className="text-xl font-semibold space-y-6 mb-6">
                    <p>Email :  <a href="mailto:shahinurmubarak238@gmail.com"> shahinurmubarak238@gmail.com</a></p>
                    <p>Phone :  <a href="tel:+1234567890"> +1 234 567 890</a></p>
                    <p>Address :  123 Example Street, City, Country</p>
                </div>
                <form onSubmit={handleSubmit} className="text-lg font-semibold py-1" style={{ width: '100%' }}>
                    
                    <div>
                        <label>Email</label>
                        <input className="rounded-lg py-1" type="email" name="email" style={{ width: '100%' }} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input className="rounded-lg py-1" type="password" name="password" style={{ width: '100%' }} />
                    </div>
                    <div>
                        <input className="bg-slate-950 rounded-lg py-1 btn font-bold text-lg mt-2 text-white" type="submit" value="Submit" />
                    </div>
                    {IsSubmitted && (
                        <div className="bg-slate-900 max-w-36 p-4 items-center rounded-lg mt-2">
                            <p className="text-white font-bold text-xl py-2">submitted successfully!!!</p>
                            <button onClick={handleBar} className="bg-teal-900 text-lg font-bold py-1 px-2 rounded-lg">Cancel</button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;