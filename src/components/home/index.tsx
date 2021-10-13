import React from 'react';
import links from './link.json';
import './home.sass';

const Home = () => {
  return (
    <div id="home">

      <div id="title">
        <h1>
          靠北南工 +
        </h1>
      </div>

      <h2>開發契機</h2>
      <p>
        某天我去用了舊的靠北南工匿名發言發現
        <br />
        乾不能傳圖片上去還有圖文樣式永遠只有一個黑底白字不能改變QQ
        <br />
        所以就跑來自幹一個靠北網頁。
      </p>

      <h2>目前支援發布社群平台</h2>
      <div className="social-software">
        <a className="fab fa-discord" href={links.discord}></a>
        <a className="fab fa-twitter-square" href={links.twitter}></a>
      </div>

      <h2>審文機制</h2>
      <p>

      </p>
    </div>
  );
};

export default Home;
