import express from 'express';
import {
    renderIndex,
    getPostById,
    submitNewPost,
    renderBlog,
    renderNewPostForm,
    renderAboutPage,
    renderUpdatePage,
    renderDeletePost
} from '../controllers/postController.js';

const router = express.Router();

// Route to render the index page
router.get('/', renderIndex);

// Route to render the blog page with all posts
router.get('/blog', renderBlog);

// Route to render the form for creating a new post
router.get('/new', renderNewPostForm);

router.get('/edit/:postId', renderNewPostForm);

// Route to handle the submission of a new post
router.post('/submit', submitNewPost);

// Route to render a single post by ID
router.get('/post/:postId', getPostById);

router.get('/about', renderAboutPage);

router.post('/update', renderUpdatePage);

router.post('/delete/:postId', renderDeletePost);

export default router;