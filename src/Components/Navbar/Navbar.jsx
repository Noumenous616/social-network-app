import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";



const Navbar = (props) => {
    return (
      <nav className={s.nav}>
          <div className={s.item}>
            <NavLink to="/Profile" activeClassName={s.activeLink}>Profile</NavLink>
          </div>
        <div className={s.item}>
          <NavLink to="/Dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/TaskManager" activeClassName={s.activeLink}>Task Manager</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/Music" activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/PhotoSlider" activeClassName={s.activeLink}>PhotoSlider</NavLink>
        </div>
        <div>
          {/*<Users store={props.store}
                   dispatch={props.dispatch}/>*/}
        </div>
          <div className={s.item}>
              <NavLink to="/Users" activeClassName={s.activeLink}>Users</NavLink>
          </div>

      </nav>
    )
}

export default Navbar;