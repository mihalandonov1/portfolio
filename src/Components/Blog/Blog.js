import './Blog.css';
import BlogCard from './Blog-card';
import BlogCardData from './BlogData';
import React from 'react';

export const Blog = () => {
  return (
    <div className="blog-container">
        <h1 className="blog-heading">Blog</h1>
        <div className="blog-wrapper">
            {BlogCardData.map((val, ind) => {
                return (
                    <BlogCard 
                    key={ind} 
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                     view={val.view}/>
                )
            })}
        </div>
    </div>
  )
}

export default Blog;