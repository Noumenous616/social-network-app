import React from 'react'

let reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                }

            ];
        case 'remove':
            return state.filter(task => {
                return task.id !== action.payload
            })
        case 'toggle':
            return state.map(task => {
                if (task.id === action.payload) {
                    task.completed = !task.completed
                }
                return task;
            })

        default:

    }
}

export default reducer;