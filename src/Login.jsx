import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/");
    }
  });

  const onLogin = () => {
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("token", userCredential._tokenResponse.idToken);
        navigate("/");
      })
      .catch((e) => alert(e.message))
      .finally(() => setLoading(false));
  };
  console.log(getAuth().currentUser);

  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-500 via-red-300 to-pink-300 flex justify-center items-center">
      <div className="w-96 bg-white shadow-lg">
        <div className="m-5">
          <label className="block text-xl font-bold mb-2">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            className="border-grey-200 border-2 rounded w-full p-2 h-10"
          />
        </div>
        <div className="m-5">
          <label className="block text-xl font-bold mb-2">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            className="border-grey-200 border-2 rounded w-full p-2 h-10"
          />
        </div>
        <div className="m-5">
          <button
            onClick={onLogin}
            className="bg-gradient-to-r from-blue-500 via-red-300 to-pink-300 text-white px-10 py-2 rounded text-xl font-bold"
          >
            {loading ? "Logging you in..." : "Login"}
          </button>
        </div>
        <div className="m-5">
          <Link to="/Signup">Don't have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import { useState } from 'react';
// import './login.scss';
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from './firebaseAuth';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
// import { useStateValue } from './StateProvider';

// const Login = () => {
//   const navigate = useNavigate();
//   const app = initializeApp(firebaseConfig);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const auth = getAuth();
//   const { myReducer } = useStateValue();
//   const [, dispatch ] = myReducer;

//   const signIn = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//     .then( auth => {
//       if(auth){
//         dispatch({
//           type:'SIGN_IN',
//           payload:auth
//         })
//         navigate('/');
//       }
//     })
//     .catch( error => alert(error.message));
//   }

//   const register = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//     .then( auth => {
//       if(auth){
//         navigate('/');
//       }
//     })
//     .catch( error => alert(error.message));
//   }

//   return <div className="login">

//     <form className="container">
//       <h1>Sign-In</h1>
//       <label>
//         Email <br/>
//         <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
//       </label>
//       <br/>
//       <label>
//         Password <br/>
//         <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
//       </label>
//       <br/>
//       <button onClick={signIn}>Login</button>
//       <hr/>
//       <h1>Don't have account</h1>
//       <button onClick={register}>Sign Up</button>
//     </form>
//   </div>
// }

// export default Login;

// import React, { useState } from 'react'
// import './login.css';
// import {initializeApp} from 'firebase/app';

// const Login = () => {
//   const[email, setEmail] = useState('');
//   const[password, setPassword] = useState('');

//   const signIn = (e) => {
//     e.preventDefault();
//   }
//   const register = (e) => {
//     e.preventDefault();
//   }

//   return <div className='login'>

//     <form className='container'>
//       <h1>
//         Sign-In
//       </h1>
//       <label>Email <br />
//       <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
//      </label>
//      <br />
//       <label>Password <br />
//       <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
//      </label>
//      <br />
//      <button onClick={signIn}>Login</button>
//      <hr />
//      <h1>
//       Dont't have account
//      </h1>
//      <button onClick={register}>Sign Up</button>

//     </form>
//   </div>

// }

// export default Login
