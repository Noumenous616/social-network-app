import React from 'react';
import avatar from './img/01.jpg';
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";



let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 25},
                {id: 2, message: "It's my first post", likesCount: 25},
                {id: 2, message: "It's my first post", likesCount: 25},
                {id: 2, message: "It's my first post", likesCount: 25}
            ],
            newPostText: "Введите сообщение"

        },


        messagesPage: {
            dialogs: [
                {img: avatar, id: 1, name: "Серега"},
                {img: avatar, id: 2, name: "Миша"},
                {img: avatar, id: 3, name: "Ваня"}

            ],
            messages: [
                {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
                {id: 2, message: "Lorem ipsum dolor sit amet."},
                {id: 3, message: "Lorem ipsum dolor."}

            ],
            newMessageText: "Введите сообщение"
        },
        sidebar: {
            peoples: [
                {img: avatar, id: 1, name: "Серега"},
                {img: avatar, id: 2, name: "Миша"},
                {img: avatar, id: 3, name: "Ваня"}

            ]

        }

    },
    _callSubscriber() {
        console.log('State change');
    },
    getState() {
        return this._state;
    },
    subscribe(observer)  {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage =  profileReducer(this._state.profilePage, action);
        this._state.messagesPage =  dialogReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);

    },



} // закрывающие тег стора //

export default store;
window.store = store;