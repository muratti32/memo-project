import React, { useState } from 'react';
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core';
import memories from 'images/memories.png';
import Posts from 'components/Posts/Posts.js';
import Form from 'components/Form/Form';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const [selectedPostId, setSelectedPostId] = useState(null);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          width={60}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justifyContent="space-between"
            alignItems="center"
            spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts setSelectedPostId={setSelectedPostId} />
            </Grid>
            <Grid className={classes.form} item xs={12} sm={4}>
              <Form
                selectedPostId={selectedPostId}
                setSelectedPostId={setSelectedPostId}
              />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
