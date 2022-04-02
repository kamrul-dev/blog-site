import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from '../../App';
import './BlogDetails.css';

const BlogDetails = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useContext(BlogContext);

    const blog = blogs.find(blog => blog._id === id)
    return (
        <> 
        <div className='header-gradient' />
            <div>
                <h2>This is Blog Details page</h2>
                <div>
                    <img src={blog?.imageURL} alt="" />
                    <h2 className='text-3xl'>{blog?.title}</h2>
                    <p>{blog?.blog}</p>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;