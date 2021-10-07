import React, {ChangeEvent, useState} from 'react';
import {styled} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import {SnackbarMessage} from './snackbar';
import './submit.sass';


const Input = styled('input')({
  display: 'none',
});

const Submit = () => {
  const [preview, setPreview] = useState('');
  const [snackbar, setSnackbar] =
      useState<SnackbarMessage>({open: false, message: ''});

  const imagePreview = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file != null) {
      setPreview(window.URL.createObjectURL(file[0]));
    }
  };

  const post = () => {
    const text =
        document.getElementById('post-text') as HTMLInputElement;
    const image =
        document.getElementById('psot-image') as HTMLInputElement;

    if (text.value !== '') {
      (text.value);
    } else {
      setSnackbar({open: true, message: '沒有輸入文字喔'});
    }
  };

  return (
    <div id="submit">
      <div id="board-gauge">
        <h1>板規</h1>
        <Divider />
        <h3>
          一、發表文章時之注意事項
        </h3>
        <p>
          1. 避免在公眾區域，討論私人事務。<br />
          2. 禁止重複刊登相同內容或相同意義之留言。<br />
          3. 禁止發表謾罵、脅迫、挑釁、猥褻或不雅之文字。<br />
          4. 禁止發表個人測試用文章或散播不實消息之文章，張貼文章，應自負相關法律責任。<br />
          5. 臣服在young的大ㄐㄐ
        </p>
        <h3>
          二、違規處理辦法
        </h3>
        <p>
          1. 違反上述規定之文章或作者，版主可刪除文章
        </p>
      </div>

      <div id="post">
        <TextField
          id="post-text"
          label="貼文內容"
          multiline
          rows={7}
          style={{width: '100%'}}
        />
        <label htmlFor="psot-image" >
          <Input
            accept="image/*"
            id="psot-image"
            multiple type="file"
            onChange={imagePreview}
          />
          <div id="image-preview">
            {preview === '' ? (
              <h2>點我上傳</h2>
            ) : (
              <div>
                <img src={preview} />
                <Divider />
                <p style={{marginTop: '20px'}}>點選我換別張圖</p>
              </div>
            )}
          </div>
        </label>
        <Button
          variant="contained"
          color="success"
          style={{width: '100%', marginTop: '50px', fontSize: '20px'}}
          onClick={post}
        >
          發布
        </Button>
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => {
          setSnackbar({open: false, message: ''});
        }}
        message={snackbar.message}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      />
    </div>
  );
};

export default Submit;
