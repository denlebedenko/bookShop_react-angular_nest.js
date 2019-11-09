import { ErrorRegisterDataModel } from './error-register-data.model.model'

export interface RegistrationModel {
    email: null,
    password: null,
    username: null,
    errors: ErrorRegisterDataModel;
}