import React, { useState, useContext } from 'react'
import classes from './Auth.module.css'
import { Link, useNavigate, useLocation} from 'react-router-dom';
import {auth} from '../../Utility/firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { DataContext} from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/actiontype';
import { ClipLoader } from "react-spinners";


function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");
  const [error, setError]= useState("");
  const [loading, setLoading] = useState({
    signIn:false,
    signUp:false

  })

  const navStateData = useLocation()
  console.log(navStateData)

  const [{user}, dispatch] = useContext(DataContext)
  const navigate = useNavigate()
  console.log(user);

  const authHandler= async(e)=>{
  e.preventDefault();
  console.log(e.target.name)

  if(e.target.name == "signIn"){
    //firebase auth
    setLoading({...loading, signIn:true})
    signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
      //console.log(userInfo)
      dispatch({
        type:Type.SET_USER,
        user:userInfo.user
      })
      setLoading({...loading, signIn:false});
      navigate(navStateData?.state?.redirect ||"/");
    })
    .catch((err)=>{
     
      setError(err.message)
       setLoading({ ...loading, signIn: false });
    });
  }else{
    setLoading({ ...loading, signUp: true });
    createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
      //console.log(userInfo)
      
      dispatch({
        type:Type.SET_USER,
        user:userInfo.user,
      })
      setLoading({ ...loading, signUp:false });
      navigate(navStateData?.state?.redirect || "/");
    })
    .catch((err)=>{
      setError(err.message);
      setLoading({ ...loading, signUp: false });
    });
  
  }
  };


  //console.log(email,password)
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG2.png" alt="" />
      </Link>
      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small style={{ padding: "5px", textAlign: "center", color: "red", fontWeight:"bold" }}>
            {navStateData?.state?.msg}
          </small>
        )}

        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            name="signIn"
            onClick={authHandler}
            className={classes.logIn_signIn_Button}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          </button>
        </form>
        {/* { argeement} */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>

        {/* Create account btn */}
        <button
          type="submit"
          onClick={authHandler}
          className={classes.login_registerButton}
          name="sinUp"
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button>

        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;