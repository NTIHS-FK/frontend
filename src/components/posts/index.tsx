import React, {useState, useEffect} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Post} from '../review/type';

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts([
      {
        id: 1,
        time: 1232123,
        textImage: 'asdasd',
        voting: false,
      },
    ]);
  }, []);

  return (
    <div id="posts">
      <ImageList variant="masonry" cols={3} gap={5}>
        {posts.map((item) => (
          <ImageListItem key={item.id} className="images">
            <img
              src={`http://127.0.0.1:8080/${item.textImage}.jpg`}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Posts;
