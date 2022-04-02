import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import Blog from '../Blog/Blog';
import { BlogContext } from '../../App';

const Home = () => {
    // const [blogs, setBlogs] = useState([]);
    const [blogs, setBlogs] = useContext(BlogContext);
    console.log(blogs)
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);
    return (
        <div className='container mx-auto mt-10'>
            {
                blogs.map(blog => <Blog
                    key={blog._id}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Home;