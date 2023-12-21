import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>

            <h1>It works and you found me!</h1>
            <div className="container-fluid">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />

                </Routes>
            </div>



        </>
    )
}

export default App
