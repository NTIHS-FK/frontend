import React from 'react';
import Button from '@mui/material/Button';
import './voteButtons.sass';

const VoteButton = () => {
  return (
    <div className="vote-buttons">
      <Button variant="contained" color="success">通過</Button>
      <Button variant="contained" color="error">反對</Button>
    </div>
  );
};

export default VoteButton;
