import React from 'react';
import { useNavigate } from 'react-router-dom';
import Indicator from '../../Assets/Image/indicator.svg'

const Blog = ({ blog }) => {
    const navigate = useNavigate();
    const { title, admin, blog: blogBody, imageURL, _id } = blog;
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-16 p-10'>
            <div className='shadow-md border-2 align-middle'>
                <img className='w-full p-2' src={imageURL} alt="" />
            </div>
            <div>
                <div>
                    <h2 className='text-2xl font-bold mb-3 text-sky-400'>{title}</h2>
                    <div className='flex'>
                        <img src={Indicator} alt="" />
                        <p className='ml-2'>{admin}</p>
                        <small className='mt-1 ml-2 italic text-sky-700'>Author</small>
                    </div>
                </div>
                <p className='leading-8'>
                    {blogBody.length < 350 ? blogBody : blogBody.slice(0, 350)}
                    <span className='text-sky-400 cursor-pointer hover:text-sky-700' onClick={() => navigate(`/blog/${_id}`)}>...Read More</span>
                </p>
            </div>
        </div>
    );
};

export default Blog;   