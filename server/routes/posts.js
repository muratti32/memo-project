import express from 'express';
import { createPost, getPosts } from '../controller/posts.js';

const router = express.Router();

router.get('/', getPosts )
router.post('/',createPost)
export default router;