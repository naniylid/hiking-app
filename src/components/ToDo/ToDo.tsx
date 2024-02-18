import React from 'react';
import { ToastContainer } from 'react-toastify';
import './ToDo.module.scss';
import List from './List';

const ToDo: React.FC = () => {
  return (
    <div className="toDo">
      <ToastContainer />
      <List />
    </div>
  );
};

export default ToDo;
