export const initialState = {
    user: "Vinh Pham",
    tasks: [],
};

export const actionTypes = {
    SET_USER: "SET_USER",
    ADD_TASK: "ADD_TASK",
    REMOVE_TASK: "REMOVE_TASK",
    EMPTY_TASK: "EMPTY_TASK"
}

// Selector
export const getTotalTasks = (tasks) => tasks?.length;


const reducer = (state, action) => {
    console.log("ACTION >>>>", action);

    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
            case actionTypes.ADD_TASK :
                // console.log('TASKS >>>>', ...state.tasks)
                return {
                    ...state,
                    tasks: [...state.tasks, action.item],
                }
            case actionTypes.REMOVE_TASK:
                console.log('Action id: ', action.id, 'Tasks: ', state.tasks)

                const index = state.tasks.findIndex(
                    (taskItem) => taskItem.id === action.id
                );
    
                const newTasks = [...state.tasks];
    
                if (index >= 0) {
                    newTasks.splice(index, 1);
                    console.log("NEW TASK >>>", newTasks);
                } else {
                    console.warn(`Task (id: ${action.id} not existed in tasks`);
                }
    
                return {
                    ...state,
                    tasks: newTasks
                }
    
            case actionTypes.EMPTY_TASK:
                return {
                    ...state,
                    tasks: []
                }
        default:
            return state;
    }
}


export default reducer;