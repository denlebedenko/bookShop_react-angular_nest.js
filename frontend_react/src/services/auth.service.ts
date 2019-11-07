import axios, { AxiosResponse } from 'axios';
import { UserLoginModel, UserRegisterModel } from '../models';
import { UserDataModel } from '../models/user-data.model';
import { Environment } from '../environment/environment';


const config = new Environment();
export default class AuthService { 
    authUser = async(payload: UserLoginModel) => {
        const response: AxiosResponse<UserDataModel> = await axios.post<UserLoginModel, AxiosResponse<UserDataModel>>(`${config.REACT_APP_SIGNIN_USER}`, payload);
        return response.data;
    }

    registerUser = async(payload: UserRegisterModel) => {
        const response: AxiosResponse<UserDataModel> = await axios.post<UserRegisterModel, AxiosResponse<UserDataModel>>(`${config.REACT_APP_REGISTRATION_USER}`, payload);
        return response.data;
    }
}