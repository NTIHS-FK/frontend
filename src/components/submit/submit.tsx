import React from 'react';
import BoardGauge from './boardGauge/boardGauge';
import PostForm from './postForm/postForm';
import './submit.sass';

const Submit = () => {
  return (
    <div id="submit">
      <BoardGauge />
      <PostForm />
    </div>
  );
};

export default Submit;
