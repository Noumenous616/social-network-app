import {ResultCodexEnum, userAPI} from "../api/api";
import {toggleIsFetching} from "./users-reducer";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL';




let initialState = {

    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isFetching: true as boolean,
    isAuth: false as boolean,
    captchaUrl: null
};

export type InitialStateType = typeof initialState;


const authReducer = (state = initialState,action: any): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.data
            }

            default:
            return state;
    }
}

type SetAuthUserDataActionDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean

}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    data: SetAuthUserDataActionDataType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});

type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL
    captchaUrl: null
}
export const getCaptchaUrlSuccess = (captchaUrl: null): GetCaptchaUrlSuccessType => ({type: GET_CAPTCHA_URL, captchaUrl});




export const getAuthUserData = () =>
    async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        let data = await userAPI.getMe();
            dispatch(toggleIsFetching(false));
            if (data.resultCode === ResultCodexEnum.Success) {
                let {id, email, login} = data.data;
                dispatch( setAuthUserData(id, email, login, true));
            }
}

export const login = (email: string, password: string, rememberMe: any) => async (dispatch: any) => {
    let data = await userAPI.login(email, password, rememberMe);
    if (data.resultCode === ResultCodexEnum.Success) {
        dispatch(getAuthUserData());
    } else {
        if (data.resultCode === ResultCodexEnum.Error) {
            dispatch(getCaptchaUrl());
        }
        let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: errorMessage}));
    }
}
export const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await userAPI.getCaptcha();
    const captchaUrl = data.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch: any) => {
        let data = await userAPI.logout();
            if (data.resultCode === 0) {
                dispatch( setAuthUserData(null , null, null, false));
            }
}







export default authReducer;