import {AppStateType} from "./redux-store";

export const GetUsersRequaest = (state: AppStateType) => {
    return state.usersPage.users;
}

export const GetPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
}
export const GetTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount;
}
export const GetCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
}
export const GetIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
}
export const GetFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress;
}