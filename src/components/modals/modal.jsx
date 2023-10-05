import React, {Component} from 'react';
import { IoMdClose } from "react-icons/io";
import NewCourse from "./new-course-form";
import ReactModal from "react-modal";

ReactModal.setAppElement('#root')

const customStyles = {
  content:{
    top:'50%',
    left:'50%',
    right:'auto',
    marginRight:'-50%',
    transform:'translate(-50%, -50%',
    width:'800px'
},
overlay:{
    backgroundColor:'rgba(1, 1, 1, 0.75)',
}
};

const NewCourseModal = ({ isModalOpen, onClose }) => {
    if (isModalOpen !== true) {
      return null;
    }

  
    return (
      
      <section id='root'>
        <div>
          <ReactModal onRequestClose={() => {
        onClose();
        
      }}
      isOpen={isModalOpen}
      style={customStyles}>
          <NewCourse />
          <button onClick={() => onClose()}>Cancel</button>
          </ReactModal>
        </div>
      </section>
      
    );
  }


export default NewCourseModal;