import React from 'react';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow, ...props}) => {

    return (
        <div className={s.users}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img
                            src={user.photos.small != null ? user.photos.small : 'https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg'}
                            className={s.img}/>
                    </NavLink>
                        </div>
                    <div>
                        {user.followed
                            ?
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>

                    </span>
                    <span>
                         <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
        </div>)
}

export default User;