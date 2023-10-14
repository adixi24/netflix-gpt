import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import {auth} from "../utils/Firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () =>{
    const[isSignInForm,setIsSignInForm] = useState(true);
    const[errorMessage ,setErrorMessage]=useState(null);
    const fullName=useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const togleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick =()=>{
        //validate the form data
   const message = checkValidateData(email.current.value,password.current.value);
   setErrorMessage(message);
   if(message) return;//if it has any error message then my program should return from here itself
    if(!isSignInForm){
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
         // Signed up 
        const user = userCredential.user;
        updateProfile(user,{
          displayName:fullName.current.value,
          photoURL:"https://avatars.githubusercontent.com/u/12824231?v=4",
        })
       .then(()=>{
        const {uid,email,displayName,photoURL}=auth.currentUser;
        dispatch(
        addUser({uid : uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
       })
      .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMessage(errorCode +"-"+errorMessage);
    // ..
  });
})
.catch((error)=>{

});
    }
    else{
        signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user loged in"+user)
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage);
  });

    }
   }
 
    
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo" />
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12  bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
            {!isSignInForm && ( 
            <input ref={fullName}  type="text"  placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />)}
            <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
            <input ref={password} type="password" placeholder="Password" className="p-2 my-2  w-full bg-gray-700" />
            <button className="p-4 my-4 bg-red-700 w-full" onClick={handleButtonClick}>{isSignInForm ? "Sign In":"Sign Up"}</button>
            <p className="text-red-500 font-bold p-2 text-lg">{errorMessage}</p>
         <p className="py-4 cursor-pointer" onClick={togleSignInForm}>{isSignInForm ? "new to Netflix? Sign Up Now":"Already Registerd?Sign In Now"}</p>
          </form>
        </div>
    );
}
export default Login;