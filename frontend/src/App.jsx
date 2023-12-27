import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './Components/Home'
import Login from './Components/Login'
import SignUp from './Components/SignUp';
import Header from './Components/Header';
import LoggedInPage from './Components/LoggedInPage.jsx';
import './App.css'
import { loginUser, getProfile, logOutUser } from './asyncFunctions/apiCalls.js';
import { getCurrentUser, logout } from './asyncFunctions/helperFunctions.js';

function App() {

    const [user, setUser] = useState(undefined);
    const [error, setError] = useState("");
    const [login, setLogin] = useState(false);
    const [posts, setPosts] = useState("")

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
        // console.log(loginCall);
        if (loginCall.userName) {
            setUser(loginCall);

            setLogin(true);
            getPostsHandler()
        }


    }

    const getPostsHandler = async () => {
        const externalDataCall = await getProfile();
        // console.log(externalDataCall);
        // console.log(externalDataCall.data[0].title);
        if (externalDataCall.data[0]?.title) {
            setPosts(externalDataCall.data[0].title)
            // console.log(posts);
        }
    }

    const logOut = () => {
        const currentUser = getCurrentUser()
        // console.log(user);
        logOutUser(currentUser)
        logout();
    }


    useEffect(() => {

        const currentUser = getCurrentUser()
        console.log(currentUser);

        // console.log(profile);
        if (currentUser) {
            setUser(currentUser);
            getPostsHandler()




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
                    <Route path="/profile" element={<LoggedInPage data={posts} />} />

                </Routes>
                {/* {login && <LoggedInPage />} */}
            </div>



        </>
    )
}

export default App
