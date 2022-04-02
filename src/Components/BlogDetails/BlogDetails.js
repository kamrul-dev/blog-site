import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogContext } from '../../App';
import './BlogDetails.css';
import { AiOutlineDoubleLeft } from 'react-icons/ai';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blogs, setBlogs] = useContext(BlogContext);

    const blog = blogs.find(blog => blog._id === id)
    return (
        <>
            <div className='header-gradient' />
            <div className='p-5'>
                <button className='text-white flex items-center hover:text-sky-300' onClick={() => navigate(-1)}><AiOutlineDoubleLeft />Back</button>
            </div>
            <div>
                <div className='text-center'>
                    <img className='text-center' src={blog?.imageURL} alt="" />
                    <h2 className='text-3xl'>{blog?.title}</h2>
                    <p>{blog?.blog}</p>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;