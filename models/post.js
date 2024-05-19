class Post {
  static numberOfPosts = 0;
  static posts = []
  constructor (heading, content) {
    this.heading = heading;
    this.content = content;
  }

    static addPost(post) {
      Post.posts.push(post);
      Post.numberOfPosts += 1;
  }

  static getPostById(id) {
      return Post.posts[id];
  }
}

export default Post;