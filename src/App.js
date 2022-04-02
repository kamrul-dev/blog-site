import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Videos from './Components/Videos/Videos';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import { createContext, useState } from 'react';
import BlogDetails from './Components/BlogDetails/BlogDetails';


export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);
  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/videos' element={<Videos></Videos>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </BlogContext.Provider>
  );
}

export default App;
