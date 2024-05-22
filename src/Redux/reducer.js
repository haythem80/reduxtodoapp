import { ADD, COMPLETE, DELETE, EDIT, choice } from "./actionType";


const init={
    todos:[],
}

export const taskreducer=(state=init , {type,payload})=>{
    switch (type) {
        case ADD:
            return{
                ...state,todos:[...state.todos,payload],
            }
        case DELETE:
            return {
                ...state,todos:state.todos.filter(el=>el.id!== payload)
            };
        case COMPLETE:
            return{
                ...state,todos:state.todos.map(el=>el.id === payload ? {...el,isDone: !el.isDone}:el)
            }
        case EDIT:
            return{
                ...state,todos:state.todos.map(el=> el.id=== payload.id ? payload:el)
            }
            case choice : 
            return{
                ...state,todos: payload.action
            }
        default:
            return state
    }
}