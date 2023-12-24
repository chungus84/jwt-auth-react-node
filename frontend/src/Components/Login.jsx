import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ loginFunc }) => {

    const [submitted, setSubmitted] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // console.log(loginFunc);

    const submitLogin = (email, password) => {
        const loginToSubmit = {
            email: email,
            password: password
        }
        loginFunc(loginToSubmit)
        setSubmitted(true)
    }

    const handleSubmit = event => {
        event.preventDefault();
        submitLogin(email, password);
        setEmail("");
        setPassword("");
    }

    useEffect(() => {
        if (submitted) navigate('/');
    }, [submitted, navigate])



    return (
        <>
            <h1>Login</h1>
            <form aria-label="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} placeholder="email" className="form-control" onChange={event => { setEmail(event.target.value) }} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="email" value={password} placeholder="password" className="form-control" onChange={event => { setPassword(event.target.value) }} />
                </div>

                <div className="form-group">
                    <input type="submit" value="Submit" className="form-control mt-3" />
                </div>


            </form>
        </>

    )
}

export default Login
