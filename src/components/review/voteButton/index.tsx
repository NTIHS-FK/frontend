import React, {FC} from 'react';
import Button from '@mui/material/Button';
import {authAPI} from '../../../api/api';
import {ErrorData} from '../../../api/data/apiErrorData';
import './voteButtons.sass';

const VoteButton: FC<{id: number}> = ({id}) => {
  const voteAPI = (vote: boolean = false) => {
    return () => {
      (async () => {
        const response = await authAPI<ErrorData>('', 'post', `/vote/${id}`);
        const responseData = response.data;
      })();
    };
  };

  return (
    <div className="vote-buttons">
      <Button
        variant="contained"
        color="success"
        onClick={voteAPI(true)}
      >
        通過
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={voteAPI()}
      >
        反對
      </Button>
    </div>
  );
};

export default VoteButton;
