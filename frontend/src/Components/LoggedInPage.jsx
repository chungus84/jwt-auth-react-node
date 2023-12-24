import { getCurrentUser } from "../asyncFunctions/helperFunctions"

const LoggedInPage = () => {

    const currentUser = getCurrentUser();
    console.log(currentUser);
    return (
        <>
            <h2>LoggedInPage</h2>
            <p>{currentUser._id}</p>
            <p>{currentUser.userName}</p>
            <p>{currentUser.accessToken}</p>

        </>

    )
}

export default LoggedInPage
