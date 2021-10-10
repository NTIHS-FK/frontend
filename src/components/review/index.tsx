import React, {useEffect, useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import VoteButton from './voteButton';
import {APIData} from '../../api/data/apiData';
import {Post} from './type';
import {api} from '../../api/api';
import './posts.sass';

const Posts = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<APIData<Array<Post>>>('./votes');
      const responseData = response.data;
      setPosts(responseData.data);
    })();
  }, []);

  return (
    <div id="posts">
      <ImageList variant="masonry" cols={2} gap={5}>
        {posts.map((item) => (
          <ImageListItem key={item.id} className="images">
            <img
              src={`http://127.0.0.1:8080/${item.textImage}.jpg`}
            />
            <ImageListItemBar
              subtitle={<VoteButton id={item.id}/>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Posts;
