import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import HeaderContainer from "./Components/Header/HeaderCantainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import UsersContainer from "./Components/Users/UsersContainer";
import {withSuspense} from "./hoc/withSuspance";
import TaskManager from "./Components/TaskManager/TaskManager";
import PhotoSlider from "./Components/PhotoSlider/PhotoSlider";
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));






class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                    <Route path='/taskmanager' render={() => <TaskManager/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/PhotoSlider' render={() => <PhotoSlider/>}/>
                    <Route path='/users' render={() => <UsersContainer pageTitle={'Самураи'}/> }/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp}))
    (App);
