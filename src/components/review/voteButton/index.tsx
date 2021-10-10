import React, {FC} from 'react';
import Button from '@mui/material/Button';
import {api} from '../../../api/api';
import {ErrorData} from '../../../api/data/apiErrorData';
import './voteButtons.sass';

const VoteButton: FC<{id: number}> = ({id}) => {
  const voteAPI = (vote: boolean = false) => {
    return () => {
      (async () => {
        const response = await api.post(`/vote/${id}`);
        const responseData = (response.data as ErrorData);
      })();
    };
  };

  return (
    <div className="vote-buttons">
      <Button
        variant="contained"
        color="success"
        onClick={voteAPI()}
      >
        通過
      </Button>
      <Button variant="contained" color="error">反對</Button>
    </div>
  );
};

export default VoteButton;
