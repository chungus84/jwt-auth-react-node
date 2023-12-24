import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import Header from './Components/Header';
import LoggedInPage from './Components/LoggedInPage.jsx';
import './App.css'
import { loginUser } from './asyncFunctions/apiCalls.js';
import { getCurrentUser, logout } from './asyncFunctions/helperFunctions.js';

function App() {

    const [user, setUser] = useState(undefined);
    const [error, setError] = useState("");
    const [login, setLogin] = useState(false);

    const navigate = useNavigate();

    const loginHandler = async (user) => {
        const externalDataCall = await loginUser(user);
        if (localStorage.getItem(`user`)) { navigate('/profile') }
        if (externalDataCall?.error) {
            const errorObject = { ...externalDataCall.error };
            errorObject.message = `There was a problem logging in ${externalDataCall.error.message}`;
            setError(errorObject)
        }
        const loginCall = externalDataCall?.user ? externalDataCall.user : {};
        console.log(loginCall);
        if (loginCall.userName) {
            setUser(loginCall);

            setLogin(true);
        }


    }

    const logOut = () => {
        logout();
    }

    useEffect(() => {

        const currentUser = getCurrentUser()
        if (currentUser) {
            setUser(currentUser);
        }
    }, [])



    return (
        <>

            <h1>It works and you found me!</h1>
            <div className="container-fluid">
                <Header currentUser={user} logOut={logOut} />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login loginFunc={loginHandler} />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={<LoggedInPage />} />

                </Routes>
                {/* {login && <LoggedInPage />} */}
            </div>



        </>
    )
}

export default App
