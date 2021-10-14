import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import tomato from '../../accets/img/Tomato.png'
import Redirect from "react-router-dom/es/Redirect";



function iconProfile() {
    return (
        <div>
            <a href="">
                <img src={tomato} />
            </a>
        </div>
    )
}
export default iconProfile;