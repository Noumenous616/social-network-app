/*
import React from 'react';
import s from './Sidebar.module.css';


const SideBarItem = (props) => {
    return (
        <div className={s.sidebar}>
            <img src={props.img} />
           <div>

               {props.name}
           </div>
        </div>
    )
}

const Sidebar = (props) => {
    let state = props.store.getState().sidebar;

    let sidebarElements = state.peoples.map(people => <SideBarItem name={people.name} id={people.id} img={people.img}/>);



    return (

        <div className={s.descripton}>
            <h2>Online Now</h2>
            {sidebarElements}
        </div>


    )
}

export default Sidebar;*/
