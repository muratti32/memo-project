import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { common, posts } from 'components/store/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThumbUpAlt, Delete, MoreHoriz } from '@material-ui/icons';

import useStyles from './styles';
import moment from 'moment';
import { deletePost } from '../thunk';

const Post = (props) => {
  const postData = props.post;
  const setSelectedPostId = props.setSelectedPostId;
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          postData.selectedFile ||
          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        }
        title={postData.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h5"> {postData?.creator} </Typography>
        <Typography variant="body2">
          {moment(postData?.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'white' }}
          size="small"
          onClick={() => {
            setSelectedPostId(postData._id);
          }}>
          <MoreHoriz fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="primary">
          {postData?.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2">
        {postData.title}
      </Typography>

      <CardContent>
        <Typography variant="h5" className={classes.title} gutterBottom>
          {postData.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAlt fontSize="small" /> Like {postData.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(deletePost(postData._id));
          }}>
          <Delete fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
