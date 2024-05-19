import Post from "../models/post.js";

export const renderIndex = (req, res) => {
    res.render('index.ejs');
};

export const getPostById = async (req, res) => {
    try {
        const post = await Post.getPostById(req.params.postId - 1);
        if (post) {
            res.render('post.ejs', { 
                postId: req.params.postId,
                postHeading: post.heading,
                postContent: post.content
            });
        } else {
            res.status(404).send('Post not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const submitNewPost = (req, res) => {
    const postTitle = req.body.postTitle;
    const postContent = req.body.postContent;
    const newPost = new Post(postTitle, postContent);
    Post.addPost(newPost);
    res.render('blog.ejs', {
        numberOfPosts: Post.numberOfPosts,
        posts: Post.posts
    });
};

export const renderBlog = (req, res) => {
    res.render('blog.ejs', {
        numberOfPosts: Post.numberOfPosts,
        posts: Post.posts
    });
};

export const renderNewPostForm = async (req, res) => {
    try {
        if (req.params.postId) {
            const post = await Post.getPostById(req.params.postId - 1);
            if (post) {
                res.render('new.ejs', { 
                    postHeading: post.heading,
                    postContent: post.content
                });
            } else {
                res.status(404).send('Post not found');
            }   
        } else {
            res.render('new.ejs', { 
                postHeading: '', 
                postContent: '' 
            });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


export const renderUpdatePage = (req, res) => {
    res.render("update.ejs");
}

export const renderAboutPage = (req, res) => {
    res.render("about.ejs");
};


// controllers/postController.js
export const renderDeletePost = async (req, res) => {
    try {
        if (req.params.postId) {
            const postId = parseInt(req.params.postId, 10) - 1; // Ensure postId is an integer
            const post = Post.posts[postId]; // Fetch the post by index
            
            if (post) {
                // Delete the post from the array
                Post.posts.splice(postId - 1, 1);
                Post.numberOfPosts -= 1;
                res.render('delete.ejs', { 
                    message: 'Post successfully deleted.' 
                });
            } else {
                res.status(404).send('Post not found');
            }
        } else {
            res.status(400).send('Invalid post ID');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
