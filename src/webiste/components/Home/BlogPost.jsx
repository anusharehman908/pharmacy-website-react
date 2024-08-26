import React from 'react';
import './BlogPost.css';

const blogData = [
  {
    title: "First Blog Post",
    image: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FBlogs%2520Images%2FTHUJA-Blog-Banner.jpg&w=1400&q=75",
    content: "This is the content of the first blog post."
  },
  {
    title: "Second Blog Post",
    image: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FBlogs%2520Images%2Fhaemorrhoids-blog-Banner.jpg&w=1400&q=75",
    content: "This is the content of the second blog post."
  },
  {
    title: "Third Blog Post",
    image: "https://www.dvago.pk/_next/image?url=https%3A%2F%2Fdvago-assets.s3.ap-southeast-1.amazonaws.com%2FBlogs%2520Images%2Fweak%2520bones%2520-%2520Blog%2520Banner.png&w=1400&q=75",
    content: "This is the content of the third blog post."
  }
];

const BlogPost = () => {
  return (
    <div className="sub-section">
      <div className="container">
        <div className="row">
          <h3 className='main-heading text-center'>Blogs</h3>
          {blogData.map((post, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="blog-post">
                <div className="blog-post-img">
                  <img src={post.image} alt={post.title} className="circle-img" />
                </div>
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-content">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
