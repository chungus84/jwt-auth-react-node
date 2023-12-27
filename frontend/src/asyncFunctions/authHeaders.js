export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem(`user`));
    // console.log(user);

    if (user && user.accessToken) {
        return {
            "_id": user._id,
            "userName": user.userName,
            "accessToken": user.accessToken,
            "refreshToken": user.refreshToken
        }
    } else {
        return {};
    }
}
