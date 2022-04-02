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
                <div className=''>
                    <div className='flex justify-center'>
                        <img className='p-1 rounded-md border-2 bg-white' src={blog?.imageURL} alt="" />
                    </div>
                    <div  className='container mx-auto'>
                        <h2 className='text-3xl font-bold text-center mt-4 mb-4'>{blog?.title}</h2>
                        <p className='leading-8'>{blog?.blog}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;