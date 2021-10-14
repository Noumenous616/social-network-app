
import {getAuthUserData} from "./auth-reducer";



const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {

    initialized: false

};

type ActionType = SetInitializedSuccessActionType
const appReducer = (state: InitialStateType = initialState,action: ActionType): InitialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true

            }
            default:
            return state;
    }
}

export type SetInitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}


export const setInitializedSuccess = (): SetInitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () =>(dispatch: any) => {
     let promise = dispatch(getAuthUserData());
     Promise.all([promise])
     .then ( () => {
         dispatch(setInitializedSuccess());
     })



}

export default appReducer;