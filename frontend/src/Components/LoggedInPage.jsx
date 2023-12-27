import { getCurrentUser } from "../asyncFunctions/helperFunctions"

const LoggedInPage = ({ data }) => {
    // console.log(data);

    const currentUser = getCurrentUser();
    // console.log(currentUser);
    return (
        <>
            <h2>LoggedInPage</h2>
            <p>{currentUser._id}</p>
            <p>{currentUser.userName}</p>
            <p>{currentUser.accessToken}</p>
            <p>{data}</p>

        </>

    )
}

export default LoggedInPage
