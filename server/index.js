import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postsRouter from './routes/posts.js';

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/posts', postsRouter);

const CONNECTION_URL =
  'mongodb+srv://murat:8UR4Fr73TWXUi2h2@cluster0.igdb9.mongodb.net/memories_project?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log('Connected to database');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
