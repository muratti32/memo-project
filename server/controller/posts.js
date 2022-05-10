import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = new PostMessage(post);
    const result = await newPost.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send('No Post with that ID');

    const result = await PostMessage.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      },
      (err, doc) => {
        if (err) return res.status(404).send(err);
      },
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
