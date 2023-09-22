import { useState } from "react";
import Header from "./Header";

const Login = () =>{
    const[isSignInForm,setIsSignInForm]=useState(true);
    const togleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo" />
          </div>
          <form className="w-3/12 absolute p-12  bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
            {!isSignInForm &&(<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />)}
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
            <input type="password" placeholder="Password" className="p-2 my-2  w-full bg-gray-700" />
            <button className="p-4 my-4 bg-red-700 w-full">{isSignInForm ? "Sign In":"Sign Up"}</button>
         <p className="py-4 cursor-pointer" onClick={togleSignInForm}>{isSignInForm ? "new to Netflix? Sign Up Now":"Already Registerd?Sign In Now"}</p>
          </form>
        </div>
    );
}
export default Login;