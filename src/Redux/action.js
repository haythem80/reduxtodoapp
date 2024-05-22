import { ADD, COMPLETE, DELETE, EDIT, choice } from "./actionType"


export const handleadd=(newTask) =>{
    return{
        type:ADD,
        payload:newTask,
    };
};

export const handledelete=(ID) =>{
    return{
        type:DELETE,
        payload:ID,
    };
}

export const handlecomplete=(THEID) =>{
    return{
        type:COMPLETE,
        payload:THEID,
    }
}

export const handleEdit =(taskedit) =>{
    return{
        type: EDIT ,
        payload:taskedit,
    }
}


export const handlechoice = (newlist) => {
    return{
        type: choice ,
        payload: newlist,
    }
}