import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../Context";
import { auth } from '../../firebase'
import './styles.css'
const SignIn = () => {
     const history = useHistory()
     const authContext = useContext(AuthContext);
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState(null);

     const signInWithEmailAndPasswordHandler = (event) => {
          event.preventDefault();
          if (email && password) {
               auth.signInWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                         var user = userCredential.user;
                         localStorage.setItem('user', userCredential);
                         console.log(user)
                         authContext.setUser(userCredential);
                         history.push('/')
                    })
                    .catch((error) => {
                         var errorCode = error.code;
                         var errorMessage = error.message;
                         if (errorCode === "auth/user-not-found") {
                              return alert("User Not Found")
                         }
                         alert(errorMessage)
                    });
          } else {
               alert('Please enter your email and password')
          }
     };

     const onChangeHandler = (event) => {
          console.log(event)
          const { name, value } = event.currentTarget;

          if (name === 'email') {
               setEmail(value);
          }
          else if (name === 'password') {
               setPassword(value);
          }
     };

     return (<>
          {/* Responsive Desktop/Mobile Login form considered to be used as mobile first approach*/}
          {/* Wave animation credit: https://codepen.io/goodkatz */}
          <div className="header">
               {/*Content before waves*/}
               <div className="inner-header flex">
                    {/*Just the logo.. Don't mind this*/}
                    <h3>Sign In</h3>
               </div>
               {/*Waves Container*/}
               <div>
                    <svg
                         className="waves"
                         xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink"
                         viewBox="0 24 150 28"
                         preserveAspectRatio="none"
                         shapeRendering="auto"
                    >
                         <defs>
                              <path
                                   id="gentle-wave"
                                   d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                              />
                         </defs>
                         <g className="parallax">
                              <use
                                   xlinkHref="#gentle-wave"
                                   x={48}
                                   y={0}
                                   fill="rgba(255,255,255,0.7"
                              />
                              <use
                                   xlinkHref="#gentle-wave"
                                   x={48}
                                   y={3}
                                   fill="rgba(255,255,255,0.5)"
                              />
                              <use
                                   xlinkHref="#gentle-wave"
                                   x={48}
                                   y={5}
                                   fill="rgba(255,255,255,0.3)"
                              />
                              <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
                         </g>
                    </svg>
               </div>
               {/*Waves end*/}
          </div>
          {/*Header ends*/}
          {/*Content starts*/}
          <div className="content flex">
               <form>
                    <input
                         name='email'
                         type="text"
                         placeholder="Enter your email address"
                         value={email}
                         onChange={(evt) => { onChangeHandler(evt) }}

                    />
                    <input
                         name='password'
                         type="password"
                         value={password}
                         placeholder="Enter your password"
                         onChange={(evt) => { onChangeHandler(evt) }}

                    />
                    <button className="login-btn" onClick={(evt) => { signInWithEmailAndPasswordHandler(evt) }}>Sign In</button>
               </form>
               <div className="bottom-container">
                    <p>Not registered with us?</p>
                    <Link to="/Signup">Sign Up!</Link>
                    <div>{/*Content ends*/}</div>
               </div>
          </div>
     </>
     );
};
export default SignIn;