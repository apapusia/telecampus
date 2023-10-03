import React, {Component} from 'react';
import { IoMdClose } from "react-icons/io";
import NewCourse from "./new-course-form";
import ReactModal from "react-modal";

ReactModal.setAppElement('#root')

const NewCourseModal = ({ isModalOpen, onClose }) => {
    if (isModalOpen !== true) {
      return null;
    }

  
    return (
      
      <section id='root'>
        <div>
          <ReactModal isOpen={isModalOpen}>
          <NewCourse />
          <button onClick={() => onClose()}>Close</button>
          </ReactModal>
        </div>
      </section>
      
    );
  }


export default NewCourseModal;