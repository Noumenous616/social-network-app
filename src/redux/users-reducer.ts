import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import { UserType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';






let initialState = {

    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
};

export type InitialState = typeof initialState;



const usersReducer = (state = initialState, action: ActionsType): InitialState => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })*/
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                /*users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })*/
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)

            }


        default:
            return state;
    }
}

type ActionsType = followSuccessType | unfollowSuccessType | setUsersType | setCurrentPageType | setTotalUsersCountType | toggleIsFetchingType | toggleFollowingInProgressType


type followSuccessType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): followSuccessType => ({type: FOLLOW, userId});

type unfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): unfollowSuccessType => ({type: UNFOLLOW, userId});

type setUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): setUsersType => ({type: SET_USERS, users});
 type setCurrentPageType = {
     type: typeof SET_CURRENT_PAGE
     currentPage: number
 }

export const setCurrentPage = (currentPage: number): setCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage});

 type setTotalUsersCountType = {
     type: typeof SET_TOTAL_USERS_COUNT
     count: number

 }
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

 type toggleIsFetchingType = {
     type: typeof TOGGLE_IS_FETCHING
     isFetching: boolean
 }
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});

 type toggleFollowingInProgressType = {
     type: typeof FOLLOWING_IN_PROGRESS
     isFetching: boolean
     userId: number
 }
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): toggleFollowingInProgressType => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId});



type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch, getState) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number) => followSuccessType | unfollowSuccessType) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, userAPI.post.bind(userAPI), followSuccess);
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, userAPI.delete.bind(userAPI), unfollowSuccess);

}


export default usersReducer;