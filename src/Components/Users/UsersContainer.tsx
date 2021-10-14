import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {
    GetCurrentPage, GetFollowingInProgress,
    GetIsFetching,
    GetPageSize,
    GetTotalUsersCount,
    GetUsersRequaest
} from "../../redux/users-selectiors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";



type MapStatePropsType  = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {

    unfollow: (userId: number) => void
    follow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type OwnPropsType = {
    pageTitle: string
}



type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType




class UsersApiComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
            { this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        followingInProgress={this.props.followingInProgress}/>
        </>
    }

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: GetUsersRequaest(state),
        pageSize: GetPageSize(state),
        totalUsersCount: GetTotalUsersCount(state),
        currentPage: GetCurrentPage(state),
        isFetching: GetIsFetching(state),
        followingInProgress: GetFollowingInProgress(state)
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            let action = followAC(userId);
            dispatch(action);
        },
        unfollow: (userId) => {
            let action = unfollowAC(userId);
            dispatch(action);

        },
        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action);

        },
        setCurrentPage: (pageNumber) => {
            let action = setCurrentPageAC(pageNumber);
            dispatch(action);

        },
        setTotalUsersCount: (totalCount) => {
            let action = setTotalUsersCountAC(totalCount);
            dispatch(action);

        },
        toggleIsFetching: (isFetching) => {
            let action = toggleIsFetchingAC(isFetching);
            dispatch(action);

        }

    }

    }*/

export default compose (
    withAuthRedirect,
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
        follow, unfollow, getUsers}))
(UsersApiComponent);