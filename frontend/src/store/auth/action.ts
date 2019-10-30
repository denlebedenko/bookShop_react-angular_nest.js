import { UserDataModel } from "../../models/user-data.model";

const authUser = (loginData: UserDataModel) => ({
    type:'USER_AUTH',
    payload: loginData,
});


export {
    authUser
};