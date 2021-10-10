import React, {useEffect, useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Post} from './type';
import {api} from '../../api/api';
import './posts.sass';
import {APIData} from '../../api/data/apiData';

const Posts = () => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  useEffect(() => {
    (async () => {
      const response = await api.get('./posts');
      const responseData = response.data as APIData<Array<Post>>;
      setPosts(responseData.data);
    })();
  }, []);

  return (
    <div id="posts">
      <ImageList variant="masonry" cols={3} gap={8}>
        {posts.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.textImage}?w=248&fit=crop&auto=format`}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Posts;
