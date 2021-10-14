import React from 'react';
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}


let Users: React.FC<PropsType> =
    ({currentPage, onPageChanged, totalUsersCount, pageSize, users,
         followingInProgress, unfollow, follow,  ...props}) => {
    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemCount={totalUsersCount}
                   pageSize={pageSize}/>
        {

            users.map(u => <User followingInProgress={followingInProgress}
                                 user={u}
                                 key={u.id}
                                 unfollow={unfollow}
                                 follow={follow}/>)
        }
    </div>
}

export default Users;