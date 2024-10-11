import React, { useState } from 'react';
import { auth } from '../firebase';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupHandler = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log("User signed up:", userCredential.user);
      })
      .catch(error => {
        console.error("Error during sign up:", error);
      });
  };

  const loginHandler = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log("User logged in:", userCredential.user);
      })
      .catch(error => {
        console.error("Error during login:", error);
      });
  };

  return (
    <div>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signupHandler}>Sign Up</button>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Auth;
