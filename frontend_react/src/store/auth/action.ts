import { UserDataModel } from "../../models/user/user-data.model";

const authUser = (loginData: UserDataModel) => ({
    type: 'USER_AUTH',
    payload: loginData,
});

const logOut = () => ({
    type: 'LOG_OUT',
});


export {
    authUser,
    logOut,
};