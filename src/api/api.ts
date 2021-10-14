import axios from "axios";
import {ProfileType} from "../types/types";


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'caaeedb3-fe3c-454c-9b24-259eac0f5662'
    }
});


export enum ResultCodexEnum {
    Success = 0,
    Error = 1
}



type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodexEnum
    messages: Array<string>
}


type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodexEnum
    messages: Array<string>
}


export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        )
            .then(response => {
                return response.data;
            });
    },
    getMe() {
        return instance.get<MeResponseType>(`auth/me`,
        )
            .then(response => {
                return response.data;
            });
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe}
        )
            .then(response => {
                return response.data;
            });
    },
    logout() {
        return instance.delete(`auth/login`,
        )
            .then(response => {
                return response.data;
            });
    },

    delete(id: number) {
        return instance.delete(`follow/${id}`,
        )
            .then(response => {
                return response.data;
            });
    },
    post(id: number) {
        return instance.post(`follow/${id}`,
        )
            .then(response => {
                return response.data;
            });
    },
    getProfile(userId: number) {
        return instance.get(`profile/` + userId
        )
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status});
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile/`, profile)
    },
    getCaptcha() {
        return instance.get(`security/get-captcha-url/`);

    }
}






