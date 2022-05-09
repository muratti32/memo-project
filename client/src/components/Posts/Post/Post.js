import { Button, Card, CardMedia } from '@material-ui/core';
import { common, posts } from 'components/store/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThumbUpAlt, Delete, MoreHoriz } from '@material-ui/icons';

import { getPosts } from '../thunk';
import useStyles from './styles';

const Post = (props) => {
  const postData = props.post;
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector(common.loading);
  const post = useSelector(posts.postList);
  console.log(`halo posts:`, postData);
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={postData.selectedFile}></CardMedia>
    </Card>
  );
};

export default Post;
