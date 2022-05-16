import { CircularProgress, Grid } from '@material-ui/core';
import { posts } from 'components/store/selectors';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';
import { getPosts } from './thunk';

const Posts = ({ setSelectedPostId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postList = useSelector(posts.postList);

  console.log(`halo postList:`, postList);
  useEffect(() => {
    dispatch(getPosts('halo'));
  }, [dispatch]);

  return (
    <>
      {!postList?.length ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          spacing={3}>
          {postList.map((post) => (
            <Grid item key={post._id} xs={12} sm={6} md={6}>
              <Post post={post} setSelectedPostId={setSelectedPostId} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Posts;
