import React from 'react';
import BoardGauge from './boardGauge';
import PostForm from './postForm';
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
