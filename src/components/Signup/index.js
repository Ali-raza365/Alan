import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../Context";
import { auth } from '../../firebase'
const SignUp = () => {
     const authContext = useContext(AuthContext);
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState(null);
     const history = useHistory()
     const createUserWithEmailAndPasswordHandler = (event,) => {
          event.preventDefault();
          console.log('sdasdads')
          if (email && password) {
               auth.createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                         // Signed in 
                         authContext.setUser(userCredential);
                         localStorage.setItem('user', userCredential);
                         setEmail("");
                         setPassword("");
                         history.push('/')
                         // ...
                    })
                    .catch((error) => {
                         var errorCode = error.code;
                         var errorMessage = error.message;
                         console.log(error)
                         alert(errorMessage)
                    });

          } else {
               alert('Please enter your email and password')
          }

     };
     return (
          <>
               {/* Responsive Desktop/Mobile Login form considered to be used as mobile first approach*/}
               {/* Wave animation credit: https://codepen.io/goodkatz */}
               <div className="header">
                    {/*Content before waves*/}
                    <div className="inner-header flex">
                         {/*Just the logo.. Don't mind this*/}
                         <h3>Sign Up</h3>
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
                              type="text"
                              value={email}
                              placeholder="Enter your email address"
                              onfocus="this.placeholder = ''"
                              onblur="this.placeholder = 'Username'"
                              onChange={(evt) => { setEmail(evt.target.value) }}
                         />
                         <input
                              type="password"
                              value={password}
                              placeholder="Enter your password"
                              onfocus="this.placeholder = ''"
                              onblur="this.placeholder = 'Password'"
                              onChange={(evt) => { setPassword(evt.target.value) }}
                         />
                         <button className="login-btn" onClick={(evt) => {
                              createUserWithEmailAndPasswordHandler(evt)
                         }}>Sign Up</button>
                    </form>
                    <div className="bottom-container">
                         <p>All ready have a Account?</p>
                         <Link to="/signin">Sign In!</Link>
                         <div>{/*Content ends*/}</div>
                    </div>
               </div>
          </>
     );
};
export default SignUp;