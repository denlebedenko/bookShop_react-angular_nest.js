import axios, { AxiosResponse } from 'axios';
import { UserLoginModel, UserRegisterModel } from '../models';
import { UserDataModel } from '../models/user-data.model';



export default class AuthService { 
    authUser = async(payload: UserLoginModel) => {
        const response: AxiosResponse<UserDataModel> = await axios.post<UserLoginModel, AxiosResponse<UserDataModel>>('http://localhost:80/api/login', payload);
        return response.data;
    }

    registerUser = async(payload: UserRegisterModel) => {
        const response: AxiosResponse<UserDataModel> = await axios.post<UserRegisterModel, AxiosResponse<UserDataModel>>('http://localhost:80/api/register', payload);
        return response.data;
    }
}