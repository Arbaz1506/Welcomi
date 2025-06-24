import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {


  const [isLoggedIn, setLoggedin] = useState(false);
  const [username, setUsername] = useState('');


  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setLoggedin={setLoggedin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setLoggedin={setLoggedin} setUsername= {setUsername} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard  username={username}/> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>



        <ToastContainer />



    </div>
  );
}

export default App;
