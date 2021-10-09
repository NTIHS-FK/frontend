import React, {ChangeEvent, useState} from 'react';
import {api} from '../../../api/api';
import {ErrorData} from '../../../api/data/apiErrorData';
import {SnackbarMessage} from './snackbar';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import FormData from 'form-data';
import Logger from 'js-logger';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import {styled} from '@mui/material/styles';
import {AxiosError} from 'axios';

const Input = styled('input')({
  display: 'none',
});

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PostForm = () => {
  const [preview, setPreview] = useState('');
  const [snackbar, setSnackbar] =
    useState<SnackbarMessage>({open: false});
  const [percentageOfProgress, setPercentageOfProgress] = useState(0);

  const imagePreview = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file != null) {
      setPreview(window.URL.createObjectURL(file[0]));
    }
  };

  const progress = (event: ProgressEvent) => {
    setPercentageOfProgress(Math.round((100 * event.loaded) / event.total));
  };

  // 發文啦哈哈
  const post = async () => {
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
      // 開始的提示
      setSnackbar(
          {
            open: true,
            message: '發布中',
            action: <CircularProgressWithLabel value={percentageOfProgress} />,
          },
      );

      try {
        const postRespond = await api.post(
            '/post',
            formData,
            {
              headers: {'content-type': 'multipart/form-data'},
              onUploadProgress: progress,
            },
        );

        setPercentageOfProgress(0);
        setSnackbar(
            {
              open: true,
              content: <Alert severity="success">發表成功</Alert>,
            },
        );

        Logger.log(postRespond.data);
      } catch (error) {
        const errorData = (error as AxiosError).response!!.data as ErrorData;

        setPercentageOfProgress(0);
        setSnackbar(
            {
              open: true,
              content: <Alert
                severity="error"
                sx={{width: '100%'}}
              >
                {errorData.message}
              </Alert>,
            },
        );

        Logger.error(errorData);
      }
    } else {
      setSnackbar(
          {
            open: true,
            content: <Alert severity="warning">沒有輸入文字喔</Alert>,
          },
      );
    }
  };

  return (
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
            <h2>點我選擇圖片上傳</h2>
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

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => {
          setSnackbar({open: false, content: snackbar.content});
        }}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        action={snackbar.action}
        message={snackbar.message}
      >
        {snackbar.content}
      </Snackbar>
    </div>

  );
};

export default PostForm;
