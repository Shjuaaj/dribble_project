import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck ,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import icon1 from '../components/icon1.png';
import icon2 from '../components/icon2.png';
import icon3 from '../components/icon3.png';
import logo from './icon.png'

function QuestionPage() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [continueButtonColor, setContinueButtonColor] = useState('bg-pink-200');

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
      if (selectedOptions.length === 1) {
        setContinueButtonColor('bg-pink-200');
      }
    } else {
      setSelectedOptions([...selectedOptions, option]);
      setContinueButtonColor('bg-pink-600');
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
       <img src={logo} alt="Logo" className="absolute top-0 left-0 w-20 h-20 ml-4" /> 
       <Link to="/create-profile" className="absolute left-0 top-0 ml-32 mt-6">
          <FontAwesomeIcon icon={faArrowLeft} className="text-gray-600 text-2xl" />
        </Link>
      <div className="text-center">
        {/* Heading and Subheading */}
        <div className="mb-10" style={{ marginBottom: '8rem' }}>
          <h2 className="text-4xl font-bold mb-4">What brings you to Dribbble?</h2>
          <p className="text-lg text-gray-600">Select the options that best describe you. Don't worry, you can explore other options later.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-8" style={{ width: '80vw', maxWidth: '960px' }}>
          {/* Card 1 */}
          <div className={`option-card border rounded-lg p-4 cursor-pointer flex flex-col border-gray-300 ${selectedOptions.includes(1) ? 'border-pink-600' : ''}`} onClick={() => handleOptionClick(1)}>
            <img src={icon1} alt="c1" className={`mb-2 mx-auto w-full h-auto transition-transform transform ${selectedOptions.includes(1) ? '-translate-y-12' : ''}`} style={{ marginTop: selectedOptions.includes(1) ? '-4rem' : '0' }} />
            <div className="option-content flex-grow">
              <p className="font-bold mb-2">I'm a designer looking to share my work</p>
              {selectedOptions.includes(1) && (
                <p className="text-sm text-gray-500">With over 7 million shots from a vast community of designers, Dribbble is the leading source for design sharing.</p>
              )}
            </div>
            <div className="checkbox-container flex justify-center items-center">
              <div className={`checkbox w-6 h-6 rounded-full border border-black ${selectedOptions.includes(1) ? 'bg-pink-500 border-pink-500' : 'bg-white'}`}>
                {selectedOptions.includes(1) && (
                  <FontAwesomeIcon icon={faCheck} className="checkmark text-white" />
                )}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`option-card border rounded-lg p-4 cursor-pointer flex flex-col border-gray-300 ${selectedOptions.includes(2) ? 'border-pink-600' : ''}`} onClick={() => handleOptionClick(2)}>
          <img src={icon2} alt="c2" className={`mb-2 mx-auto w-full transition-transform transform ${selectedOptions.includes(2) ? '-translate-y-12' : ''}`} style={{ marginTop: selectedOptions.includes(2) ? '-4rem' : '0', height: '178px' }} />

            <div className="option-content flex-grow">
              <p className="font-bold mb-2">I'm a developer seeking inspiration</p>
              {selectedOptions.includes(2) && (
                <p className="text-sm text-gray-500">Find your next side project or career opportunity with Dribbble's vast collection of design resources.</p>
              )}
            </div>
            <div className="checkbox-container flex justify-center items-center">
              <div className={`checkbox w-6 h-6 rounded-full border border-black ${selectedOptions.includes(2) ? 'bg-pink-500 border-pink-500' : 'bg-white'}`}>
                {selectedOptions.includes(2) && (
                  <FontAwesomeIcon icon={faCheck} className="checkmark text-white" />
                )}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`option-card border rounded-lg p-4 cursor-pointer flex flex-col border-gray-300 ${selectedOptions.includes(3) ? 'border-pink-600' : ''}`} onClick={() => handleOptionClick(3)}>
            <img src={icon3} alt="c3" className={`mb-2 mx-auto w-full h-auto transition-transform transform ${selectedOptions.includes(3) ? '-translate-y-12' : ''}`} style={{ marginTop: selectedOptions.includes(3) ? '-4.5rem' : '0' }} />
            <div className="option-content flex-grow">
              <p className="font-bold mb-2">I'm here to find design inspiration</p>
              {selectedOptions.includes(3) && (
                <p className="text-sm text-gray-500">Discover the latest trends and connect with other creatives through Dribbble's vibrant community.</p>
              )}
            </div>
            <div className="checkbox-container flex justify-center items-center">
              <div className={`checkbox w-6 h-6 rounded-full border border-black ${selectedOptions.includes(3) ? 'bg-pink-500 border-pink-500' : 'bg-white'}`}>
                {selectedOptions.includes(3) && (
                  <FontAwesomeIcon icon={faCheck} className="checkmark text-white" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Continue and Anything Else */}
        <div>
          
          {(selectedOptions.length > 0 && selectedOptions.length < 3) && (
            <p className="text-lg font-bold mt-6">Anything else? You can select multiple</p>
          )}
          <Link to="/verify-email" className={`text-white py-2 px-6 rounded-lg mt-4 hover:bg-pink-700 inline-block ${continueButtonColor}`}>
            Finish
          </Link>
          {(selectedOptions.length > 0) && (
            <>
              <p className="text-gray-400 font-bold mt-4 cursor-pointer" onClick={() => window.history.back()}>or Press Return</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;









