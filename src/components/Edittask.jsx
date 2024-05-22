import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import {handleEdit} from '../Redux/action';


const Edittask = ({task}) => {
    const [list, setList] = useState(task.action);
    const dispatch = useDispatch();
    const handlesubmit=(e)=>{
        e.preventDefault();
        const editone={
            id:task.id, action:list,isDone:task.isDone
        }
        dispatch(handleEdit(editone))
        closeModal()
    }
    const customStyles = {
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        },
    };
    
      // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
        Modal.setAppElement('#root');
        
        const [modalIsOpen, setIsOpen] = React.useState(false);
        
        function openModal() {
            setIsOpen(true);
            }

        function closeModal() {
            setIsOpen(false);
            }
    return (
    <div>
    <button onClick={openModal}>
    Edit
    </button>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
    >
    {" "}
    <form onSubmit={handlesubmit} >
    <input type="text" value={list}  onChange={e => setList(e.target.value)}/>
    <div>
    <button type="submit">confirme</button>
    <button onClick={closeModal}>cancel</button>
        </div>
        </form>
        </Modal>
    </div>
    )
}

export default Edittask