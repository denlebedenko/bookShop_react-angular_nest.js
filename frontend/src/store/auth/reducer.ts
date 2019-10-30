
import { UserDataModel } from "../../models/user-data.model";

const initialUserData: UserDataModel = {
    username: '',
    role: '',
    token:'',
}

const authReducer = (state: UserDataModel = initialUserData, action: any ) => {
    switch(action.type) {
        case 'USER_AUTH':
            const loggedUser = {
                username: action.payload.username,
                role: action.payload.role,
                token: action.payload.token,
            }
            return loggedUser

        case 'LOG_OUT': 
        return {
            ...state,
            username: '',
            role: '',
            token:'',
        }
        
        default:
            return{
                ...state
            }
    }
}

export default authReducer;