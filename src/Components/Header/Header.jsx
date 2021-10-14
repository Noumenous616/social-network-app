import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import tomato from '../../accets/img/Tomato.png'


const Header = (props) => {
    return ( 
      <header className={s.header}>

        <a href='/profile'>
            <img src={tomato} />
        </a>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Выйти</button></div>
                : <NavLink to ={'/login'}>Войти</NavLink> }

        </div>
      </header> 
    )
}

export default Header;