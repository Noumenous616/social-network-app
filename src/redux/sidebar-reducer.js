import avatar from "./img/01.jpg";

const PEOPLES_ONLINE = 'PEOPLES-ONLINE'


let initialState = {
        peoples: [
            {img: avatar, id: 1, name: "Серега"},
            {img: avatar, id: 2, name: "Миша"},
            {img: avatar, id: 3, name: "Ваня"}

        ]

};


const sidebarReducer = (state = initialState,action) => {

    switch (action.type) {
        case PEOPLES_ONLINE:
            state.peoples = state.peoples;
            return state;
        default:
            return state;
    }
}





export default sidebarReducer;