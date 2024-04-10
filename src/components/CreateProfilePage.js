import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './icon.png'; // Import your logo image

function CreateProfilePage() {
  const fileInputRef = useRef(null);
  const [avatarImage, setAvatarImage] = useState(null);
  const [location, setLocation] = useState('');
  const [isNextButtonActive, setIsNextButtonActive] = useState(false);

  useEffect(() => {
    // Check if both avatarImage and location are added
    setIsNextButtonActive(avatarImage !== null && location.trim() !== '');
  }, [avatarImage, location]);

  const handleChooseImage = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatarImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleNextButtonClick = () => {
    if (isNextButtonActive) {
      // Navigate to '/verify-email' page
      window.location.href = '/questions';
    }
  };

  const handleReturnClick = () => {
    // Navigate to the previous page
    window.history.back();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNextButtonClick();
    }
  };

  return (
    <div className="relative flex h-screen justify-center items-center">
      <img src={logo} alt="Logo" className="absolute top-0 left-0 w-20 h-20 ml-4" /> 
      <div className="flex flex-col w-1/2 p-8">
        <div className="mb-8">
          <div className="flex flex-col w-full">
            <h2 className="text-4xl font-bold ml-0 mb-4">Welcome! Let's create your profile</h2>
            <p className="text-1xl text-gray-600">Let others get to know you better! You can do these later</p>
          </div>
        </div>
        <p className="text-lg font-bold mb-4">Add an avatar</p>
        <div className="mb-8 mt-3 flex flex-row">
          <div className="relative w-44 h-44 rounded-full flex mb-4 mr-4 border-dotted border-gray-400 border-4 overflow-hidden">
            {avatarImage && <img src={avatarImage} alt="Avatar" className="w-full h-full object-cover" />}
            <input ref={fileInputRef} type="file" className="absolute opacity-0 w-full h-full cursor-pointer" onChange={handleFileChange} />
          </div>
          <div className="flex flex-col mt-6 ml-4">
            <button onClick={handleChooseImage} className="mb-4 text-sm bg-white text-black py-2 px-4 rounded-lg hover:bg-white w-2/3 border border-gray-400 font-bold">
              Choose Image
            </button>
            <p className="text-sm text-gray-400 font-bold">{'>'} Or choose one of our defaults</p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-2">Add a location</h3>
          <input type="text" placeholder="Enter your location" value={location} onChange={handleLocationChange} className="border-b-2 border-l-0 border-r-0 border-t-0 w-9/12 outline-none focus:border-gray-400" onKeyPress={handleKeyPress} />
        </div>
        {isNextButtonActive ? (
          <div className="w-1/3 mt-3 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 block text-center cursor-pointer" onClick={handleNextButtonClick}>
            Next
          </div>
        ) : (
          <div className="w-1/3 mt-3 bg-pink-200 text-white py-2 rounded-lg opacity-50 block text-center">
            Next
          </div>
        )}
        {isNextButtonActive && (
          <p className="text-sm text-gray-400 font-bold mt-2" onClick={handleReturnClick} style={{ cursor: 'pointer' }}>or Press RETURN</p>
        )}
      </div>
    </div>
  );
}

export default CreateProfilePage;
























