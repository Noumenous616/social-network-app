
import {userAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotoType, PostsType, ProfileType, ContactsType} from "../types/types";


const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'




let initialState = {

        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 25},
            {id: 2, message: "It's my first post", likesCount: 25},
            {id: 2, message: "It's my first post", likesCount: 25},
            {id: 2, message: "It's my first post", likesCount: 25}
        ] as Array<PostsType>,
        profile: null as ProfileType | null,
        status: "",
        newPostText: ''

};

export type initialStateType = typeof initialState;


const profileReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case ADD_POST: {

            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostBody, likesCount: 0}],
                newPostText: ''
            }

            /*let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;*/
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos } as ProfileType
            }
        }



        default:
            return state;
    }
}

type ActionsType = addPostActionCreatorType|setUserProfileType|setStatusType|savePhotoSuccessType

type addPostActionCreatorType = {
    type: typeof ADD_POST
    newPostBody: string
}

export const addPostActionCreator = (newPostBody: string): addPostActionCreatorType => ({type: ADD_POST, newPostBody});

type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): setUserProfileType => ({type: SET_USER_PROFILE, profile});

type setStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): setStatusType => ({type: SET_STATUS, status});
type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotoType
}

export const savePhotoSuccess = (photos: PhotoType): savePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos});






export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let data = await userAPI.getProfile(userId);
    dispatch(setUserProfile(data.data));
}
export const getStatus = (userId: number) => async (dispatch: any) => {
    let data = await userAPI.getStatus(userId);
    dispatch(setStatus(data.data));
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    let data = await userAPI.updateStatus(status);
    if (data.data.resultCode === 0) {
        dispatch(setStatus(status));
    }

}
export const savePhoto = (file: any) => async (dispatch: any) => {
    let data = await userAPI.savePhoto(file);
    if (data.data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.data.photos));
    }

}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    let userId = getState().auth.userId
    let data = await userAPI.saveProfile(profile);
    if (data.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('editProfile', {_error: data.data.messages[0]}));
        return Promise.reject(data.data.messages[0]);
    }


}







export default profileReducer;