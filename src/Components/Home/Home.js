import React, { useEffect, useState } from 'react';
import './Home.css';
import Blog from '../Blog/Blog';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs)
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);
    return (
        <div className='container mx-auto'>
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