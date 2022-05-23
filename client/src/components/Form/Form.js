import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from 'components/Posts/thunk';
import { posts } from 'components/store/selectors';

const Form = ({ selectedPostId, setSelectedPostId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const postList = useSelector(posts.postList);

  const initialPostData = {
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  };
  const [postData, setPostData] = useState(initialPostData);

  useEffect(() => {
    if (selectedPostId) {
      const post = postList.find((post) => post._id === selectedPostId);
      if (post) setPostData(post);
    }
  }, [postList, selectedPostId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPostId) {
      dispatch(createPost(postData));
    } else {
      dispatch(updatePost({ ...postData, id: selectedPostId }));
    }
    setSelectedPostId(null);
    setPostData(initialPostData);
  };

  const clearForm = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}>
        <Typography variant="h6">
          {selectedPostId === null ? 'Creating' : 'Editing'} Memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          value={postData.creator}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          value={postData.title}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          value={postData.message}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(',') })
          }
          value={postData.tags}
        />
        <div className={classes.fileInput}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={(file) =>
              setPostData({ ...postData, selectedFile: file.base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          size="large">
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          type="reset"
          color="secondary"
          size="small"
          fullWidth
          onClick={clearForm}>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
