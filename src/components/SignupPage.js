import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sideImage from './sideimage.jpg';

function SignupPage() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

  const isFormValid = name !== '' && username !== '' && email !== '' && password !== '' && isChecked && validEmail;

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    // Here you should check if the newUsername is already taken (For demo purposes, I'll assume it's already taken if it's "John")
    if (newUsername.toUpperCase() === 'JOHN') {
      setUsernameTaken(true);
    } else {
      setUsernameTaken(false);
    }
    setUsername(newUsername);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setValidEmail(validateEmail(newEmail));
    setEmail(newEmail);
  };

  return (
    <div className="flex h-screen">
      {/* Image Section */}
      <div className="w-1/3 bg-cover bg-center" style={{ backgroundImage: `url(${sideImage})`}}>
       
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center  items-center w-2/3 p-8 relative">
        
        <form className="max-w-md w-full ">
        <div className="text-left mb-8">
          <h2 className=" text-3xl font-bold ">Sign up to Dribbble</h2>
          {usernameTaken && <p className="text-red-500"> *Username has already been taken.</p>}
        </div>
          <div className="mb-4 flex">
            <div className="w-1/2 pr-2">
              <label htmlFor="name" className="block font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg bg-gray-200" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="username" className="block font-bold mb-2">Username</label>
              <input type="text" id="username" name="username" className="w-full px-4 py-2 border rounded-lg bg-gray-200" placeholder="Enter your username" onChange={handleUsernameChange} value={username} />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className={`w-full px-4 py-2 border rounded-lg bg-gray-200 ${!validEmail ? 'border-red-500' : ''}`} placeholder="Enter your email" onChange={handleEmailChange} />
            {!validEmail && <p className="text-red-500">Please enter a valid email address.</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg bg-gray-200" placeholder="6+ characters" onChange={(e) => setPassword(e.target.value)} />
          </div>
         
          <div className="mb-4 text-m">
            <input type="checkbox" id="terms-checkbox" className="mr-2" checked={isChecked} onChange={handleCheckboxChange} />
            <label htmlFor="terms-checkbox" className="text-gray-500">Creating an account means you are okay with our <Link to="/" className=" text-blue-500 hover:underline">Terms of Service</Link>, <Link to="/" className=" text-blue-500 hover:underline">Privacy Policy</Link>, and our default <Link to="/" className=" text-blue-500 hover:underline">Notification Settings</Link>.</label>
          </div>
          <div className="absolute top-0 right-0 mt-4" style={{ marginRight: "3rem" }}>
            Already a member? {window.location.pathname === '/' && <Link to="/" className="text-blue-500 hover:underline"> Sign in</Link>}
          </div>
          <Link to={isFormValid ? "/create-profile" : "/signup"} className={`w-1/2 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 block text-center ${!isFormValid && "opacity-50 cursor-not-allowed"}`}>
            Create Account
          </Link>
          <div className="mt-4 text-xs text-gray-400">
            This site is protected by reCAPTCHA and the Google <br/><Link to="/" className="text-blue-500 hover:underline">Privacy Policy</Link> and <Link to="/" className="text-blue-500 hover:underline">Terms of Service</Link> apply
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;




