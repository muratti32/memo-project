import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  const handleSubmit = (second) => {};
  const clearForm = (second) => {};

  return (
    <Paper className={classes.paper}>
      <Form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating Memory</Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          value={postData.creator}
        />
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          value={postData.title}
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          value={postData.message}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          value={postData.tags}
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={(file) => setPostData({ ...postData, selectedFile: file })}
          />
          <Button
            className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            type='submit'
            size='large'
          >
            Submit
          </Button>
          <Button
            variant='contained'
            type='reset'
            color='secondary'
            size='small'
            onClick={clearForm}
          ></Button>
        </div>
      </Form>
    </Paper>
  );
};

export default Form;
