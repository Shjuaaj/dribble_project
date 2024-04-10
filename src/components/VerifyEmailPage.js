import React from 'react';
import { faDribbble, faTwitter, faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSuitcase, faUser, faUpload} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import email from './email.jpg';// Import your logo image
import logo from './icon.png';

function VerifyEmailPage({ profilePic }) {
  console.log(profilePic);
  return (
    <div>
      <header className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-20 mr-2 text-black" /> 
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-400 font-bold hover:text-gray-700">Inspiration</a>
            <a href="#" className="text-gray-400 font-bold hover:text-gray-700">Find Work</a>
            <a href="#" className="text-gray-400 font-bold hover:text-gray-700">Learn Design</a>
            <a href="#" className="text-gray-400 font-bold hover:text-gray-700">Go Pro</a>
            <a href="#" className="text-gray-400 font-bold hover:text-gray-700">Hire Designers</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search" className="py-2 pl-10 pr-4 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-pink-500" />
          </div>
          <FontAwesomeIcon icon={faSuitcase} className="text-gray-600 text-xl" />
          <FontAwesomeIcon icon={faUser} className="text-gray-600 text-xl" />
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
            Upload
          </button>
        </div>
      </header>
      <div class="flex flex-col items-center mt-10 mb-10">
        <h1 class="text-center text-2xl text-black font-bold mb-4">Please verify your email...</h1>
        <div className="relative mt-4">
          <img src={email} alt="c1" style={{ width: '150px', height: 'auto' }} />
        </div>

        <p class="text-center text-gray-600 mt-4">Please verify your email address we have sent a confimation mail to:</p>
        <p class="text-center text-gray-600 font-bold">account@refero.design</p>
        <p class="text-center text-gray-600 mt-4">Click the confirmation link in that email to begin using Dribbble.</p>
        <p class="text-center text-gray-600 mt-4">Didn't receive the email? Check your spam folder, it may have been caught by a filter. If<br></br> you still don't see it you can <span class="text-pink-600 font-bold">resend the confirmation email.</span></p>
        <p class="text-center text-gray-600 mt-4">Wrong email address? <Link to="/" class="text-pink-600 font-bold">Change it.</Link></p>
      </div>



      <footer className="py-8 px-4 md:px-8" style={{ background: 'rgb(251, 251, 251)' }}>


        <div className="container mx-auto">
          <div className="flex justify-between mb-8">
            {/* First Section */}
            <div className="w-2/7">
              
              <img src={logo} alt="Logo" className="w-20 h-20 mr-2 mb-4" /> 
              <p className="text-sm text-gray-600 mb-4">Dribbble is the world's leading <br></br> community for creatives to share, grow,<br></br> and get hired.</p>
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faTwitter} className="text-black text-xl" />
                <FontAwesomeIcon icon={faFacebook} className="text-black text-xl" />
                <FontAwesomeIcon icon={faInstagram} className="text-black text-xl" />
                <FontAwesomeIcon icon={faPinterest} className="text-black text-xl" />
              </div>
            </div>

            {/* Second Section */}
            <div className="w-1/7">
              <h3 className="text-lg font-semibold mb-3">For Designers</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="mb-3">Go Pro!</li>
                <li className="mb-3">Explore Design Work</li>
                <li className="mb-3">Design Block</li>
                <li className="mb-3">Overtime Podcast</li>
                <li className="mb-3">Playoffs</li>
                <li className="mb-3">Weekly Warm Up</li>
                <li className="mb-3">Refer a Friend</li>
                <li className="mb-3">Code of Conduct</li>
              </ul>
            </div>
            {/* Third Section */}
            <div className="w-1/7">
              <h3 className="text-lg font-semibold mb-3">Hire Designers</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="mb-3">Post a job opening</li>
                <li className="mb-3">Post a freelance<br></br>project</li>
                <li className="mb-3">Search for designers</li>
                <h3 className="text-lg font-semibold mb-3">Brands</h3>
                <li className="mb-3">Advertise with us</li>
              </ul>
            </div>
            {/* Fourth Section */}
            <div className="w-1/7">
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="mb-3">About</li>
                <li className="mb-3">Carrers</li>
                <li className="mb-3">Support</li>
                <li className="mb-3">Media Kit</li>
                <li className="mb-3">Testimonials</li>
                <li className="mb-3">API</li>
                <li className="mb-3">Terms of Service</li>
                <li className="mb-3">Privacy Policy</li>
                <li className="mb-3">Cookie Policy</li>
              </ul>
            </div>
            {/* Fifth Section */}
            <div className="w-1/7">
              <h3 className="text-lg font-semibold mb-3">Directories</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="mb-3">Designer Jobs</li>
                <li className="mb-3">Designers for Hire</li>
                <li className="mb-3">Freelance designers<br></br>for hire</li>
                <li className="mb-3">Tags</li>
                <li className="mb-3">Places</li>
                <h3 className="text-lg font-semibold mb-3">Design assests</h3>
                <li className="mb-3">Dribble Marketplace</li>
                <li className="mb-3">Creative Market</li>
                <li className="mb-3">Font Spring</li>
                <li className="mb-3">Font Squirrel</li>
              </ul>
            </div>
            {/* Sixth Section */}
            <div className="w-1/7">
              <h3 className="text-lg font-semibold mb-3">Design Resources</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="mb-3">Freelancing</li>
                <li className="mb-3">Design Hiring</li>
                <li className="mb-3">Design Portfolio</li>
                <li className="mb-3">Design Education</li>
                <li className="mb-3">Creative Process</li>
                <li className="mb-3">Design industry <br></br>trends</li>
              </ul>
            </div>

          </div>
        </div>
        <hr className="border-gray-700 border-opacity-20" />
        {/* Bottom content */}
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="text-gray-600 ">
            @2023 Dribbble. All Rights Reserved.
          </div>
          <div className="text-gray-600  flex items-center space-x-2">
            <span><span className="text-black font-bold">20,501,853 </span>shots dribbled</span>
            <FontAwesomeIcon icon={faDribbble} className="text-pink-500 text-xl" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default VerifyEmailPage;


