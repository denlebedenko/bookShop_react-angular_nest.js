import { UserDataModel } from "../../models/user-data.model";
import TokenStorage from "../../services/token.storage";

const tokenStorage = new TokenStorage();

const token: any = tokenStorage.getToken();
const userData: any = token ? tokenStorage.getData(token) : null;

const initialUserData: UserDataModel = {
    username: userData ? userData.username : '',
    role: userData ? userData.role : '',
    token: token ? token : '',
}


const authReducer = (state: UserDataModel = initialUserData, action: any ) => {
    switch(action.type) {
        case 'USER_AUTH':
        const loggedInUser = {
            username: action.payload.username,
            role: action.payload.role,
            token: action.payload.token,
        }
        return loggedInUser

        case 'LOG_OUT': 
        const loggedOutUser = {
            ...state,
            username: '',
            role: '',
            token:'',
        }
        return loggedOutUser


        
        default:
            return{
                ...state
            }
    }
}



export  { authReducer }