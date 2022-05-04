import { Button } from '@material-ui/core';
import { common, posts } from 'components/store/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../thunk';
import useStyles from './styles';

const Post = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector(common.loading);
  const post = useSelector(posts.postList);
  console.log(`halo posts:`, post);
  return (
    <>
      <div>loading : {loading.toString()} </div>

      <Button
        disableElevation
        variant='contained'
        color='primary'
        onClick={() => dispatch(getPosts('1231232'))}
      >
        get data
      </Button>
    </>
  );
};

export default Post;
