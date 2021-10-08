import React, {ChangeEvent, useState} from 'react';
import FormData from 'form-data';
import {styled} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import BoardGauge from './boardGauge/boardGauge';
import {SnackbarMessage} from './snackbar';
import './submit.sass';
import {api} from '../../api';
import Logger from 'js-logger';


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

  const progress = (event: ProgressEvent) => {
    console.log(Math.round((100 * event.loaded) / event.total));
  };
  // 發文啦哈哈
  const post = () => {
    const text =
        document.getElementById('post-text') as HTMLInputElement;
    const image =
        document.getElementById('psot-image') as HTMLInputElement;
    const formData = new FormData();

    if (text.value !== '') {
      // 這裡要呼叫API啦
      const textContent = text.value;
      let imageContent: File | null = null;

      formData.append('text', textContent);

      if (image.files !== null) {
        imageContent = image.files[0];
        formData.append('image', imageContent);
      }

      api.post(
          '/post',
          formData,
          {
            headers: {'content-type': 'multipart/form-data'},
            onUploadProgress: progress,
          },
      )
          .then((data) => {
            Logger.log(data.data);
          })
          .catch((error) => {
            Logger.error(error);
          });
    } else {
      setSnackbar({open: true, message: '沒有輸入文字喔'});
    }
  };

  return (
    <div id="submit">
      <BoardGauge />

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
          發表
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
