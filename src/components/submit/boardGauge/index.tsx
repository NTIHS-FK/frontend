import React from 'react';
import Divider from '@mui/material/Divider';
import './boardGauge.sass';

const BoardGauge = () => {
  return (
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
        5. 臣服在young的大ㄐㄐ之下
      </p>
      <h3>
        二、違規處理辦法
      </h3>
      <p>
        1. 違反上述規定之文章或作者，版主可刪除文章
      </p>
    </div>
  );
};

export default BoardGauge;
