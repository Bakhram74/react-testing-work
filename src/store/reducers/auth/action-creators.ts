import {IUser} from "../../../models/IUser";
import {AuthActionEnum} from "./types";
import {AppDispatch} from "../../store";
import axios from "axios";

export const AuthActionCreators = {
    setIsAuth: (auth: boolean) => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setUser: (user: IUser) => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsLoading: (isLoading: boolean) => ({type: AuthActionEnum.SET_IS_LOADING, payload: isLoading}),
    setError: (error: string) => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    login: (userName: string, password: string) =>(dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json')
                const mockUsers = response.data.find(user => user.userName === userName && user.password === password)
                if (mockUsers) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('userName', mockUsers.userName)
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(mockUsers))
                } else {
                    dispatch(AuthActionCreators.setError("Not correct login or email"))
                }
            },3000)
        } catch (e) {
            dispatch(AuthActionCreators.setError("Error on login"))
        }
    },
    loginOut: () =>(dispatch: AppDispatch) =>{
        localStorage.removeItem('auth')
        localStorage.removeItem('userName')
        dispatch(AuthActionCreators.setIsAuth(false))
        dispatch(AuthActionCreators.setUser({} as IUser))
    }
}