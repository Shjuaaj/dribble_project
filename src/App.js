import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignupPage';
import CreateProfilePage from './components/CreateProfilePage';
import QuestionPage from './components/QuestionPage';
import VerifyEmailPage from './components/VerifyEmailPage';


function App() {
  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/create-profile"  element={<CreateProfilePage/>} />
        <Route path="/questions" element={<QuestionPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
